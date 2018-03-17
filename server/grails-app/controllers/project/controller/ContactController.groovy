package project.controller

import grails.converters.JSON
import project.ApplicationConstants
import project.bean.UpdateContactStatusForm
import project.domain.Contact

class ContactController extends DefaultRestfulController<Contact> {

    def applicationUtilsService;
    def updateContactStatusService;

    ContactController() {
        super(Contact);
    }

    ContactController(Class<Contact> resource) {
        super(resource)
    }

    ContactController(Class<Contact> resource, boolean readOnly) {
        super(resource, readOnly)
    }

    @Override
    protected Closure buildFilterClosure() {

        Closure defaultClosure = super.buildFilterClosure();

        return {

            (params.sName) && (ilike("name", "%${params.sName.toLowerCase()}%"));
            (params.sEmail) && (ilike("email", "%${params.sEmail.toLowerCase()}%"));
            (params.sPhone) && (ilike("phone", "%${params.sPhone.toLowerCase()}%"));
            (params.sAddress) && (ilike("address", "%${params.sAddress.toLowerCase()}%"));

            defaultClosure.delegate = delegate;

            defaultClosure.call();
        }
    }

    @Override
    protected Contact createResource() {

        Contact obj = super.createResource();

        (!obj.status) && (obj.status = ApplicationConstants.CONTACT_STATUS_NEW);

        return obj;
    }

    def updateStatus() {

        UpdateContactStatusForm form = applicationUtilsService.bindData(new UpdateContactStatusForm(), request.JSON);

        this.updateContactStatusService.updateStatus(form);

        render(this.applicationUtilsService.getResultBean(this.updateContactStatusService) as JSON);
    }
}
