package project.domain

import grails.rest.Resource
import project.controller.DefaultRestfulController

@Resource(uri = '/contact', superClass = DefaultRestfulController)
class Contact implements BaseDomain {

    String name;
    String email;
    String phone;
    String address;
    String comment;
    String status;

    static constraints = {

        id size: 36..36
        name nullable: true;
        email nullable: true;
        phone nullable: true;
        address nullable: true;
        comment nullable: true;

        lastModifiedTime nullable: true
        lastModifiedUser nullable: true
        isDeleted nullable: true
    }

    static mapping = {

        id generator: 'uuid'
        isDeleted defaultValue: false
    }
}
