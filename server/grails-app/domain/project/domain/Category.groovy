package project.domain

class Category implements BaseDomain {

    String name;
    String parentCategoryId;
    String code;
    String content;
    String image;

    static constraints = {

        name blank: false, maxSize: 255
        parentCategoryId nullable: true;
        code nullable: false;
        content nullable: true;
        image nullable: true;

        lastModifiedTime nullable: true
        lastModifiedUser nullable: true
        isDeleted nullable: true
    }

    static mapping = {

        id generator: 'uuid'
        isDeleted defaultValue: false
    }
}
