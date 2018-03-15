package project.domain

import grails.rest.Resource

@Resource(uri = '/category')
class Category implements BaseDomain {

    String name;
    String parentCategoryId;
    String code;

    static constraints = {

        name blank: false, maxSize: 255
        parentCategoryId nullable: true;

        lastModifiedTime nullable: true
        lastModifiedUser nullable: true
        isDeleted nullable: true
    }

    static mapping = {

        id generator: 'uuid'
        isDeleted defaultValue: false
    }
}
