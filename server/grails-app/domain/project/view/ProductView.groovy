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
    BigDecimal phanTramGiamGia;
    String thongTinMoRong;
    String hinhAnhTrucQuan;
    String thongTinBoSung;
    Date lastModifiedTime;

    static constraints = {
    }

    static mapping = {

        table("v_product")
    }
}
