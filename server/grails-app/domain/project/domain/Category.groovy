package project.domain

class Category implements BaseDomain {

    String name;
    String parentCategoryId;
    String code;
    String content;
    String imageUrl;
    String type;

    static constraints = {

        name blank: false, maxSize: 1000
        parentCategoryId nullable: true;
        code nullable: false, maxSize: 255
        content nullable: true;
        imageUrl nullable: true, maxSize: 1000
        type nullable: true, maxSize: 255

        lastModifiedTime nullable: true
        lastModifiedUser nullable: true
        isDeleted nullable: true
    }

    static mapping = {

        id generator: 'uuid'
        isDeleted defaultValue: false
    }
}
