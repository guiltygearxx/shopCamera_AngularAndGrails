package project.controller

import project.domain.OrderDetail

class OrderDetailController extends DefaultRestfulController<OrderDetail> {

    OrderDetailController() {
        super(OrderDetail)
    }

    OrderDetailController(Class<OrderDetail> resource) {
        super(resource)
    }

    OrderDetailController(Class<OrderDetail> resource, boolean readOnly) {
        super(resource, readOnly)
    }
}
