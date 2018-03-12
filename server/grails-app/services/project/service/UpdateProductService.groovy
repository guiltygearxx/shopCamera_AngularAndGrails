package project.service

import grails.gorm.transactions.Transactional
import project.bean.ProductForm
import project.domain.Product

@Transactional
class UpdateProductService implements BaseService {

    static scope = "request"
    static proxy = true;

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

    Boolean updateProduct(ProductForm form) {

        this.form = form;

        this.product = form.productId ? Product.findAllById(form.productId) : null;

        if (!this.validate()) return false;

        this.updateProduct();

        return true;
    }
}
