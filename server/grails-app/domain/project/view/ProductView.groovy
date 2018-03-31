package project.view

import project.domain.BaseDomain

class ProductView implements BaseDomain {

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
    String categoryName;
    BigDecimal phanTramGiamGia;

    static constraints = {
    }

    static mapping = {

        table("v_product")
    }
}
