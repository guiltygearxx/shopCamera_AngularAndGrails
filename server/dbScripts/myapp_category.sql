CREATE TABLE myapp.category
(
    id varchar(36) PRIMARY KEY NOT NULL,
    version bigint(20) NOT NULL,
    is_deleted bit(1),
    code varchar(255) NOT NULL,
    last_modified_user varchar(255),
    parent_category_id varchar(255),
    name varchar(255) NOT NULL,
    last_modified_time datetime
);
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time) VALUES ('067fdb0a-c192-47d4-829e-f683438d1fd7', 0, false, 'cameraTronBo', 'admin', null, 'Camera trọn bộ', '2018-03-02 17:01:28');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time) VALUES ('201110fd-8494-46da-a6a2-044e37c9d095', 0, false, 'thietBiAnNinhChongTrom', 'admin', 'c0ee6f6b-dd63-4604-afc1-c9e9e8be76e1', 'Thiết bị chống trộm', '2018-03-02 17:01:28');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time) VALUES ('3e3f44fd-df40-48c7-986f-99e0a996daf6', 0, false, 'dauGhiHinhCameraTheoHang', 'admin', 'd886fa4a-2f8c-4df9-80fe-ab4f00d57548', 'Đầu ghi hình theo hãng', '2018-03-02 17:01:28');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time) VALUES ('42accdc5-d72e-43df-bb27-2472c79c039e', 0, false, 'phuKienCameraLuuDuLieu', 'admin', 'fcccb111-ebba-4e6c-a36c-c1ace90962d7', 'Ổ lưu dữ liệu', '2018-03-02 17:01:28');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time) VALUES ('44e17683-851c-422a-9478-dcbca44c0a78', 0, false, 'dauGhiHinhCameraTheoLoai', 'admin', 'd886fa4a-2f8c-4df9-80fe-ab4f00d57548', 'Đầu ghi hình theo loại', '2018-03-02 17:01:28');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time) VALUES ('4de2faa8-b1be-44e2-82f7-ea0bc7d845db', 0, false, 'cameraTronBoGiaRe', 'admin', '067fdb0a-c192-47d4-829e-f683438d1fd7', 'Camera trọn bộ giá rẻ', '2018-03-02 17:01:28');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time) VALUES ('74d3a143-e1db-4b15-89f6-577311cf100e', 0, false, 'phuKienCameraChinhHang', 'admin', 'fcccb111-ebba-4e6c-a36c-c1ace90962d7', 'Phụ kiện chính hãngi', '2018-03-02 17:01:28');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time) VALUES ('7dab85ba-61b7-4fae-a103-c9e8291e985e', 0, false, 'cameraGiamSatTheoLoai', 'admin', '9a40cd52-99fe-42cc-bda3-5e43fb1f5439', 'Camera giám sát theo loại', '2018-03-02 17:01:28');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time) VALUES ('8007da16-a21d-42ee-b83c-ce757ff27313', 0, false, 'thietBiAnNinhChuong', 'admin', 'c0ee6f6b-dd63-4604-afc1-c9e9e8be76e1', 'Chuông', '2018-03-02 17:01:28');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time) VALUES ('9a40cd52-99fe-42cc-bda3-5e43fb1f5439', 0, false, 'cameraGiamSat', 'admin', null, 'Camera Giám Sát', '2018-03-02 17:01:28');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time) VALUES ('9b288305-5d0d-455b-90db-be124d56f05c', 0, false, 'giaiPhapCameraBaoMat', 'admin', 'f2ea6507-8169-455a-92cd-0dfbeeee796c', 'Giải pháp bảo mật', '2018-03-02 17:01:28');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time) VALUES ('c0ee6f6b-dd63-4604-afc1-c9e9e8be76e1', 0, false, 'thietBiAnNinh', 'admin', null, 'Thiết bị an ninh', '2018-03-02 17:01:28');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time) VALUES ('c46c9d41-3c3f-462c-8ca5-73e43f06a896', 0, false, 'cameraTronBoNhapKhau', 'admin', '067fdb0a-c192-47d4-829e-f683438d1fd7', 'Camera trọn bộ nhập khẩu', '2018-03-02 17:01:28');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time) VALUES ('cb6aa1bf-27af-4df5-bed1-7708ed09564c', 0, false, 'cameraGiamSatTheoHang', 'admin', '9a40cd52-99fe-42cc-bda3-5e43fb1f5439', 'Camera giám sát theo hãng', '2018-03-02 17:01:28');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time) VALUES ('cea2bf55-5507-4375-93dd-35c597a3d72d', 0, false, 'mayChamCongTheoHang', 'admin', 'de7a8ded-3749-4dfd-8840-783ee527d0b1', 'Theo hãng', '2018-03-02 17:01:28');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time) VALUES ('d5dd60d9-2e14-44f2-ab0d-55939a83b76b', 0, false, 'giaiPhapCameraAnNinh', 'admin', 'f2ea6507-8169-455a-92cd-0dfbeeee796c', 'Giải pháp an ninh', '2018-03-02 17:01:28');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time) VALUES ('d886fa4a-2f8c-4df9-80fe-ab4f00d57548', 0, false, 'dauGhiHinhCamera', 'admin', null, 'Đầu ghi hình Camera', '2018-03-02 17:01:28');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time) VALUES ('de7a8ded-3749-4dfd-8840-783ee527d0b1', 0, false, 'mayChamCong', 'admin', null, 'Máy chấm công', '2018-03-02 17:01:28');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time) VALUES ('e438ed6f-5fc6-4e53-8b9c-0e036df317db', 0, false, 'mayChamCongTheoLoai', 'admin', 'de7a8ded-3749-4dfd-8840-783ee527d0b1', 'Theo loại ứng dụng', '2018-03-02 17:01:28');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time) VALUES ('f2ea6507-8169-455a-92cd-0dfbeeee796c', 0, false, 'giaiPhapCamera', 'admin', null, 'Giải pháp Camera', '2018-03-02 17:01:28');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time) VALUES ('fcccb111-ebba-4e6c-a36c-c1ace90962d7', 0, false, 'phuKienCamera', 'admin', null, 'Phụ kiện camera', '2018-03-02 17:01:28');