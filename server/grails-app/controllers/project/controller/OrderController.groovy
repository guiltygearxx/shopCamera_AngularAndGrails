package project.controller

import grails.converters.JSON
import project.ApplicationConstants
import project.bean.CreateOrderForm
import project.bean.CreateOrderDetailForm
import project.bean.UpdateOrderForm
import project.domain.Order

class OrderController extends DefaultRestfulController<Order> {

    def updateOrderService;
    def createOrderService;
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

    def createOrder() {

        CreateOrderForm form = bindDataCreateOrderForm(new CreateOrderForm(), request.JSON);

        this.createOrderService.createOrder(form);

        render(this.applicationUtilsService.getResultBean(createOrderService) as JSON);
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

            delegate.with defaultClosure;
        }
    }

    @Override
    protected Order createResource() {

        Order order = super.createResource()

        order.status = ApplicationConstants.ORDER_STATUS_NEW;
        order.code = "ORDER#${new Date().getTime()}";

        return order;
    }

    private CreateOrderForm bindDataCreateOrderForm() {

        def json = request.JSON;

        CreateOrderForm form = applicationUtilsService.bindData(new CreateOrderForm(), json);

        form.orderDetailForms = (json.orderDetailForms as List).collect {

            applicationUtilsService.bindData(new CreateOrderDetailForm(), it)
        };

        return form;
    }
}
