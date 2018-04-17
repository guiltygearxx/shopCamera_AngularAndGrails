package project.domain

class Order implements BaseDomain {

    String code;
    String tenNguoiMua;
    String sdt;
    String email;
    String diaChi;
    String moTa;
    String status;

    static constraints = {

        code maxSize: 255
        tenNguoiMua nullable: true, maxSize: 500
        sdt maxSize: 255
        email maxSize: 255
        diaChi nullable: false, maxSize: 1000
        moTa nullable: true, maxSize: 1000

        lastModifiedTime nullable: true
        lastModifiedUser nullable: true
        isDeleted nullable: true
    }

    static mapping = {

        id generator: 'uuid'
        isDeleted defaultValue: false
        table('order_')
    }
}
