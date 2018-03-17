package project.service

import grails.gorm.transactions.Transactional
import project.bean.UpdateContactStatusForm
import project.domain.Contact

@Transactional
class UpdateContactStatusService implements BaseService {

    private UpdateContactStatusForm form;

    def updateStatus(UpdateContactStatusForm form) {

        this.form = form;

        Contact contact = Contact.findByIdAndIsDeleted(form.id, false);

        if (contact.status != form.status) {

            contact.with {

                status = form.status;
                lastModifiedUser = "admin";
                lastModifiedTime = new Date();

                save(flush: true);
            }
        }

        return true;
    }
}
