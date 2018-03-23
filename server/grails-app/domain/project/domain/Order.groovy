package project.domain

class Order implements BaseDomain {

    String code;
    String tenNguoiMua;
    String sdt;
    String email;
    String diaChi;
    String moTa;
    String status; //da xem;

    static constraints = {

        lastModifiedTime nullable: true
        lastModifiedUser nullable: true
        isDeleted nullable: true
        status nullable: true;
    }

    static mapping = {

        id generator: 'uuid'
        isDeleted defaultValue: false
        table("order_")
    }
}
