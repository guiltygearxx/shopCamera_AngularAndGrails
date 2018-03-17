package project.domain

class Contact implements BaseDomain {

    String name;
    String email;
    String phone;
    String address;
    String comment;
    String status;

    static constraints = {

        name nullable: true;
        email nullable: true;
        phone nullable: true;
        address nullable: true;
        comment nullable: true;
        status nullable: false;

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
