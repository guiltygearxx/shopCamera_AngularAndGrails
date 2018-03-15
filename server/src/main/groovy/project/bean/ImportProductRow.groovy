package project.bean

class ImportProductRow {

    String categoryName;
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
        thongTinChiTiet nullable: true;
        thongSoKiThuat nullable: true;
        khuyenMai nullable: true;
    }
}
