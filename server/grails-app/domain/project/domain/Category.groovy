package project.domain

import grails.rest.Resource

@Resource(uri = '/category')
class Category implements BaseDomain {

    String name;

    static constraints = {

        id size: 36
        name blank: false
        lastModifiedTime nullable: false
        lastModifiedUser nullable: false
    }

    static mapping = {

        id generator: 'uuid'
        isDeleted defaultValue: false
    }
}
