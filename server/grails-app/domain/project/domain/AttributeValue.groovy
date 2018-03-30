package project.domain

class AttributeValue implements BaseDomain {

    String referenceId;
    String attributeId;
    String value;

    static constraints = {

        referenceId nullable: false
        attributeId nullable: false
        value nullable: true

        lastModifiedTime nullable: true
        lastModifiedUser nullable: true
        isDeleted nullable: true
    }

    static mapping = {

        id generator: 'uuid'
        isDeleted defaultValue: false
    }
}
