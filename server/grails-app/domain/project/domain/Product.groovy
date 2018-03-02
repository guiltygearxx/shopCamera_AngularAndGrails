package project.domain

import grails.rest.Resource
import project.controller.ProductController

@Resource(uri = '/product', superClass = ProductController)
class Product implements BaseDomain {

    String categoryId;
    String name;
    String hangSanXuat;
    String baoHanh;
    String khoHang;
    String sdtLienHe;
    String emailLienHe;
    BigDecimal gia;
    BigDecimal giaTruocKhiHa;

    String thongTinChiTiet;
    String thongSoKiThuat;
    String khuyenMai;

    static constraints = {

        id size: 36..36
        categoryId size: 36..36
        name blank: false, maxSize: 255

        lastModifiedTime nullable: true
        lastModifiedUser nullable: true
        isDeleted nullable: true

        hangSanXuat nullable: true;
        baoHanh nullable: true;
        khoHang nullable: true;
        sdtLienHe nullable: true;
        emailLienHe nullable: true;
        gia nullable: true;
        giaTruocKhiHa nullable: true;
        thongTinChiTiet nullable: true;
        thongSoKiThuat nullable: true;
        khuyenMai nullable: true;
    }

    static mapping = {

        id generator: 'uuid'
        isDeleted defaultValue: false
    }
}
