package project.domain

import grails.rest.Resource
import project.controller.DefaultRestfulController

@Resource(uri = '/giaiPhap', superClass = DefaultRestfulController)
class Solution implements BaseDomain {

    String tieuDe;
    String hinhAnh;
    String noiDungNgan;
    String noiDungChiTiet;

    static constraints = {

        tieuDe nullable: true;
        hinhAnh nullable: true;
        noiDungNgan nullable: true;
        noiDungChiTiet nullable: true;

        lastModifiedTime nullable: true
        lastModifiedUser nullable: true
        isDeleted nullable: true
    }

    static mapping = {

        id generator: 'uuid'
        isDeleted defaultValue: false
    }
}