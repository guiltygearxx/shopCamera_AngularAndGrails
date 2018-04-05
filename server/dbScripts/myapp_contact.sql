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
INSERT INTO myapp.contact (id, version, phone, is_deleted, last_modified_user, address, comment, name, status, email, last_modified_time) VALUES ('402809816242bcdd0162465520800000', 0, '33333', false, 'admin', 'qqqq', 'ddd', '2323r', 'new', '23r@gmail.com', '2018-03-21 09:13:19');
INSERT INTO myapp.contact (id, version, phone, is_deleted, last_modified_user, address, comment, name, status, email, last_modified_time) VALUES ('402809816242bcdd01624655926f0001', 0, '33333', false, 'admin', 'qqqq', 'ddd', '2323r', 'new', '23r@gmail.com', '2018-03-21 09:13:56');
INSERT INTO myapp.contact (id, version, phone, is_deleted, last_modified_user, address, comment, name, status, email, last_modified_time) VALUES ('40280981624658ce0162465fbdb80000', 0, '098654321', null, 'admin', 'nguyen', 'Comment is ....', 'Nam', 'new', 'namnguyen@gmail.com', '2018-03-21 09:25:02');
INSERT INTO myapp.contact (id, version, phone, is_deleted, last_modified_user, address, comment, name, status, email, last_modified_time) VALUES ('402809816246712301624671f9b60000', 0, '098654321', false, 'admin', 'nguyenA', 'Comment is ....', 'NamA', 'new', 'namnguyenA@gmail.com', '2018-03-21 09:44:57');
INSERT INTO myapp.contact (id, version, phone, is_deleted, last_modified_user, address, comment, name, status, email, last_modified_time) VALUES ('402809816246712301624674a1890001', 0, '098654321', false, 'admin', 'ff', 'Comment is ....', 'ff', 'new', 'ff', '2018-03-21 09:47:51');
INSERT INTO myapp.contact (id, version, phone, is_deleted, last_modified_user, address, comment, name, status, email, last_modified_time) VALUES ('40280981624671230162467a741c0002', 0, '098654321', false, 'admin', 'êf', 'Comment is ....', 'ề', 'new', 'eff', '2018-03-21 09:54:13');
INSERT INTO myapp.contact (id, version, phone, is_deleted, last_modified_user, address, comment, name, status, email, last_modified_time) VALUES ('40280981624671230162467fc3f30003', 0, 'phone', false, 'admin', 'address', 'comment', 'abc', 'new', 'email', '2018-03-21 10:00:01');
INSERT INTO myapp.contact (id, version, phone, is_deleted, last_modified_user, address, comment, name, status, email, last_modified_time) VALUES ('4028098162467123016246806ba60004', 0, 'phone', false, 'admin', 'address', 'comment', 'abc', 'new', 'email', '2018-03-21 10:00:44');
INSERT INTO myapp.contact (id, version, phone, is_deleted, last_modified_user, address, comment, name, status, email, last_modified_time) VALUES ('40280981624671230162468235cf0005', 0, '098654321', false, 'admin', '2', 'Comment is ....', '12', 'new', '3', '2018-03-21 10:02:41');
INSERT INTO myapp.contact (id, version, phone, is_deleted, last_modified_user, address, comment, name, status, email, last_modified_time) VALUES ('4028098162467123016246cfac320006', 0, '098654321', false, 'admin', '2', 'Comment is ....', '12', 'new', '3', '2018-03-21 11:27:18');
INSERT INTO myapp.contact (id, version, phone, is_deleted, last_modified_user, address, comment, name, status, email, last_modified_time) VALUES ('4028098162467123016246d1850b0007', 0, '098654321', false, 'admin', 'd', 'Comment is ....', 'd', 'new', 'd', '2018-03-21 11:29:19');
INSERT INTO myapp.contact (id, version, phone, is_deleted, last_modified_user, address, comment, name, status, email, last_modified_time) VALUES ('40280981624671230162476851b10008', 0, '098654321', false, 'admin', 'a', 'Comment is ....', 'dd', 'new', 'a', '2018-03-21 14:14:01');
INSERT INTO myapp.contact (id, version, phone, is_deleted, last_modified_user, address, comment, name, status, email, last_modified_time) VALUES ('40280981624671230162476cafa20009', 0, '098654321', false, 'admin', 'a', 'Comment is ....', 'dd', 'new', 'a', '2018-03-21 14:18:48');
INSERT INTO myapp.contact (id, version, phone, is_deleted, last_modified_user, address, comment, name, status, email, last_modified_time) VALUES ('402809816250d1d1016250d33e800000', 0, 'F', false, 'admin', 'D', 'F', 'A', 'new', 'D@GMAIL.COM', '2018-03-23 10:07:24');
INSERT INTO myapp.contact (id, version, phone, is_deleted, last_modified_user, address, comment, name, status, email, last_modified_time) VALUES ('402809816250d6b3016250d710b00000', 0, 'S', false, 'admin', 'D', 'D', 'ÊF', 'new', 'WDWD@GMAIL.COM', '2018-03-23 10:11:34');
INSERT INTO myapp.contact (id, version, phone, is_deleted, last_modified_user, address, comment, name, status, email, last_modified_time) VALUES ('402809816250d6b3016250d9afc00001', 0, 'ưef', false, 'admin', 'ưef', 'ưdwd', 'ưef', 'new', 'ưefwef@gmail.com', '2018-03-23 10:14:26');
INSERT INTO myapp.contact (id, version, phone, is_deleted, last_modified_user, address, comment, name, status, email, last_modified_time) VALUES ('402809816250d6b3016250d9e6510002', 0, 'ưef', false, 'admin', 'ưef', 'ưdwd', 'ưef', 'new', 'ưefwef@gmail.com', '2018-03-23 10:14:40');
INSERT INTO myapp.contact (id, version, phone, is_deleted, last_modified_user, address, comment, name, status, email, last_modified_time) VALUES ('402809816250d6b3016250da1a1a0003', 0, 'ưef', false, 'admin', 'ưef', 'ưdwd', 'ưef', 'new', 'ưefwef@gmail.com', '2018-03-23 10:14:54');
INSERT INTO myapp.contact (id, version, phone, is_deleted, last_modified_user, address, comment, name, status, email, last_modified_time) VALUES ('402809816250d6b3016250de7edf0004', 0, 'd', false, 'admin', 'd', 'd', 'ưef', 'new', 'wef@gmail.com', '2018-03-23 10:19:42');
INSERT INTO myapp.contact (id, version, phone, is_deleted, last_modified_user, address, comment, name, status, email, last_modified_time) VALUES ('402809816250d6b3016250de948b0005', 0, 'd', false, 'admin', 'd', 'd', 'ưef', 'new', 'wef@gmail.com', '2018-03-23 10:19:47');
INSERT INTO myapp.contact (id, version, phone, is_deleted, last_modified_user, address, comment, name, status, email, last_modified_time) VALUES ('402809816250d6b3016250e05a450006', 0, 'ưef', false, 'admin', 'ưef', 'ưef', 'ewef', 'new', 's@gmail.com', '2018-03-23 10:21:43');