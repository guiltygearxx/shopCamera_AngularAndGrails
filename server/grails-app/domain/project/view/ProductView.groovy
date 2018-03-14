package project.view

import grails.rest.Resource
import project.controller.ProductViewController
import project.domain.BaseDomain

@Resource(uri = '/productView', superClass = ProductViewController)
class ProductView implements BaseDomain {

    String categoryId;
    String name;
    String image1;
    BigDecimal gia;
    BigDecimal giaTruocKhiHa;

    static constraints = {

        id size: 36..36
        categoryId size: 36..36
        name blank: false, maxSize: 255
        image1 nullable: true

        gia nullable: true;
        giaTruocKhiHa nullable: true;
    }

    static mapping = {

        table("product")
        id generator: 'uuid'
        isDeleted defaultValue: false
    }
}
