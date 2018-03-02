package project.controller

import project.domain.Product

class ProductController extends DefaultRestfulController<Product> {

    ProductController(Class<Product> resource) {

        super(resource);
    }

    ProductController(Class<Product> resource, Boolean readOnly) {

        super(resource, readOnly);
    }
}
