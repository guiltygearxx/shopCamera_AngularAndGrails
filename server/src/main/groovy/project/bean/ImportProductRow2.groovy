package project.bean;

import grails.validation.Validateable;

class ImportProductRow2 extends ImportProductRow implements Validateable {

    static constraints = {

        categoryName nullable: false, blank: false
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
        phanTramGiamGia nullable: true;
        thongTinChiTiet nullable: true;
        thongSoKiThuat nullable: true;
        khuyenMai nullable: true;
    }
}
