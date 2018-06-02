CREATE TABLE myapp.upload_file
(
    id varchar(255) PRIMARY KEY NOT NULL,
    version bigint(20) NOT NULL,
    file_size bigint(20) NOT NULL,
    is_deleted bit(1) NOT NULL,
    last_modified_user varchar(255) NOT NULL,
    extension varchar(5),
    name varchar(255) NOT NULL,
    last_modified_time datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
