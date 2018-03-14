CREATE TABLE myapp.order_detail
(
    id bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    version bigint(20) NOT NULL,
    order_id varchar(255) NOT NULL,
    quantity int(11) NOT NULL,
    product_id varchar(255) NOT NULL,
    gia decimal(19,2) NOT NULL
);