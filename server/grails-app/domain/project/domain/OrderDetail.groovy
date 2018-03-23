package project.domain

class OrderDetail implements BaseDomain {

    String orderId;
    String productId;
    Integer quantity;
    BigDecimal gia;

    static constraints = {

        lastModifiedTime nullable: true
        lastModifiedUser nullable: true
        isDeleted nullable: true
    }

    static mapping = {

        id generator: 'uuid'
        isDeleted defaultValue: false
    }
}
