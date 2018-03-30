package project.domain

class PropertiesCamera {

    String id;
    String productId;
    String thuongHieu;
    String moiTruong;
    String congNghe;
    String phanGiai;
    String loaiLens;
    String tinhNangChuyenDung;
    String luuTruThe;
    String zoomQuangHoc;
    String khauDo;
    Boolean isDeleted;


    static constraints = {
        productId nullable: true;
        thuongHieu nullable: true;
        moiTruong nullable: true;
        congNghe nullable: true;
        phanGiai nullable: true;
        loaiLens nullable: true;
        tinhNangChuyenDung nullable: true;
        luuTruThe nullable: true;
        zoomQuangHoc nullable: true;
        khauDo nullable: true;
        isDeleted nullable: true;
    }

    static mapping = {

        id generator: 'uuid'
        isDeleted defaultValue: false
    }
}
