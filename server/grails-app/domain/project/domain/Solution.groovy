package project.domain

import grails.rest.Resource
import project.controller.SolutionController

@Resource(uri = '/giaiPhap', superClass = SolutionController)
class Solution implements BaseDomain {

    String tieuDe;
    String hinhAnh;
    String noiDungNgan;
    String noiDungChiTiet;
    String ngayTao;


    static constraints = {

        id size: 36..36
        tieuDe nullable: true;
        hinhAnh nullable: true;
        noiDungNgan nullable: true;
        noiDungChiTiet nullable: true;
        ngayTao nullable: true;

        lastModifiedTime nullable: true
        lastModifiedUser nullable: true
        isDeleted nullable: true
    }

    static mapping = {

        id generator: 'uuid'
        isDeleted defaultValue: false
    }
}