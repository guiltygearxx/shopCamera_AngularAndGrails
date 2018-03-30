package project.domain

class Attribute implements BaseDomain {

    String code;
    String jsonConfig; //attribute-config-json;

    static constraints = {

        code nullable: false
        jsonConfig nullable: false

        lastModifiedTime nullable: true
        lastModifiedUser nullable: true
        isDeleted nullable: true
    }

    static mapping = {

        id generator: 'uuid'
        isDeleted defaultValue: false
    }
}
