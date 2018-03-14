package project.controller

import project.domain.Product

class ProductController extends DefaultRestfulController<Product> {


    ProductController() {
        super(Product);
    }

    ProductController(Class<Product> resource) {
        super(resource)
    }

    ProductController(Class<Product> resource, boolean readOnly) {
        super(resource, readOnly)
    }
}
