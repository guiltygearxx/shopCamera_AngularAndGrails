package project.service

import grails.gorm.transactions.Transactional
import project.bean.ProductForm
import project.domain.Product

@Transactional
class UpdateProductService implements BaseService {

    static scope = "request"

    def applicationUtilsService;

    private ProductForm form;

    private Product product;

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

            isDeleted = false;
            lastModifiedTime = new Date();
            lastModifiedUser = "admin";

            save(flush: true);
        }
    }

    Boolean updateProduct(ProductForm form) {

        this.form = form;

        this.product = form.productId ? Product.get(form.productId) : null;

        if (!this.validate()) return false;

        this.updateProduct_();

        return true;
    }
}
