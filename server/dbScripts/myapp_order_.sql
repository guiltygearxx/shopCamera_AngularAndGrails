CREATE TABLE myapp.order_
(
    id varchar(36) PRIMARY KEY NOT NULL,
    version bigint(20) NOT NULL,
    code varchar(255),
    is_deleted bit(1),
    ten_nguoi_mua varchar(500),
    last_modified_user varchar(255),
    sdt varchar(255),
    email varchar(255),
    last_modified_time datetime,
    mo_ta varchar(1000),
    dia_chi varchar(255) NOT NULL,
    status varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
