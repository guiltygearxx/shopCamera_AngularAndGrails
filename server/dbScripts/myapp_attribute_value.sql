CREATE TABLE myapp.attribute_value
(
    id varchar(255) PRIMARY KEY NOT NULL,
    version bigint(20) NOT NULL,
    is_deleted bit(1),
    attribute_id varchar(255) NOT NULL,
    last_modified_user varchar(255),
    reference_id varchar(255) NOT NULL,
    value varchar(255),
    last_modified_time datetime
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
