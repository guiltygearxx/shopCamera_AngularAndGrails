package project.controller

import project.view.ProductView

class ProductViewController extends DefaultRestfulController<ProductView> {

    ProductViewController() {

        super(ProductView);
    }

    ProductViewController(Class<ProductView> resource) {
        super(resource)
    }

    ProductViewController(Class<ProductView> resource, boolean readOnly) {
        super(resource, readOnly)
    }
}
