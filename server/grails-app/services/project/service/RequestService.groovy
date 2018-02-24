package project.service

import grails.gorm.transactions.Transactional

@Transactional
class RequestService {

    static scope = "request";

    Date nowDate;

    String getUsername() {

        return "admin";
    }
}
