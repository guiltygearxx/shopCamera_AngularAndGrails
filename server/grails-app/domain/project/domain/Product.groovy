package project.domain

import grails.rest.Resource

@Resource(uri = '/product')
class Product implements BaseDomain {

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
        name blank: false, maxSize: 255

        lastModifiedTime nullable: true
        lastModifiedUser nullable: true
        isDeleted nullable: true
    }

    static mapping = {

        id generator: 'uuid'
        isDeleted defaultValue: false
    }
}
