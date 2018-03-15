package project.controller

import grails.converters.JSON
import grails.gorm.transactions.Transactional
import project.bean.ProductForm
import project.domain.Product

class ProductController extends DefaultRestfulController<Product> {

    def applicationUtilsService;
    def updateProductService;

    ProductController() {
        super(Product);
    }

    ProductController(Class<Product> resource) {

        super(resource);
    }

    ProductController(Class<Product> resource, boolean readOnly) {

        super(resource, readOnly);
    }

    @Transactional
    def updateProduct() {

        ProductForm form = applicationUtilsService.bindData(new ProductForm(), request.JSON);

        this.updateProductService.updateProduct(form);

        render(this.applicationUtilsService.getResultBean(this.updateProductService) as JSON);
    }
}
