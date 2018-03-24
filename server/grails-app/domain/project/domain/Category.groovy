package project.domain

class Category implements BaseDomain {

    String name;
    String parentCategoryId;
    String code;

    static constraints = {

        name blank: false, maxSize: 255
        parentCategoryId nullable: true;
        code nullable: false;

        lastModifiedTime nullable: true
        lastModifiedUser nullable: true
        isDeleted nullable: true
    }

    static mapping = {

        id generator: 'uuid'
        isDeleted defaultValue: false
    }
}
