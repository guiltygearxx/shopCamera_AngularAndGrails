package project.service

import grails.gorm.transactions.Transactional
import project.bean.UpdateOrderForm
import project.domain.Order

@Transactional
class UpdateOrderService implements BaseService {

    private UpdateOrderForm form;

    private Boolean validate() {

        Boolean isOk = true;

        if (!form.validate()) {

            isOk = false;

            this.errors << new Error(errorCode: "updateProductService.invalidItemRow", params: [form.errors]);
        }

        return isOk;
    }

    private void updateOrder_() {

        Order order = Order.findByIdAndIsDeleted(form.orderId, false);

        order.with {

            status = form.status
            save(flush: true);
        }
    }

    Boolean updateOrder(UpdateOrderForm form) {

        this.form = form;

        if (!this.validate()) return false;

        this.updateOrder_();

        return true;
    }
}
