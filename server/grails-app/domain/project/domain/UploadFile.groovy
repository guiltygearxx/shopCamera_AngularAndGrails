package project.domain

class UploadFile implements BaseDomain {

    String name;
    Long fileSize;
    String extension;

    static constraints = {

        name blank: false, maxSize: 255
        extension nullable: true, maxSize: 5
    }

    static mapping = {

        id generator: 'uuid'
        isDeleted defaultValue: false
    }
}
