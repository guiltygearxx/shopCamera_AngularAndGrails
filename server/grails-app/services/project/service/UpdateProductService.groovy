package project.service

import grails.gorm.transactions.Transactional
import project.bean.ProductForm
import project.domain.Attribute
import project.domain.AttributeValue
import project.domain.Product

@Transactional
class UpdateProductService implements BaseService {

    static scope = "request"

    def applicationUtilsService;
    def cacheService;

    private ProductForm form;

    private Product product;

    private List<AttributeValue> attributeValues;

    private List<AttributeValue> updatedAttributeValues;

    private Map attributeMapByCode;

    private List<Attribute> attributes;

    private Boolean validate() {

        return this.validateForm() && this.validateExistName();
    }

    private Boolean validateForm() {

        Boolean isOk = true;

        if (!form.validate()) {

            isOk = false;

            this.errors << new Error(errorCode: "updateProductService.invalidItemRow", params: [form.errors]);
        }

        return isOk;
    }

    private Boolean validateExistName() {

        String oldName = form.productId ? product.name : null;

        String newName = form.name;

        if (oldName == newName) return true;

        Product product = Product.findByNameAndIsDeleted(form.name, false);

        if (product) {

            this.errors << new Error(errorCode: "updateProductService.existedName", params: [form.name]);

            return false;
        }

        return true;
    }

    private Attribute getAttributeByCode(String code) {

        return attributeMapByCode.get(code)?.get(0);
    }

    private AttributeValue getOldAttributeValue(String attributeId) {

        return this.attributeValues?.find { it.attributeId == attributeId };
    }

    private void updateAttributeValue(String code, String value_) {

        Attribute attribute = this.getAttributeByCode(code);

        AttributeValue attributeValue = this.getOldAttributeValue(attribute.id);

        if (attributeValue) {

            attributeValue.with {

                value = value_;
                isDeleted = false;
                lastModifiedTime = new Date();
                lastModifiedUser = "admin";
            }
        } else {

            attributeValue = new AttributeValue(
                    referenceId: product.id, attributeId: attribute.id, value: value_,
                    isDeleted: false, lastModifiedTime: new Date(), lastModifiedUser: "admin"
            );
        }

        attributeValue.save(flush: true);

        updatedAttributeValues << attributeValue;
    }

    private void deleteUnUpdatedAttributeValues() {

        (attributeValues - updatedAttributeValues).each { Attribute attribute ->

            attribute.with {

                isDeleted = true;
                lastModifiedTime = new Date();
                lastModifiedUser = "admin";
                save(flush: true);
            }
        }
    }

    private void updateProduct_() {

        (!product) && (product = new Product());

        product.with {

            categoryId = form.categoryId;
            name = form.name;
            image1 = form.image1;
            image2 = form.image2;
            image3 = form.image3;
            image4 = form.image4;
            hangSanXuat = form.hangSanXuat;
            baoHanh = form.baoHanh;
            khoHang = form.khoHang;
            gia = applicationUtilsService.convertToBigDecimal(form.gia);
            giaTruocKhiHa = applicationUtilsService.convertToBigDecimal(form.giaTruocKhiHa);
            thongTinChiTiet = form.thongTinChiTiet;
            thongSoKiThuat = form.thongSoKiThuat;
            khuyenMai = form.khuyenMai;
            thongTinMoRong = form.thongTinMoRong;
            thongTinBoSung = form.thongTinBoSung;
            phanTramGiamGia = applicationUtilsService.convertToBigDecimal(form.phanTramGiamGia);

            isDeleted = false;
            lastModifiedTime = new Date();
            lastModifiedUser = "admin";

            save(flush: true);
        }

        form.attributes?.each { String key, String value ->

            updateAttributeValue(key, value);
        }

        deleteUnUpdatedAttributeValues();
    }

    Boolean updateProduct(ProductForm form) {

        attributes = cacheService.attributes;

        this.attributeMapByCode = attributes?.groupBy { it.code };

        this.form = form;

        this.product = form.productId ? Product.get(form.productId) : null;

        this.attributeValues = !product ? [] : AttributeValue.findAllByReferenceIdAndIsDeleted(product.id, false);

        this.updatedAttributeValues = [];

        if (!this.validate()) return false;

        this.updateProduct_();

        this.result << [product: this.product];

        this.result << [attributeValues: this.updatedAttributeValues];

        return true;
    }
}
