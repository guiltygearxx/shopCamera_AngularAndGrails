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
);
INSERT INTO myapp.attribute_value (id, version, is_deleted, attribute_id, last_modified_user, reference_id, value, last_modified_time) VALUES ('001', 0, false, '001', 'admin', '07dfe7d1-ba9e-4e8b-89ac-52cfc329c1aa', '1_2', '2018-03-31 14:10:16');
INSERT INTO myapp.attribute_value (id, version, is_deleted, attribute_id, last_modified_user, reference_id, value, last_modified_time) VALUES ('002', 0, false, '002', 'admin', '07dfe7d1-ba9e-4e8b-89ac-52cfc329c1aa', '2K', '2018-03-31 14:10:16');
INSERT INTO myapp.attribute_value (id, version, is_deleted, attribute_id, last_modified_user, reference_id, value, last_modified_time) VALUES ('003', 0, false, '001', 'admin', '12ff3c0c-10ae-44c5-80cb-1507bf709c78', '1_1', '2018-03-31 14:10:16');
INSERT INTO myapp.attribute_value (id, version, is_deleted, attribute_id, last_modified_user, reference_id, value, last_modified_time) VALUES ('004', 0, false, '002', 'admin', '12ff3c0c-10ae-44c5-80cb-1507bf709c78', '2K', '2018-03-31 14:10:16');