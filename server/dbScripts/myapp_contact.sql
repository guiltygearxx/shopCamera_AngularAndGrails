CREATE TABLE myapp.contact
(
    id varchar(36) PRIMARY KEY NOT NULL,
    version bigint(20) NOT NULL,
    phone varchar(255),
    is_deleted bit(1),
    last_modified_user varchar(255),
    address varchar(1000),
    comment varchar(1000),
    name varchar(1000),
    status varchar(255) NOT NULL,
    email varchar(255),
    last_modified_time datetime
);
