package project.bean

import grails.validation.Validateable

class UpdateOrderForm implements Validateable {

    String orderId;
    String status;

    static constraints = {

        orderId blank:false;
        status blank:false;
    }
}
