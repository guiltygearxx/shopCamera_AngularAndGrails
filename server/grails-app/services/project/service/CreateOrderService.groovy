package project.service

import grails.gorm.transactions.Transactional
import project.ApplicationConstants
import project.bean.CreateOrderForm
import project.bean.CreateOrderDetailForm
import project.domain.Order
import project.domain.OrderDetail
import project.domain.Product

@Transactional
class CreateOrderService implements BaseService {

    static scope = "request"

    private CreateOrderForm form;

    private Date nowDate;

    private Order order;

    private Boolean validate() {

        Boolean isOk = true;

        if (!form.validate()) {

            isOk = false;

            this.errors << new Error(errorCode: "createOrderService.invalidForm", params: [form.errors]);
        }

        return isOk;
    }

    private String generateOrderCode() {

        return "ORDER#${new Date().getTime()}";
    }

    private void createOrder_() {

        order = new Order(
                code: this.generateOrderCode(), tenNguoiMua: form.tenNguoiMua, sdt: form.sdt,
                email: form.email, diaChi: form.diaChi, moTa: form.moTa,
                status: ApplicationConstants.ORDER_STATUS_NEW,
                lastModifiedTime: new Date(), lastModifiedUser: "anonymous", isDeleted: false
        );

        order.save(flush: true);

        form.orderDetailForms.each { CreateOrderDetailForm detailForm ->

            Product product = Product.findByIdAndIsDeleted(detailForm.productId, false);

            OrderDetail orderDetail = new OrderDetail(
                    orderId: order.id, productId: product.id, quantity: detailForm.quantity as Integer, gia: product.gia,
                    lastModifiedTime: new Date(), lastModifiedUser: "anonymous", isDeleted: false
            );

            orderDetail.save(flush: true);
        }
    }

    Boolean createOrder(CreateOrderForm form) {

        this.form = form;

        this.nowDate = new Date();

        if (!this.validate()) return false;

        this.createOrder_();

        this.result << [orderCode: this.order.code];

        return true;
    }
}
