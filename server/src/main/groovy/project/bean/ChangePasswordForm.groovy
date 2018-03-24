package project.bean

import grails.validation.Validateable;

class ChangePasswordForm implements Validateable {

    String oldPassword;
    String newPassword;

    static constraints = {

        oldPassword nullable: false, blank: false
        newPassword nullable: false, blank: false, minSize: 8
    }
}
