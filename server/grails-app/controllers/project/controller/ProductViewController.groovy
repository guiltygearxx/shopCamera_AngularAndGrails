package project.controller

import project.view.ProductView

class ProductViewController extends DefaultRestfulController<ProductView> {

    ProductViewController() {
        super(ProductView);
    }

    ProductViewController(Class<ProductView> resource) {

        super(resource, true);
    }

    ProductViewController(Class<ProductView> resource, Boolean readOnly) {

        super(resource, readOnly);
    }

    @Override
    protected Closure buildFilterClosure() {

        Closure defaultClosure = super.buildFilterClosure();

        return {

            (params.categoryIds) && (inList("categoryId", params.categoryIds.split(";")));

            defaultClosure.delegate = delegate;

            defaultClosure.call();
        }
    }
}

