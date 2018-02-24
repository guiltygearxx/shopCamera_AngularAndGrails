package project.domain

trait BaseDomain {

    String id;
    Date lastModifiedTime;
    String lastModifiedUser;
    Boolean isDeleted;
}
