package project.domain

class Order implements BaseDomain {

    String code;
    String tenNguoiMua;
    String sdt;
    String email;
    String diaChi;
    String description;

    static constraints = {

        id size: 36..36

        lastModifiedTime nullable: true
        lastModifiedUser nullable: true
        isDeleted nullable: true
    }

    static mapping = {

        id generator: 'uuid'
        isDeleted defaultValue: false
    }
}
