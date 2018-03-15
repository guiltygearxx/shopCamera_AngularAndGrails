package project.bean

import grails.validation.Validateable

class PaginationParams implements Validateable {

    String sort;
    String order;
    Integer pageIndex;
    Integer maxPageSize;
}
