package project.domain

import grails.rest.Resource

@Resource(uri = '/product')
class Product implements BaseDomain {

    String name;
    String image1;
    String image2;
    String image3;
    String image4;
    String hangSanXuat;
    String baoHanh;
    String khoHang;
    BigDecimal gia;
    BigDecimal giaTruocKhiHa;

    String thongTinChiTiet;
    String thongSoKiThuat;
    String khuyenMai;

    static constraints = {

        id size: 36..36
        name blank: false, maxSize: 255
        image1 nullable: true
        image2 nullable: true
        image3 nullable: true
        image4 nullable: true

        lastModifiedTime nullable: true
        lastModifiedUser nullable: true
        isDeleted nullable: true
    }

    static mapping = {

        id generator: 'uuid'
        isDeleted defaultValue: false
    }
}
