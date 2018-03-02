package project.view

class ProductView {

    String id;
    String name;
    BigDecimal gia;
    String giaTruocKhiHa;
    String image1;

    static constraints = {

    }

    static mapping = {

        table("v_product")
        version(false);
    }
}
