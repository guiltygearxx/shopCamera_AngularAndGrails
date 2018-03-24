package project.controller

import grails.converters.JSON
import project.bean.ChangePasswordForm

class UserController {

    def applicationUtilsService;
    def changePasswordService;

    def changePassword() {

        ChangePasswordForm form = applicationUtilsService.bindData(new ChangePasswordForm(), request.JSON);

        changePasswordService.changePassword(form);

        render(this.applicationUtilsService.getResultBean(changePasswordService) as JSON);
    }
}
