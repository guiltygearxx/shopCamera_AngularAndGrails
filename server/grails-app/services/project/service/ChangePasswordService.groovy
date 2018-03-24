package project.service

import grails.gorm.transactions.Transactional
import grails.plugin.springsecurity.userdetails.GrailsUser
import org.springframework.security.core.context.SecurityContextHolder
import project.bean.ChangePasswordForm
import project.domain.User

@Transactional
class ChangePasswordService implements BaseService {

    static scope = "request";

    def springSecurityService

    private ChangePasswordForm form;
    private User user;

    private Boolean validate() {

        return this.validateForm() && this.validateOldPassword() && this.validateNewPassword();
    }

    private Boolean validateForm() {

        Boolean isOk = true;

        if (!form.validate()) {

            isOk = false;

            this.errors << new Error(errorCode: "changePassword.invalidForm", params: [form.errors]);
        }

        return isOk;
    }

    private Boolean validateOldPassword() {

        if (!springSecurityService.passwordEncoder.isPasswordValid(user.password, form.oldPassword, null)) {

            errors << new Error(errorCode: "changePassword.invalidOldPassword");

            return false;
        }

        return true;
    }

    private Boolean validateNewPassword() {

        return true;
    }

    private Boolean updatePassword() {

        user.with {

            password = form.newPassword;
            save(flush: true);
        }
    }

    Boolean changePassword(ChangePasswordForm form) {

        this.form = form;

        GrailsUser user_ = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        this.user = User.get(user_.id);

        if (!this.validate()) return false;

        this.updatePassword();

        return true;
    }
}
