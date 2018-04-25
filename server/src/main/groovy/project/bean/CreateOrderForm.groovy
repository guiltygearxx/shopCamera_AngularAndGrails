package project.bean;

import grails.validation.Validateable;

class CreateOrderForm implements Validateable {

    String tenNguoiMua;
    String sdt;
    String email;
    String diaChi;
    String moTa;

    List<CreateOrderDetailForm> orderDetailForms = [];
}
