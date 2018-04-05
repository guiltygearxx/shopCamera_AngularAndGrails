package project.domain

class Product implements BaseDomain {

    String categoryId;
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
    BigDecimal phanTramGiamGia;
    String thongTinMoRong;
    String hinhAnhTrucQuan;
    String thongTinBoSung;

    static constraints = {

        name blank: false, maxSize: 255
        image1 nullable: true, maxSize: 1000
        image2 nullable: true, maxSize: 1000
        image3 nullable: true, maxSize: 1000
        image4 nullable: true, maxSize: 1000

        lastModifiedTime nullable: true
        lastModifiedUser nullable: true
        isDeleted nullable: true

        hangSanXuat nullable: true, maxSize: 255
        baoHanh nullable: true, maxSize: 255
        khoHang nullable: true, maxSize: 255
        gia nullable: true;
        giaTruocKhiHa nullable: true;
        thongTinChiTiet nullable: true;
        thongSoKiThuat nullable: true;
        khuyenMai nullable: true;
        phanTramGiamGia nullable: true;
        thongTinMoRong nullable: true;
        hinhAnhTrucQuan nullable: true;
        thongTinBoSung nullable: true;
    }

    static mapping = {

        id generator: 'uuid'
        isDeleted defaultValue: false
    }
}
