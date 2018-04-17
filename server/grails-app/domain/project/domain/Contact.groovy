package project.domain

class Contact implements BaseDomain {

    String name;
    String email;
    String phone;
    String address;
    String comment;
    String status;

    static constraints = {

        name nullable: true, maxSize: 1000
        email nullable: true, maxSize: 255
        phone nullable: true, maxSize: 255
        address nullable: true, maxSize: 1000
        comment nullable: true, maxSize: 1000
        status nullable: false, maxSize: 255

        lastModifiedTime nullable: true
        lastModifiedUser nullable: true
        isDeleted nullable: true
    }

    static mapping = {

        id generator: 'uuid'
        isDeleted defaultValue: false
        status defaultValue: "new"
    }
}
