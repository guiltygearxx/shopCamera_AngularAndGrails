package project.domain

class Attribute implements BaseDomain {

    String code;
    String jsonConfig; //attribute-config-json;
    String title;
    Integer order;
    String group;

    static constraints = {

        code nullable: false
        jsonConfig nullable: false
        order nullable: false
        title nullable: false
        group nullable: false

        lastModifiedTime nullable: true
        lastModifiedUser nullable: true
        isDeleted nullable: true
    }

    static mapping = {

        id generator: 'uuid'
        order column: "order_"
        group column: "group_"
        isDeleted defaultValue: false
    }
}
