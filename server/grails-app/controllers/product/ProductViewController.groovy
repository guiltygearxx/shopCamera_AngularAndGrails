package product

import grails.rest.RestfulController
import project.view.ProductView

class ProductViewController extends RestfulController<ProductView> {

    static responseFormats = ['json']

    ProductViewController() {
        super(ProductView)
    }
}
