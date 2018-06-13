package project.domain

class HomeHeader implements BaseDomain {

    String nameHeader;
    String contentHeader;
    Boolean flag;

    static constraints = {

        nameHeader nullable: false, maxSize: 255
        contentHeader nullable: true, maxSize: 5000
        flag nullable: false

        lastModifiedTime nullable: true
        lastModifiedUser nullable: true
        isDeleted nullable: true
    }

    static mapping = {
        id generator: 'uuid'
        isDeleted defaultValue: false
    }
}
