CREATE TABLE myapp.attribute
(
    id varchar(255) PRIMARY KEY NOT NULL,
    version bigint(20) NOT NULL,
    is_deleted bit(1),
    code varchar(255) NOT NULL,
    last_modified_user varchar(255),
    json_config varchar(2000) NOT NULL,
    group_ varchar(255) NOT NULL,
    order_ int(11) NOT NULL,
    title varchar(255) NOT NULL,
    last_modified_time datetime
);
INSERT INTO myapp.attribute (id, version, is_deleted, code, last_modified_user, json_config, group_, order_, title, last_modified_time) VALUES ('001', 0, false, 'thuongHieu', 'admin', '{"items":[{"id":"HIKVISION","name":"HIKVISION"},{"id":"PANASONIC","name":"PANASONIC"},{"id":"PANASONIC","name":"PANASONIC"},{"id":"SAMSUNG","name":"SAMSUNG"},{"id":"DAHUA","name":"DAHUA"},{"id":"KBVISION","name":"KBVISION"},{"id":"ESCORT","name":"ESCORT"},{"id":"AVTECH","name":"AVTECH"},{"id":"VANTECH","name":"VANTECH"},{"id":"QUESTEK","name":"QUESTEK"},{"id":"SAMTECH","name":"SAMTECH"},{"id":"PICOTECH","name":"PICOTECH"},{"id":"HONEYWELL","name":"HONEYWELL"},{"id":"EZVIZ","name":"EZVIZ"}]}', 'camera', 0, 'Thương hiệu', '2018-03-31 10:06:39');
INSERT INTO myapp.attribute (id, version, is_deleted, code, last_modified_user, json_config, group_, order_, title, last_modified_time) VALUES ('002', 0, false, 'phanGiai', 'admin', '{"items":[{"id":"1MP","name":"1MP"},{"id":"2MP","name":"2MP"},{"id":"3MP","name":"3MP"},{"id":"4MP","name":"4MP"},{"id":"more4MP","name":"> 4MP"}]}', 'camera', 0, 'Phân giải', '2018-03-31 10:06:39');
INSERT INTO myapp.attribute (id, version, is_deleted, code, last_modified_user, json_config, group_, order_, title, last_modified_time) VALUES ('003', 0, false, 'len', 'admin', '{"items":[{"id":"Fixed_Lens","name":"Cố định ống kính"},{"id":"Automatic","name":"Tự động"},{"id":"(Manual","name":"Thủ công"}]}', 'camera', 0, 'Loại Len', '2018-03-31 10:06:39');
INSERT INTO myapp.attribute (id, version, is_deleted, code, last_modified_user, json_config, group_, order_, title, last_modified_time) VALUES ('004', 0, false, 'congNghe', 'admin', '{"items":[{"id":"HD-SDI","name":"+ HD-SDI"},{"id":"HD-TVI","name":"+ HD-TVI"},{"id":"HD-CVI","name":"+ HD-CVI"},{"id":"HD-AHD","name":"+ HD-AHD"}]}', 'camera', 0, 'Công nghệ', '2018-03-31 10:06:39');
INSERT INTO myapp.attribute (id, version, is_deleted, code, last_modified_user, json_config, group_, order_, title, last_modified_time) VALUES ('005', 0, false, 'moiTruong', 'admin', '{"items":[{"id":"Indoor","name":"Trong nhà"},{"id":"Outdoor","name":"Ngoài trời"}]}', 'camera', 0, 'Môi trường', '2018-03-31 10:06:39');
INSERT INTO myapp.attribute (id, version, is_deleted, code, last_modified_user, json_config, group_, order_, title, last_modified_time) VALUES ('006', 0, false, 'tinhNang', 'admin', '{"items":[{"id":"Night_Vision","name":"Chiếu sáng trong đêm"},{"id":"Motion_Sensing","name":"Ngoài trời"},{"id":"Motion_Sensing","name":"Cảm biến chuyển động"},{"id":"Wi-Fi","name":"Wi-Fi"},{"id":"Audio","name":"Có âm thanh"},{"id":"Pan_Tilt","name":"Pan / Tilt"},{"id":"Waterproof","name":"Không thấm nước"},{"id":"Invisible_Infrared","name":"Hồng ngoại"},{"id":"Wireless","name":"Không dây"}]}', 'camera', 0, 'Tính năng', '2018-03-31 10:06:39');
INSERT INTO myapp.attribute (id, version, is_deleted, code, last_modified_user, json_config, group_, order_, title, last_modified_time) VALUES ('007', 0, false, 'thuongHieu', 'admin', '{"items":[{"id":"HIKVISION","name":"HIKVISION"},{"id":"PANASONIC","name":"PANASONIC"},{"id":"PANASONIC","name":"PANASONIC"},{"id":"SAMSUNG","name":"SAMSUNG"},{"id":"DAHUA","name":"DAHUA"},{"id":"KBVISION","name":"KBVISION"},{"id":"ESCORT","name":"ESCORT"},{"id":"AVTECH","name":"AVTECH"},{"id":"VANTECH","name":"VANTECH"},{"id":"QUESTEK","name":"QUESTEK"},{"id":"SAMTECH","name":"SAMTECH"},{"id":"PICOTECH","name":"PICOTECH"},{"id":"HONEYWELL","name":"HONEYWELL"},{"id":"EZVIZ","name":"EZVIZ"}]}', 'security', 0, 'Thương hiệu', '2018-03-31 10:06:39');
INSERT INTO myapp.attribute (id, version, is_deleted, code, last_modified_user, json_config, group_, order_, title, last_modified_time) VALUES ('008', 0, false, 'phanGiai', 'admin', '{"items":[{"id":"1MP","name":"1MP"},{"id":"1_3MP","name":"1.3MP"},{"id":"2MP","name":"2MP"},{"id":"2_4MP","name":"2.4MP"},{"id":"3MP","name":"3MP"},{"id":"4MP","name":"4MP"},{"id":"5MP","name":"5MP"},{"id":"more5MP","name":"> 5MP"}]}', 'security', 0, 'Phân giải', '2018-03-31 10:06:39');
INSERT INTO myapp.attribute (id, version, is_deleted, code, last_modified_user, json_config, group_, order_, title, last_modified_time) VALUES ('009', 0, false, 'store', 'admin', '{"items":[{"id":"noHDD","name":"No HDD included"},{"id":"500GB","name":"500GB"},{"id":"1TB","name":"1TB"},{"id":"2TB","name":"2TB"},{"id":"3TB","name":"3TB"},{"id":"4TB","name":"4TB"},{"id":"5TB","name":"5TB"},{"id":"6TB","name":"6TB"},{"id":"8TB","name":"8TB"},{"id":"10TB","name":"10TB"},{"id":"12TB","name":"12TB"},{"id":"14TB","name":"14TB"},{"id":"16TB","name":"16TB"},{"id":"18TB","name":"18TB"},{"id":"20TB","name":"20TB"},{"id":"24TB","name":"24TB"},{"id":"30TB","name":"30TB"},{"id":"32TB","name":"32TB"},{"id":"36TB","name":"36TB"},{"id":"40TB","name":"40TB"},{"id":"48TB","name":"48TB"},{"id":"60TB","name":"60TB"},{"id":"96TB","name":"96TB"},{"id":"128GB","name":"128GB"},{"id":"more128GB","name":">128GB"}]}', 'security', 0, 'Lưu trữ', '2018-03-31 10:06:39');
INSERT INTO myapp.attribute (id, version, is_deleted, code, last_modified_user, json_config, group_, order_, title, last_modified_time) VALUES ('010', 0, false, 'congNghe', 'admin', '{"items":[{"id":"HD-SDI","name":"+ HD-SDI"},{"id":"HD-TVI","name":"+ HD-TVI"},{"id":"HD-CVI","name":"+ HD-CVI"},{"id":"HD-AHD","name":"+ HD-AHD"}]}', 'security', 0, 'Công nghệ', '2018-03-31 10:06:39');
INSERT INTO myapp.attribute (id, version, is_deleted, code, last_modified_user, json_config, group_, order_, title, last_modified_time) VALUES ('011', 0, false, 'moiTruong', 'admin', '{"items":[{"id":"Indoor","name":"Trong nhà"},{"id":"Outdoor","name":"Ngoài trời"}]}', 'security', 0, 'Môi trường', '2018-03-31 10:06:39');
INSERT INTO myapp.attribute (id, version, is_deleted, code, last_modified_user, json_config, group_, order_, title, last_modified_time) VALUES ('012', 0, false, 'len', 'admin', '{"items":[{"id":"Fixed_Lens","name":"Cố định ống kính"},{"id":"Automatic","name":"Tự động"},{"id":"(Manual","name":"Thủ công"}]}', 'security', 0, 'Loại Len', '2018-03-31 10:06:39');
INSERT INTO myapp.attribute (id, version, is_deleted, code, last_modified_user, json_config, group_, order_, title, last_modified_time) VALUES ('013', 0, false, 'thuongHieu', 'admin', '{"items":[{"id":"HIKVISION","name":"HIKVISION"},{"id":"PANASONIC","name":"PANASONIC"},{"id":"PANASONIC","name":"PANASONIC"},{"id":"SAMSUNG","name":"SAMSUNG"},{"id":"DAHUA","name":"DAHUA"},{"id":"KBVISION","name":"KBVISION"},{"id":"ESCORT","name":"ESCORT"},{"id":"AVTECH","name":"AVTECH"},{"id":"VANTECH","name":"VANTECH"},{"id":"QUESTEK","name":"QUESTEK"},{"id":"SAMTECH","name":"SAMTECH"},{"id":"PICOTECH","name":"PICOTECH"},{"id":"HONEYWELL","name":"HONEYWELL"},{"id":"EZVIZ","name":"EZVIZ"}]}', 'daughi', 0, 'Thương hiệu', '2018-03-31 10:06:39');
INSERT INTO myapp.attribute (id, version, is_deleted, code, last_modified_user, json_config, group_, order_, title, last_modified_time) VALUES ('014', 0, false, 'congNghe', 'admin', '{"items":[{"id":"DVR","name":"- DVR"},{"id":"NVR","name":"- NVR"},{"id":"DVR-NVR","name":"- DVR+NVR"},{"id":"HD-AHD","name":"+ HD-AHD"}]}', 'daughi', 0, 'Công nghệ', '2018-03-31 10:06:39');
INSERT INTO myapp.attribute (id, version, is_deleted, code, last_modified_user, json_config, group_, order_, title, last_modified_time) VALUES ('015', 0, false, 'soKenh', 'admin', '{"items":[{"id":"1_camera_channel","name":"1 camera channel"},{"id":"4_camera_channel","name":"4 camera channel"},{"id":"8_camera_channel","name":"8 camera channel"},{"id":"9_camera_channel","name":"9 camera channel"},{"id":"12_camera_channel","name":"12 camera channel"},{"id":"16_camera_channel","name":"16 camera channel"},{"id":"20_camera_channel","name":"20 camera channel"},{"id":"24_camera_channel","name":"24 camera channel"},{"id":"32_camera_channel","name":"32 camera channel"},{"id":"40_camera_channel","name":"40 camera channel"},{"id":"48_camera_channel","name":"48 camera channel"},{"id":"64_camera_channel","name":"64 camera channel"},{"id":"128_camera_channel","name":"128 camera channel"},{"id":"200_camera_channel","name":"200 camera channel"},{"id":"256_camera_channel","name":"256 camera channel"},{"id":"more_256_camera_channel","name":">256 camera channel"}]}', 'daughi', 0, 'Số kênh', '2018-03-31 10:06:39');
INSERT INTO myapp.attribute (id, version, is_deleted, code, last_modified_user, json_config, group_, order_, title, last_modified_time) VALUES ('016', 0, false, 'phanGiai', 'admin', '{"items":[{"id":"1MP","name":"1MP"},{"id":"2MP","name":"2MP"},{"id":"3MP","name":"3MP"},{"id":"4MP","name":"4MP"},{"id":"5MP","name":"5MP"},{"id":"6MP","name":"6MP"},{"id":"8MP","name":"8MP"},{"id":"10MP","name":"10MP"},{"id":"more10MP","name":">10MP"}]}', 'daughi', 0, 'Phân giải', '2018-03-31 10:06:39');
INSERT INTO myapp.attribute (id, version, is_deleted, code, last_modified_user, json_config, group_, order_, title, last_modified_time) VALUES ('017', 0, false, 'store', 'admin', '{"items":[{"id":"noHDD","name":"No HDD included"},{"id":"500GB","name":"500GB"},{"id":"1TB","name":"1TB"},{"id":"2TB","name":"2TB"},{"id":"3TB","name":"3TB"},{"id":"4TB","name":"4TB"},{"id":"5TB","name":"5TB"},{"id":"6TB","name":"6TB"},{"id":"8TB","name":"8TB"},{"id":"10TB","name":"10TB"},{"id":"12TB","name":"12TB"},{"id":"14TB","name":"14TB"},{"id":"16TB","name":"16TB"},{"id":"18TB","name":"18TB"},{"id":"20TB","name":"20TB"},{"id":"24TB","name":"24TB"},{"id":"30TB","name":"30TB"},{"id":"32TB","name":"32TB"},{"id":"36TB","name":"36TB"},{"id":"40TB","name":"40TB"},{"id":"48TB","name":"48TB"},{"id":"60TB","name":"60TB"},{"id":"96TB","name":"96TB"},{"id":"128GB","name":"128GB"},{"id":"more128GB","name":">128GB"}]}', 'daughi', 0, 'Lưu trữ', '2018-03-31 10:06:39');
INSERT INTO myapp.attribute (id, version, is_deleted, code, last_modified_user, json_config, group_, order_, title, last_modified_time) VALUES ('018', 0, false, 'tinhNang', 'admin', '{"items":[{"id":"support4K","name":"Support 4K\\nePoE Technology"}]}', 'daughi', 0, 'Tính năng', '2018-03-31 10:06:39');