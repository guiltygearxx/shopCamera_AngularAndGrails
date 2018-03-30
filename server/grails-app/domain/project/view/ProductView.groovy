package project.view

import project.domain.BaseDomain

class ProductView implements BaseDomain {

    String categoryId;
    String name;
    String image1;
    String hangSanXuat;
    String baoHanh;
    String khoHang;
    BigDecimal gia;
    BigDecimal giaTruocKhiHa;
    String categoryName;
    String khuyenMai;
    BigDecimal phanTramGiamGia;
    String thongTinMoRong;
    String hinhAnhTrucQuan;
    String thongTinBoSung;

    static constraints = {
    }

    static mapping = {

        table("v_product")
    }
}
