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
);
INSERT INTO myapp.upload_file (id, version, file_size, is_deleted, last_modified_user, extension, name, last_modified_time) VALUES ('40280981625113760162511675da0001', 1, 1590, true, 'admin', 'txt', 'mysq', '2018-03-23 11:25:21');
INSERT INTO myapp.upload_file (id, version, file_size, is_deleted, last_modified_user, extension, name, last_modified_time) VALUES ('40280981625119310162511a7bda0000', 1, 9626, true, 'admin', 'xlsx', 'thanhvietcorp.co', '2018-03-23 11:25:24');