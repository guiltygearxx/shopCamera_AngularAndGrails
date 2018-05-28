CREATE TABLE myapp.category
(
    id varchar(36) PRIMARY KEY NOT NULL,
    version bigint(20) NOT NULL,
    is_deleted bit(1),
    code varchar(255) NOT NULL,
    last_modified_user varchar(255),
    parent_category_id varchar(255),
    name varchar(1000) NOT NULL,
    last_modified_time datetime,
    content text,
    image_url varchar(1000),
    type varchar(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time, content, image_url, type) VALUES ('067fdb0a-c192-47d4-829e-f683438d1fd7', 0, false, 'Camera', 'admin', null, 'Camera trọn bộ', '2018-03-02 17:01:28', '<div class="page-title category-title">
<h1>Security A</h1>
</div>
<div class="category-description std">Swann security systems offer you the best value to help protect, and stay connected to, your property. With a choice of DVR recorder systems, you can choose from 4 to 16 channels and connect up to 16 cameras. Our NVR security systems have 4 to 24 channel options, suitable for large properties and businesses. <br /><br /> All of Swann&rsquo;s NVR and DVR security systems provide remote viewing, enabling you to view security footage remotely either from a computer, your smartphone or tablet. Resolutions range from 720p high definition up to 4k ultra high definition; ensuring you can see and record your CCTV footage clearly. Nearly all of our <a href="https://www.swann.com/us/products/security-cameras">security cameras</a> have night vision, are IP66 or IP67 rated so suitable for the outdoors. All Swann security systems are covered by a 12 month warranty (extendable to 18 months online), free 24/7 technical support and all the online help you need to install all components of your home security camera system yourself.</div>', 'https://www.a1securitycameras.com/images/landing#_pages/page-banner.png', 'camera');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time, content, image_url, type) VALUES ('201110fd-8494-46da-a6a2-044e37c9d095', 0, false, 'thietBiAnNinhChongTrom', 'admin', '067fdb0a-c192-47d4-829e-f683438d1fd7', 'Thiết bị chống trộm', '2018-03-02 17:01:28', '<div class="page-title category-title">
<h1>Security B</h1>
</div>
<div class="category-description std">Swann security systems offer you the best value to help protect, and stay connected to, your property. With a choice of DVR recorder systems, you can choose from 4 to 16 channels and connect up to 16 cameras. Our NVR security systems have 4 to 24 channel options, suitable for large properties and businesses. <br /><br /> All of Swann&rsquo;s NVR and DVR security systems provide remote viewing, enabling you to view security footage remotely either from a computer, your smartphone or tablet. Resolutions range from 720p high definition up to 4k ultra high definition; ensuring you can see and record your CCTV footage clearly. Nearly all of our <a href="https://www.swann.com/us/products/security-cameras">security cameras</a> have night vision, are IP66 or IP67 rated so suitable for the outdoors. All Swann security systems are covered by a 12 month warranty (extendable to 18 months online), free 24/7 technical support and all the online help you need to install all components of your home security camera system yourself.</div>', 'https://www.a1securitycameras.com/images/landing_pages/home-systems.png', 'daughi');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time, content, image_url, type) VALUES ('3e3f44fd-df40-48c7-986f-99e0a996daf6', 0, false, 'dauGhiHinhCameraTheoHang', 'admin', '067fdb0a-c192-47d4-829e-f683438d1fd7', 'Đầu ghi hình theo hãng', '2018-03-02 17:01:28', '<div class="page-title category-title">
<h1>Security C</h1>
</div>
<div class="category-description std">Swann security systems offer you the best value to help protect, and stay connected to, your property. With a choice of DVR recorder systems, you can choose from 4 to 16 channels and connect up to 16 cameras. Our NVR security systems have 4 to 24 channel options, suitable for large properties and businesses. <br /><br /> All of Swann&rsquo;s NVR and DVR security systems provide remote viewing, enabling you to view security footage remotely either from a computer, your smartphone or tablet. Resolutions range from 720p high definition up to 4k ultra high definition; ensuring you can see and record your CCTV footage clearly. Nearly all of our <a href="https://www.swann.com/us/products/security-cameras">security cameras</a> have night vision, are IP66 or IP67 rated so suitable for the outdoors. All Swann security systems are covered by a 12 month warranty (extendable to 18 months online), free 24/7 technical support and all the online help you need to install all components of your home security camera system yourself.</div>', 'https://www.a1securitycameras.com/images/landing_pages/business-systems.png', 'daughi');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time, content, image_url, type) VALUES ('42accdc5-d72e-43df-bb27-2472c79c039e', 0, false, 'phuKienCameraLuuDuLieu', 'admin', '067fdb0a-c192-47d4-829e-f683438d1fd7', 'Ổ lưu dữ liệu', '2018-03-02 17:01:28', '<div class="page-title category-title">
<h1>Security D</h1>
</div>
<div class="category-description std">Swann security systems offer you the best value to help protect, and stay connected to, your property. With a choice of DVR recorder systems, you can choose from 4 to 16 channels and connect up to 16 cameras. Our NVR security systems have 4 to 24 channel options, suitable for large properties and businesses. <br /><br /> All of Swann&rsquo;s NVR and DVR security systems provide remote viewing, enabling you to view security footage remotely either from a computer, your smartphone or tablet. Resolutions range from 720p high definition up to 4k ultra high definition; ensuring you can see and record your CCTV footage clearly. Nearly all of our <a href="https://www.swann.com/us/products/security-cameras">security cameras</a> have night vision, are IP66 or IP67 rated so suitable for the outdoors. All Swann security systems are covered by a 12 month warranty (extendable to 18 months online), free 24/7 technical support and all the online help you need to install all components of your home security camera system yourself.</div>', 'https://www.a1securitycameras.com/images/landing_pages/retail-systems.png', 'daughi');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time, content, image_url, type) VALUES ('44e17683-851c-422a-9478-dcbca44c0a78', 0, false, 'dauGhiHinhCameraTheoLoai', 'admin', '067fdb0a-c192-47d4-829e-f683438d1fd7', 'Đầu ghi hình theo loại', '2018-03-02 17:01:28', '<div class="page-title category-title">
<h1>Security E</h1>
</div>
<div class="category-description std">Swann security systems offer you the best value to help protect, and stay connected to, your property. With a choice of DVR recorder systems, you can choose from 4 to 16 channels and connect up to 16 cameras. Our NVR security systems have 4 to 24 channel options, suitable for large properties and businesses. <br /><br /> All of Swann&rsquo;s NVR and DVR security systems provide remote viewing, enabling you to view security footage remotely either from a computer, your smartphone or tablet. Resolutions range from 720p high definition up to 4k ultra high definition; ensuring you can see and record your CCTV footage clearly. Nearly all of our <a href="https://www.swann.com/us/products/security-cameras">security cameras</a> have night vision, are IP66 or IP67 rated so suitable for the outdoors. All Swann security systems are covered by a 12 month warranty (extendable to 18 months online), free 24/7 technical support and all the online help you need to install all components of your home security camera system yourself.</div>', 'https://www.a1securitycameras.com/images/landing_pages/home-systems.png', 'daughi');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time, content, image_url, type) VALUES ('4de2faa8-b1be-44e2-82f7-ea0bc7d845db', 0, false, 'cameraTronBoGiaRe', 'admin', '067fdb0a-c192-47d4-829e-f683438d1fd7', 'Camera trọn bộ giá rẻ', '2018-03-02 17:01:28', '<div class="page-title category-title">
<h1>Security F</h1>
</div>
<div class="category-description std">Swann security systems offer you the best value to help protect, and stay connected to, your property. With a choice of DVR recorder systems, you can choose from 4 to 16 channels and connect up to 16 cameras. Our NVR security systems have 4 to 24 channel options, suitable for large properties and businesses. <br /><br /> All of Swann&rsquo;s NVR and DVR security systems provide remote viewing, enabling you to view security footage remotely either from a computer, your smartphone or tablet. Resolutions range from 720p high definition up to 4k ultra high definition; ensuring you can see and record your CCTV footage clearly. Nearly all of our <a href="https://www.swann.com/us/products/security-cameras">security cameras</a> have night vision, are IP66 or IP67 rated so suitable for the outdoors. All Swann security systems are covered by a 12 month warranty (extendable to 18 months online), free 24/7 technical support and all the online help you need to install all components of your home security camera system yourself.</div>', 'https://www.a1securitycameras.com/images/landing_pages/business-systems.png', 'daughi');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time, content, image_url, type) VALUES ('74d3a143-e1db-4b15-89f6-577311cf100e', 0, false, 'phuKienCameraChinhHang', 'admin', '067fdb0a-c192-47d4-829e-f683438d1fd7', 'Phụ kiện chính hãngi', '2018-03-02 17:01:28', '<div class="page-title category-title">
<h1>Security G</h1>
</div>
<div class="category-description std">Swann security systems offer you the best value to help protect, and stay connected to, your property. With a choice of DVR recorder systems, you can choose from 4 to 16 channels and connect up to 16 cameras. Our NVR security systems have 4 to 24 channel options, suitable for large properties and businesses. <br /><br /> All of Swann&rsquo;s NVR and DVR security systems provide remote viewing, enabling you to view security footage remotely either from a computer, your smartphone or tablet. Resolutions range from 720p high definition up to 4k ultra high definition; ensuring you can see and record your CCTV footage clearly. Nearly all of our <a href="https://www.swann.com/us/products/security-cameras">security cameras</a> have night vision, are IP66 or IP67 rated so suitable for the outdoors. All Swann security systems are covered by a 12 month warranty (extendable to 18 months online), free 24/7 technical support and all the online help you need to install all components of your home security camera system yourself.</div>', 'https://www.a1securitycameras.com/images/landing_pages/retail-systems.png', 'daughi');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time, content, image_url, type) VALUES ('7dab85ba-61b7-4fae-a103-c9e8291e985e', 0, false, 'cameraGiamSatTheoLoai', 'admin', '067fdb0a-c192-47d4-829e-f683438d1fd7', 'Camera giám sát theo loại', '2018-03-02 17:01:28', '<div class="page-title category-title">
<h1>Security H</h1>
</div>
<div class="category-description std">Swann security systems offer you the best value to help protect, and stay connected to, your property. With a choice of DVR recorder systems, you can choose from 4 to 16 channels and connect up to 16 cameras. Our NVR security systems have 4 to 24 channel options, suitable for large properties and businesses. <br /><br /> All of Swann&rsquo;s NVR and DVR security systems provide remote viewing, enabling you to view security footage remotely either from a computer, your smartphone or tablet. Resolutions range from 720p high definition up to 4k ultra high definition; ensuring you can see and record your CCTV footage clearly. Nearly all of our <a href="https://www.swann.com/us/products/security-cameras">security cameras</a> have night vision, are IP66 or IP67 rated so suitable for the outdoors. All Swann security systems are covered by a 12 month warranty (extendable to 18 months online), free 24/7 technical support and all the online help you need to install all components of your home security camera system yourself.</div>', 'https://www.a1securitycameras.com/images/landing_pages/home-systems.png', 'daughi');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time, content, image_url, type) VALUES ('8007da16-a21d-42ee-b83c-ce757ff27313', 0, false, 'thietBiAnNinhChuong', 'admin', '067fdb0a-c192-47d4-829e-f683438d1fd7', 'Chuông', '2018-03-02 17:01:28', '<div class="page-title category-title">
<h1>Security I</h1>
</div>
<div class="category-description std">Swann security systems offer you the best value to help protect, and stay connected to, your property. With a choice of DVR recorder systems, you can choose from 4 to 16 channels and connect up to 16 cameras. Our NVR security systems have 4 to 24 channel options, suitable for large properties and businesses. <br /><br /> All of Swann&rsquo;s NVR and DVR security systems provide remote viewing, enabling you to view security footage remotely either from a computer, your smartphone or tablet. Resolutions range from 720p high definition up to 4k ultra high definition; ensuring you can see and record your CCTV footage clearly. Nearly all of our <a href="https://www.swann.com/us/products/security-cameras">security cameras</a> have night vision, are IP66 or IP67 rated so suitable for the outdoors. All Swann security systems are covered by a 12 month warranty (extendable to 18 months online), free 24/7 technical support and all the online help you need to install all components of your home security camera system yourself.</div>', 'https://www.a1securitycameras.com/images/landing_pages/business-systems.png', 'daughi');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time, content, image_url, type) VALUES ('9a40cd52-99fe-42cc-bda3-5e43fb1f5439', 0, false, 'Camera theo bộ', 'admin', null, 'Camera An ninh', '2018-03-02 17:01:28', '<div class="page-title category-title">
<h1>Security K</h1>
</div>
<div class="category-description std">Swann security systems offer you the best value to help protect, and stay connected to, your property. With a choice of DVR recorder systems, you can choose from 4 to 16 channels and connect up to 16 cameras. Our NVR security systems have 4 to 24 channel options, suitable for large properties and businesses. <br /><br /> All of Swann&rsquo;s NVR and DVR security systems provide remote viewing, enabling you to view security footage remotely either from a computer, your smartphone or tablet. Resolutions range from 720p high definition up to 4k ultra high definition; ensuring you can see and record your CCTV footage clearly. Nearly all of our <a href="https://www.swann.com/us/products/security-cameras">security cameras</a> have night vision, are IP66 or IP67 rated so suitable for the outdoors. All Swann security systems are covered by a 12 month warranty (extendable to 18 months online), free 24/7 technical support and all the online help you need to install all components of your home security camera system yourself.</div>', 'https://www.a1securitycameras.com/images/landing#_pages/page-banner.png', 'security');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time, content, image_url, type) VALUES ('9b288305-5d0d-455b-90db-be124d56f05c', 0, false, 'giaiPhapCameraBaoMat', 'admin', '9a40cd52-99fe-42cc-bda3-5e43fb1f5439', 'Giải pháp bảo mật', '2018-03-02 17:01:28', '<div class="page-title category-title">
<h1>Security L</h1>
</div>
<div class="category-description std">Swann security systems offer you the best value to help protect, and stay connected to, your property. With a choice of DVR recorder systems, you can choose from 4 to 16 channels and connect up to 16 cameras. Our NVR security systems have 4 to 24 channel options, suitable for large properties and businesses. <br /><br /> All of Swann&rsquo;s NVR and DVR security systems provide remote viewing, enabling you to view security footage remotely either from a computer, your smartphone or tablet. Resolutions range from 720p high definition up to 4k ultra high definition; ensuring you can see and record your CCTV footage clearly. Nearly all of our <a href="https://www.swann.com/us/products/security-cameras">security cameras</a> have night vision, are IP66 or IP67 rated so suitable for the outdoors. All Swann security systems are covered by a 12 month warranty (extendable to 18 months online), free 24/7 technical support and all the online help you need to install all components of your home security camera system yourself.</div>', 'https://www.a1securitycameras.com/images/landing_pages/retail-systems.png', 'security');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time, content, image_url, type) VALUES ('c0ee6f6b-dd63-4604-afc1-c9e9e8be76e1', 0, false, 'Đầu ghi camera', 'admin', null, 'Đầu ghi hình', '2018-03-02 17:01:28', '<div class="page-title category-title">
<h1>Security M</h1>
</div>
<div class="category-description std">Swann security systems offer you the best value to help protect, and stay connected to, your property. With a choice of DVR recorder systems, you can choose from 4 to 16 channels and connect up to 16 cameras. Our NVR security systems have 4 to 24 channel options, suitable for large properties and businesses. <br /><br /> All of Swann&rsquo;s NVR and DVR security systems provide remote viewing, enabling you to view security footage remotely either from a computer, your smartphone or tablet. Resolutions range from 720p high definition up to 4k ultra high definition; ensuring you can see and record your CCTV footage clearly. Nearly all of our <a href="https://www.swann.com/us/products/security-cameras">security cameras</a> have night vision, are IP66 or IP67 rated so suitable for the outdoors. All Swann security systems are covered by a 12 month warranty (extendable to 18 months online), free 24/7 technical support and all the online help you need to install all components of your home security camera system yourself.</div>', 'https://www.a1securitycameras.com/images/landing#_pages/page-banner.png', 'daughi');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time, content, image_url, type) VALUES ('c46c9d41-3c3f-462c-8ca5-73e43f06a896', 0, false, 'cameraTronBoNhapKhau', 'admin', '9a40cd52-99fe-42cc-bda3-5e43fb1f5439', 'Camera trọn bộ nhập khẩu', '2018-03-02 17:01:28', '<div class="page-title category-title">
<h1>Security N</h1>
</div>
<div class="category-description std">Swann security systems offer you the best value to help protect, and stay connected to, your property. With a choice of DVR recorder systems, you can choose from 4 to 16 channels and connect up to 16 cameras. Our NVR security systems have 4 to 24 channel options, suitable for large properties and businesses. <br /><br /> All of Swann&rsquo;s NVR and DVR security systems provide remote viewing, enabling you to view security footage remotely either from a computer, your smartphone or tablet. Resolutions range from 720p high definition up to 4k ultra high definition; ensuring you can see and record your CCTV footage clearly. Nearly all of our <a href="https://www.swann.com/us/products/security-cameras">security cameras</a> have night vision, are IP66 or IP67 rated so suitable for the outdoors. All Swann security systems are covered by a 12 month warranty (extendable to 18 months online), free 24/7 technical support and all the online help you need to install all components of your home security camera system yourself.</div>', 'https://www.a1securitycameras.com/images/landing_pages/home-systems.png', 'security');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time, content, image_url, type) VALUES ('cb6aa1bf-27af-4df5-bed1-7708ed09564c', 0, false, 'cameraGiamSatTheoHang', 'admin', '9a40cd52-99fe-42cc-bda3-5e43fb1f5439', 'Camera giám sát theo hãng', '2018-03-02 17:01:28', '<div class="page-title category-title">
<h1>Security O</h1>
</div>
<div class="category-description std">Swann security systems offer you the best value to help protect, and stay connected to, your property. With a choice of DVR recorder systems, you can choose from 4 to 16 channels and connect up to 16 cameras. Our NVR security systems have 4 to 24 channel options, suitable for large properties and businesses. <br /><br /> All of Swann&rsquo;s NVR and DVR security systems provide remote viewing, enabling you to view security footage remotely either from a computer, your smartphone or tablet. Resolutions range from 720p high definition up to 4k ultra high definition; ensuring you can see and record your CCTV footage clearly. Nearly all of our <a href="https://www.swann.com/us/products/security-cameras">security cameras</a> have night vision, are IP66 or IP67 rated so suitable for the outdoors. All Swann security systems are covered by a 12 month warranty (extendable to 18 months online), free 24/7 technical support and all the online help you need to install all components of your home security camera system yourself.</div>', 'https://www.a1securitycameras.com/images/landing_pages/business-systems.png', 'security');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time, content, image_url, type) VALUES ('cea2bf55-5507-4375-93dd-35c597a3d72d', 0, false, 'mayChamCongTheoHang', 'admin', '9a40cd52-99fe-42cc-bda3-5e43fb1f5439', 'Theo hãng', '2018-03-02 17:01:28', '<div class="page-title category-title">
<h1>Security P</h1>
</div>
<div class="category-description std">Swann security systems offer you the best value to help protect, and stay connected to, your property. With a choice of DVR recorder systems, you can choose from 4 to 16 channels and connect up to 16 cameras. Our NVR security systems have 4 to 24 channel options, suitable for large properties and businesses. <br /><br /> All of Swann&rsquo;s NVR and DVR security systems provide remote viewing, enabling you to view security footage remotely either from a computer, your smartphone or tablet. Resolutions range from 720p high definition up to 4k ultra high definition; ensuring you can see and record your CCTV footage clearly. Nearly all of our <a href="https://www.swann.com/us/products/security-cameras">security cameras</a> have night vision, are IP66 or IP67 rated so suitable for the outdoors. All Swann security systems are covered by a 12 month warranty (extendable to 18 months online), free 24/7 technical support and all the online help you need to install all components of your home security camera system yourself.</div>', 'https://www.a1securitycameras.com/images/landing_pages/retail-systems.png', 'security');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time, content, image_url, type) VALUES ('d5dd60d9-2e14-44f2-ab0d-55939a83b76b', 0, false, 'giaiPhapCameraAnNinh', 'admin', 'c0ee6f6b-dd63-4604-afc1-c9e9e8be76e1', 'Giải pháp an ninh', '2018-03-02 17:01:28', '<div class="page-title category-title">
<h1>Security Q</h1>
</div>
<div class="category-description std">Swann security systems offer you the best value to help protect, and stay connected to, your property. With a choice of DVR recorder systems, you can choose from 4 to 16 channels and connect up to 16 cameras. Our NVR security systems have 4 to 24 channel options, suitable for large properties and businesses. <br /><br /> All of Swann&rsquo;s NVR and DVR security systems provide remote viewing, enabling you to view security footage remotely either from a computer, your smartphone or tablet. Resolutions range from 720p high definition up to 4k ultra high definition; ensuring you can see and record your CCTV footage clearly. Nearly all of our <a href="https://www.swann.com/us/products/security-cameras">security cameras</a> have night vision, are IP66 or IP67 rated so suitable for the outdoors. All Swann security systems are covered by a 12 month warranty (extendable to 18 months online), free 24/7 technical support and all the online help you need to install all components of your home security camera system yourself.</div>', 'https://www.a1securitycameras.com/images/landing_pages/home-systems.png', 'camera');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time, content, image_url, type) VALUES ('d886fa4a-2f8c-4df9-80fe-ab4f00d57548', 0, false, 'dauGhiHinhCamera', 'admin', 'c0ee6f6b-dd63-4604-afc1-c9e9e8be76e1', 'Đầu ghi hình Camera', '2018-03-02 17:01:28', '<div class="page-title category-title">
<h1>Security B</h1>
</div>
<div class="category-description std">Swann security systems offer you the best value to help protect, and stay connected to, your property. With a choice of DVR recorder systems, you can choose from 4 to 16 channels and connect up to 16 cameras. Our NVR security systems have 4 to 24 channel options, suitable for large properties and businesses. <br /><br /> All of Swann&rsquo;s NVR and DVR security systems provide remote viewing, enabling you to view security footage remotely either from a computer, your smartphone or tablet. Resolutions range from 720p high definition up to 4k ultra high definition; ensuring you can see and record your CCTV footage clearly. Nearly all of our <a href="https://www.swann.com/us/products/security-cameras">security cameras</a> have night vision, are IP66 or IP67 rated so suitable for the outdoors. All Swann security systems are covered by a 12 month warranty (extendable to 18 months online), free 24/7 technical support and all the online help you need to install all components of your home security camera system yourself.</div>', 'https://www.a1securitycameras.com/images/landing_pages/business-systems.png', 'camera');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time, content, image_url, type) VALUES ('de7a8ded-3749-4dfd-8840-783ee527d0b1', 0, false, 'mayChamCong', 'admin', 'c0ee6f6b-dd63-4604-afc1-c9e9e8be76e1', 'Máy chấm công', '2018-03-02 17:01:28', '<div class="page-title category-title">
<h1>Security C</h1>
</div>
<div class="category-description std">Swann security systems offer you the best value to help protect, and stay connected to, your property. With a choice of DVR recorder systems, you can choose from 4 to 16 channels and connect up to 16 cameras. Our NVR security systems have 4 to 24 channel options, suitable for large properties and businesses. <br /><br /> All of Swann&rsquo;s NVR and DVR security systems provide remote viewing, enabling you to view security footage remotely either from a computer, your smartphone or tablet. Resolutions range from 720p high definition up to 4k ultra high definition; ensuring you can see and record your CCTV footage clearly. Nearly all of our <a href="https://www.swann.com/us/products/security-cameras">security cameras</a> have night vision, are IP66 or IP67 rated so suitable for the outdoors. All Swann security systems are covered by a 12 month warranty (extendable to 18 months online), free 24/7 technical support and all the online help you need to install all components of your home security camera system yourself.</div>', 'https://www.a1securitycameras.com/images/landing_pages/retail-systems.png', 'camera');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time, content, image_url, type) VALUES ('e438ed6f-5fc6-4e53-8b9c-0e036df317db', 0, false, 'mayChamCongTheoLoai', 'admin', 'c0ee6f6b-dd63-4604-afc1-c9e9e8be76e1', 'Theo loại ứng dụng', '2018-03-02 17:01:28', '<div class="page-title category-title">
<h1>Security D</h1>
</div>
<div class="category-description std">Swann security systems offer you the best value to help protect, and stay connected to, your property. With a choice of DVR recorder systems, you can choose from 4 to 16 channels and connect up to 16 cameras. Our NVR security systems have 4 to 24 channel options, suitable for large properties and businesses. <br /><br /> All of Swann&rsquo;s NVR and DVR security systems provide remote viewing, enabling you to view security footage remotely either from a computer, your smartphone or tablet. Resolutions range from 720p high definition up to 4k ultra high definition; ensuring you can see and record your CCTV footage clearly. Nearly all of our <a href="https://www.swann.com/us/products/security-cameras">security cameras</a> have night vision, are IP66 or IP67 rated so suitable for the outdoors. All Swann security systems are covered by a 12 month warranty (extendable to 18 months online), free 24/7 technical support and all the online help you need to install all components of your home security camera system yourself.</div>', 'https://www.a1securitycameras.com/images/landing_pages/home-systems.png', 'camera');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time, content, image_url, type) VALUES ('f2ea6507-8169-455a-92cd-0dfbeeee796c', 0, false, 'giaiPhapCamera', 'admin', 'c0ee6f6b-dd63-4604-afc1-c9e9e8be76e1', 'Giải pháp Camera', '2018-03-02 17:01:28', '<div class="page-title category-title">
<h1>Security E</h1>
</div>
<div class="category-description std">Swann security systems offer you the best value to help protect, and stay connected to, your property. With a choice of DVR recorder systems, you can choose from 4 to 16 channels and connect up to 16 cameras. Our NVR security systems have 4 to 24 channel options, suitable for large properties and businesses. <br /><br /> All of Swann&rsquo;s NVR and DVR security systems provide remote viewing, enabling you to view security footage remotely either from a computer, your smartphone or tablet. Resolutions range from 720p high definition up to 4k ultra high definition; ensuring you can see and record your CCTV footage clearly. Nearly all of our <a href="https://www.swann.com/us/products/security-cameras">security cameras</a> have night vision, are IP66 or IP67 rated so suitable for the outdoors. All Swann security systems are covered by a 12 month warranty (extendable to 18 months online), free 24/7 technical support and all the online help you need to install all components of your home security camera system yourself.</div>', 'https://www.a1securitycameras.com/images/landing_pages/business-systems.png', 'camera');
INSERT INTO myapp.category (id, version, is_deleted, code, last_modified_user, parent_category_id, name, last_modified_time, content, image_url, type) VALUES ('fcccb111-ebba-4e6c-a36c-c1ace90962d7', 0, false, 'phuKienCamera', 'admin', 'c0ee6f6b-dd63-4604-afc1-c9e9e8be76e1', 'Phụ kiện camera', '2018-03-02 17:01:28', '<div class="page-title category-title">
<h1>Security F</h1>
</div>
<div class="category-description std">Swann security systems offer you the best value to help protect, and stay connected to, your property. With a choice of DVR recorder systems, you can choose from 4 to 16 channels and connect up to 16 cameras. Our NVR security systems have 4 to 24 channel options, suitable for large properties and businesses. <br /><br /> All of Swann&rsquo;s NVR and DVR security systems provide remote viewing, enabling you to view security footage remotely either from a computer, your smartphone or tablet. Resolutions range from 720p high definition up to 4k ultra high definition; ensuring you can see and record your CCTV footage clearly. Nearly all of our <a href="https://www.swann.com/us/products/security-cameras">security cameras</a> have night vision, are IP66 or IP67 rated so suitable for the outdoors. All Swann security systems are covered by a 12 month warranty (extendable to 18 months online), free 24/7 technical support and all the online help you need to install all components of your home security camera system yourself.</div>', 'https://www.a1securitycameras.com/images/landing_pages/retail-systems.png', 'camera');