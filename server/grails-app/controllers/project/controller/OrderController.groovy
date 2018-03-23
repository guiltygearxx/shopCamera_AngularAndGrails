package project.controller

import grails.converters.JSON
import project.ApplicationConstants
import project.bean.UpdateOrderForm
import project.domain.Order

class OrderController extends DefaultRestfulController<Order> {

    def updateOrderService;
    def applicationUtilsService;

    OrderController() {
        super(Order)
    }

    OrderController(Class<Order> resource) {
        super(resource)
    }

    OrderController(Class<Order> resource, boolean readOnly) {
        super(resource, readOnly)
    }

    def updateOrder() {

        UpdateOrderForm form = applicationUtilsService.bindData(new UpdateOrderForm(), request.JSON);

        this.updateOrderService.updateOrder(form);

        render(this.applicationUtilsService.getResultBean(updateOrderService) as JSON);
    }

    @Override
    protected Closure buildFilterClosure() {

        Closure defaultClosure = super.buildFilterClosure();

        return {

            (params.sCode) && (ilike("code", "%${params.sCode.toLowerCase()}%"));
            (params.sTenNguoiMua) && (ilike("tenNguoiMua", "%${params.sTenNguoiMua.toLowerCase()}%"));
            (params.sSdt) && (ilike("sdt", "%${params.sSdt.toLowerCase()}%"));
            (params.sEmail) && (ilike("email", "%${params.sEmail.toLowerCase()}%"));
            (params.sDiaChi) && (ilike("diaChi", "%${params.sDiaChi.toLowerCase()}%"));
            (params.status) && (eq("status", params.status));

            defaultClosure.delegate = delegate;

            defaultClosure.call();
        }
    }

    @Override
    protected Order createResource() {

        Order order = super.createResource()

        order.status = ApplicationConstants.ORDER_STATUS_NEW;

        return order;
    }
}
