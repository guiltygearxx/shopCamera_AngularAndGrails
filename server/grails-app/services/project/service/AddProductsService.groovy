package project.service

import grails.gorm.transactions.Transactional
import project.bean.ImportProductRow
import project.bean.ImportProductRow2
import project.bean.ImportProductsForm
import project.domain.Attribute
import project.domain.AttributeValue
import project.domain.Category
import project.domain.Product

@Transactional
class AddProductsService implements BaseService {

    static scope = "request"

    def applicationUtilsService;
    def cacheService;

    private ImportProductsForm form;

    private List<Category> categories;

    private Map attributeMapByCode;

    private Category getCategoryByName(String categoryName) {

        return this.categories?.find { it.name == categoryName };
    }

    private Boolean validate() {

        return this.validateForm() && this.validateCategoryNames() && this.validateDuplicateName() && this.validateExistName();
    }

    private Boolean validateExistName() {

        List<Product> existedProducts = Product.findAllByNameInListAndIsDeleted(form.items.name, false);

        if (existedProducts) {

            existedProducts.each { Product product ->

                this.errors << new Error(errorCode: "addProductService.existedName", params: [product.name]);
            }

            return false;
        }

        return true;
    }

    private Boolean validateDuplicateName() {

        List<String> names_ = [];

        Boolean isOk = true;

        form.items?.each { ImportProductRow item ->

            if (names_.contains(item.name)) {

                isOk = false;

                this.errors << new Error(errorCode: "addProductService.duplicateName", params: [item.name]);
            } else {

                names_ << item.name;
            }
        }

        return isOk;
    }

    private Boolean validateCategoryNames() {

        Boolean isOk = true;

        form.items?.each { ImportProductRow item ->

            if (!this.getCategoryByName(item.categoryName)) {

                isOk = false;

                this.errors << new Error(errorCode: "addProductService.categoryNotFound", params: [item.name, item.categoryName]);
            }
        }

        return isOk;
    }

    private Boolean validateForm() {

        Boolean isOk = true;

        form.items?.each { ImportProductRow2 item ->

            if (!item.validate()) {

                isOk = false;

                this.errors << new Error(errorCode: "addProductService.invalidItemRow", params: [item.name, item.errors]);
            }
        }

        return isOk;
    }

    private Attribute getAttribute(String code) {

        return this.attributeMapByCode.get(code)?.get(0);
    }

    private void updateAttributeValue(Product product, ImportProductRow item) {

        item.attribute?.each { String key, String value ->

            AttributeValue attributeValue = new AttributeValue(referenceId: product.id, attributeId: getAttribute(key)?.id, value: value,
                    isDeleted: false, lastModifiedTime: new Date(), lastModifiedUser: "admin");

            attributeValue.save(flush: true);
        }
    }

    private void updateProducts() {

        this.result = form.items.collect { ImportProductRow item ->

            Product product = new Product(
                    categoryId: this.getCategoryByName(item.categoryName).id,
                    name: item.name,
                    image1: item.image1,
                    image2: item.image2,
                    image3: item.image3,
                    image4: item.image4,
                    hangSanXuat: item.hangSanXuat,
                    baoHanh: item.baoHanh,
                    khoHang: item.khoHang,
                    gia: applicationUtilsService.convertToBigDecimal(item.gia),
                    giaTruocKhiHa: applicationUtilsService.convertToBigDecimal(item.giaTruocKhiHa),
                    phanTramGiamGia: applicationUtilsService.convertToBigDecimal(item.phanTramGiamGia),
                    thongTinChiTiet: item.thongTinChiTiet,
                    thongSoKiThuat: item.thongSoKiThuat,
                    khuyenMai: item.khuyenMai,

                    isDeleted: false,
                    lastModifiedTime: new Date(),
                    lastModifiedUser: "admin"
            )

            product.save(flush: true);

            this.updateAttributeValue(product, item);
        }
    }

    Boolean addProducts(ImportProductsForm form) {

        this.attributeMapByCode = cacheService.attributes.groupBy { it.code };

        this.form = form;

        this.categories = Category.findAllByIsDeleted(false);

        if (!this.validate()) return false;

        this.updateProducts();

        return true;
    }
}
