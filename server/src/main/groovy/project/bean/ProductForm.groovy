package project.bean;

import grails.validation.Validateable;

class ProductForm implements Validateable {

    String productId;
    String categoryId;
    String name;
    String image1;
    String image2;
    String image3;
    String image4;
    String hangSanXuat;
    String baoHanh;
    String khoHang;
    String gia;
    String giaTruocKhiHa;
    String thongTinChiTiet;
    String thongSoKiThuat;
    String khuyenMai;

    static constraints = {

        productId nullable: true
        categoryId nullable: false, blank: false
        name blank: false, maxSize: 255
        image1 nullable: true
        image2 nullable: true
        image3 nullable: true
        image4 nullable: true
        hangSanXuat nullable: true;
        baoHanh nullable: true;
        khoHang nullable: true;
        gia nullable: true;
        giaTruocKhiHa nullable: true;
        thongTinChiTiet nullable: true;
        thongSoKiThuat nullable: true;
        khuyenMai nullable: true;
    }
}
