package project.controller

import grails.converters.JSON
import project.bean.ProductForm
import project.domain.Product

class ProductController extends DefaultRestfulController<Product> {

    def applicationUtilsService;
    def updateProductServiceProxy;

    ProductController(Class<Product> resource) {

        super(resource);
    }

    ProductController(Class<Product> resource, Boolean readOnly) {

        super(resource, readOnly);
    }

    def updateProduct() {

        ProductForm form = applicationUtilsService.bindData(new ProductForm(), request.JSON);

        this.updateProductServiceProxy.updateProduct(form);

        render(this.applicationUtilsService.getResultBean(this.updateProductServiceProxy) as JSON);
    }
}
