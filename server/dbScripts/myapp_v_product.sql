CREATE TABLE myapp.v_product
(
    id varchar(36) NOT NULL,
    category_id varchar(36) NOT NULL,
    name varchar(255) NOT NULL,
    image1 varchar(255),
    hang_san_xuat varchar(255),
    bao_hanh varchar(255),
    kho_hang varchar(255),
    gia decimal(19,2),
    gia_truoc_khi_ha decimal(19,2),
    khuyen_mai text,
    phan_tram_giam_gia decimal(19,2),
    thong_tin_mo_rong text,
    hinh_anh_truc_quan varchar(1000),
    thong_tin_bo_sung varchar(1000),
    version bigint(20) NOT NULL,
    is_deleted bit(1),
    last_modified_time datetime,
    last_modified_user varchar(255),
    category_name varchar(255) NOT NULL
);
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('07dfe7d1-ba9e-4e8b-89ac-52cfc329c1aa', '201110fd-8494-46da-a6a2-044e37c9d095', 'Lắp đặt 2 camera hikvision 2MP Full HD 1080P', 'https://www.swann.com/media/product/830/swdvk-845804-1b7.jpg', 'Panasonic', '12', '99', 1990000.00, 1990000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 10.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Thiết bị chống trộm');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('12ff3c0c-10ae-44c5-80cb-1507bf709c78', '201110fd-8494-46da-a6a2-044e37c9d095', 'Camera IP Samsung SND-L6083RP Wisenet Lite', 'https://www.swann.com/media/product/a4c/swdvk-416002-730.jpg', 'Canon', '12', '88', 8200000.00, 8200000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 20.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Thiết bị chống trộm');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('2592720b-1020-420f-a8ce-1968e90e2fda', '201110fd-8494-46da-a6a2-044e37c9d095', 'Lắp đặt camera wifi Dahua DH-IPC-C15P', 'https://www.swann.com/media/product/46d/swdvk-8720p8-9a8.jpg', 'Panasonic', '12', '99', 1990000.00, 1990000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 10.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Thiết bị chống trộm');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('2b0e1283-ea35-4866-8c9c-3a1cb15483c3', 'f2ea6507-8169-455a-92cd-0dfbeeee796c', 'Camera IP Wifi HIKVISION DS-2CD2410F-IW', 'https://www.swann.com/media/product/284/swdvk-4720p4-d2e.jpg', 'Panasonic', '12', '99', 4200000.00, 4200000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 20.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Giải pháp Camera');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('30896eb8-93f8-4ad3-9078-5286e6bdc72f', '201110fd-8494-46da-a6a2-044e37c9d095', 'Lắp đặt 2 camera hikvision 2MP Full HD 1080P', 'https://www.swann.com/media/product/144/swdvk-hdhomk84-5c6.jpg', 'Panasonic', '12', '77', 1990000.00, 1990000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 10.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Thiết bị chống trộm');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('3640b757-6b32-40be-a19f-df27c694c523', 'cb6aa1bf-27af-4df5-bed1-7708ed09564c', 'Camera IP PTZ Samsung SNP-6320HP', 'https://www.swann.com/media/product/9b5/sodvk-4720p94-8bb.jpg', 'Panasonic', '12', '99', 1990000.00, 1990000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 20.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Camera giám sát theo hãng');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('488776b6-bd9b-4733-9fa1-4fd66e1506e9', '201110fd-8494-46da-a6a2-044e37c9d095', 'Camera IP Samsung SNO-7084RP WiseNetⅢ3M', 'https://www.swann.com/media/product/ae3/sodvk-8720p74-99e.jpg', 'Canon', '12', '66', 3500000.00, 3500000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 10.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Thiết bị chống trộm');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('5eb93335-ec03-4ac8-838d-6316876f14ad', '201110fd-8494-46da-a6a2-044e37c9d095', 'SCamera Samsung SNB-6005P WiseNetⅢ2M', 'https://www.swann.com/media/product/6b8/sodvk-8720p114-3b2.jpg', 'Panasonic', '12', '55', 1990000.00, 1990000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 20.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Thiết bị chống trộm');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('613752e9-d912-41f7-9695-aea671f00a94', '201110fd-8494-46da-a6a2-044e37c9d095', 'Camera IP PTZ Samsung SNP-6321HP', 'https://www.swann.com/media/product/f41/swdvk-816004-lw-87b.jpg', 'Panasonic', '12', '99', 2900000.00, 2900000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 10.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Thiết bị chống trộm');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('65afdb9d-14b7-46b9-838e-d24f88ecab31', '201110fd-8494-46da-a6a2-044e37c9d095', 'lắp đặt 1 camera hikvision 2MP Full HD 1080P', 'https://www.swann.com/media/product/46d/swdvk-8720p8-9a8.jpg', 'Canon', '12', '44', 3500000.00, 3500000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 20.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Thiết bị chống trộm');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('a24fb77b-711c-4965-9ad6-bea55dc3ecbf', '201110fd-8494-46da-a6a2-044e37c9d095', 'Camera IP PTZ Samsung SNP-L5233P', 'https://www.swann.com/media/product/284/swdvk-4720p4-d2e.jpg', 'Panasonic', '12', '99', 2900000.00, 2900000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 10.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Thiết bị chống trộm');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('a99569b9-7cad-4aa2-b8f8-50377a777ce8', 'cb6aa1bf-27af-4df5-bed1-7708ed09564c', 'Camera IP PTZ Samsung SNP-5321P', 'https://www.swann.com/media/product/144/swdvk-hdhomk84-5c6.jpg', 'Panasonic', '12', '99', 2900000.00, 2900000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 20.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Camera giám sát theo hãng');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('a9d16580-96f2-4f97-9aa3-893f639a77a5', 'f2ea6507-8169-455a-92cd-0dfbeeee796c', 'Camera PTZ Samsung SNP-6321P quay quét', 'https://www.swann.com/media/product/9b5/sodvk-4720p94-8bb.jpg', 'Panasonic', '12', '99', 4200000.00, 4200000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 10.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Giải pháp Camera');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('aec1a87d-8d1e-417c-a1d8-173a3b8299de', 'f2ea6507-8169-455a-92cd-0dfbeeee796c', 'Camera PTZ Samsung SNP-6320P WiseNetⅢPlus 2M', 'https://www.swann.com/media/product/ae3/sodvk-8720p74-99e.jpg', 'Panasonic', '12', '99', 4200000.00, 4200000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 20.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Giải pháp Camera');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('aeed7036-ef24-4e6d-97cf-15b22acb9415', 'f2ea6507-8169-455a-92cd-0dfbeeee796c', 'Camera IP Samsung QND-7080RP hồng ngoại 4.0M', 'https://www.swann.com/media/product/6b8/sodvk-8720p114-3b2.jpg', 'Panasonic', '12', '99', 1990000.00, 1990000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 10.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Giải pháp Camera');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('b008a77b-a021-49bd-80d1-16954b5d0b62', 'cb6aa1bf-27af-4df5-bed1-7708ed09564c', 'Camera IP Samsung SNF-8010VMP 360 độ', 'https://www.swann.com/media/product/f41/swdvk-816004-lw-87b.jpg', 'Panasonic', '12', '99', 3500000.00, 3500000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 20.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Camera giám sát theo hãng');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('b8b5b9c8-7664-4c21-9b14-1909c9a4188b', '201110fd-8494-46da-a6a2-044e37c9d095', 'Lắp đặt 4 camera Hikvision giá rẻ 1.0MP', 'https://www.swann.com/media/product/16d/swdvk-845958-5d6.jpg', 'Panasonic', '12', '33', 1990000.00, 1990000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 10.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Thiết bị chống trộm');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('b98916fa-4a5e-48c5-8405-9cedbfd8bba6', '201110fd-8494-46da-a6a2-044e37c9d095', 'Camera IP Samsung SNF-8010P 360 độ', 'https://www.swann.com/media/product/41b/swdvk-845904-912.jpg', 'Panasonic', '12', '99', 8200000.00, 8200000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 20.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Thiết bị chống trộm');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('bd28352c-8de5-4511-b135-086be4b87108', 'cb6aa1bf-27af-4df5-bed1-7708ed09564c', 'Camera IP Samsung SNO-7084RP WiseNetⅢ3M', 'https://www.swann.com/media/product/830/swdvk-845804-1b7.jpg', 'Panasonic', '12', '99', 4200000.00, 4200000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 10.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Camera giám sát theo hãng');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('cfafa288-c3bd-4aea-98e1-5437e65edd14', 'cb6aa1bf-27af-4df5-bed1-7708ed09564c', 'Camera IP Samsung QNO-6070RP FUll HD', 'https://www.swann.com/media/product/a4c/swdvk-416002-730.jpg', 'Panasonic', '12', '99', 1500000.00, 1500000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 20.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Camera giám sát theo hãng');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('ea4480dd-2970-4d1b-98c9-6a76a2669881', '201110fd-8494-46da-a6a2-044e37c9d095', 'Camera IP Samsung SNB-8000P 5 Megapixel', 'https://www.swann.com/media/product/46d/swdvk-8720p8-9a8.jpg', 'Canon', '12', '22', 8200000.00, 8200000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 10.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Thiết bị chống trộm');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('ed258976-6172-41c8-98d6-9f691d15c498', 'c46c9d41-3c3f-462c-8ca5-73e43f06a896', 'Camera IP Box Samsung SNB-7004P WiseNetⅢ3M', 'https://www.swann.com/media/product/284/swdvk-4720p4-d2e.jpg', 'Panasonic', '12', '11', 2900000.00, 2900000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 20.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:51', 'admin', 'Camera trọn bộ nhập khẩu');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('ee25c4b9-0c11-43aa-aa1e-4d1c993b44f9', 'f2ea6507-8169-455a-92cd-0dfbeeee796c', 'Lắp đặt 3 camera Hikvision giá rẻ 1.0MP', 'https://www.swann.com/media/product/144/swdvk-hdhomk84-5c6.jpg', 'Canon', '12', '10', 3500000.00, 3500000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 10.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Giải pháp Camera');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('ef446403-d0df-4b0a-a34c-b57652d4a364', 'f2ea6507-8169-455a-92cd-0dfbeeee796c', 'Camera IP Samsung QNO-7020RP Hồng ngoại 4M', 'https://www.swann.com/media/product/9b5/sodvk-4720p94-8bb.jpg', 'Panasonic', '12', '99', 8200000.00, 8200000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 20.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Giải pháp Camera');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('f0a22118-f827-455e-a5d3-29fcc4f8089a', 'f2ea6507-8169-455a-92cd-0dfbeeee796c', 'Camera IP Samsung QNO-7010RP Hồng ngoại 4.0 ', 'https://www.swann.com/media/product/ae3/sodvk-8720p74-99e.jpg', 'Panasonic', '12', '99', 8200000.00, 8200000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 30.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Giải pháp Camera');
INSERT INTO myapp.v_product (id, category_id, name, image1, hang_san_xuat, bao_hanh, kho_hang, gia, gia_truoc_khi_ha, khuyen_mai, phan_tram_giam_gia, thong_tin_mo_rong, hinh_anh_truc_quan, thong_tin_bo_sung, version, is_deleted, last_modified_time, last_modified_user, category_name) VALUES ('f35e1c5b-ca3b-45f7-8f06-9b7844503f4c', 'cb6aa1bf-27af-4df5-bed1-7708ed09564c', 'Camera IP Samsung SNB-6004P WiseNetⅢ2M', 'https://www.swann.com/media/product/6b8/sodvk-8720p114-3b2.jpg', 'Panasonic', '12', '99', 8200000.00, 8200000.00, '<table style="border-collapse: collapse;" border="1" width="100%" cellspacing="0" cellpadding="3" bgcolor="#fefefe">
<tbody>
<tr>
<td class="textBold" style="color: #ffffff;" bgcolor="#0178BA">TỔNG QUAN</td>
<td align="right" bgcolor="#0178BA"><a title="Đ&acirc;̀u ghi hình 4 k&ecirc;nh Panasonic CJ-HDR104" href="http://bienbacsecurity.com.vn/en/Camera-HD-CVI-PANASONIC-Japan-p1158/Da-u-ghi-hi-nh-4-kenh-Panasonic-CJ-HDR104-d1751"><strong style="color: #ffffff;">&raquo; Xem chi tiết</strong></a></td>
</tr>
<tr>
<td class="tt">Gi&aacute;</td>
<td class="proprice"><a href="http://bienbacsecurity.com.vn/en/contact.php">Li&ecirc;n hệ</a></td>
</tr>
<tr>
<td class="tt">Số k&ecirc;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/4.html">4</a></span></td>
</tr>
<tr>
<td class="tt">Độ ph&acirc;n giải / Tốc độ ghi h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/HD-CVI-1080P-1-12fps-720P-960H-D1-1-25fps.html">HD-CVI 1080P (1~12fps)/ 720P/ 960H/ D1 (1~25fps)</a></span></td>
</tr>
<tr>
<td class="tt">Đầu ra m&agrave;n h&igrave;nh</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-HDMI-1-VGA.html">1 HDMI, 1 VGA</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ hiển thị</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Chế độ xem lại</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-4.html">1/4</a></span></td>
</tr>
<tr>
<td class="tt">Số khay ổ cứng</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/1-x-6TB.html">1 x 6TB</a></span></td>
</tr>
<tr>
<td class="tt">Số truy cập đồng thời</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/128.html">128</a></span></td>
</tr>
<tr>
<td class="tt">Nguồn / C&ocirc;ng su&acirc;́t</td>
<td><span style="color: #333333;"><a href="http://bienbacsecurity.com.vn/DC12V-4A-10W.html">DC12V/4A, 10W</a></span></td>
</tr>
</tbody>
</table>', 20.00, '<div class="clearfix bullets-container" style="height: 128px;">
<ul>
<li>1080p Full HD</li>
<li>Pan: Continuous 360&deg;</li>
<li>18x Optical Zoom</li>
<li>On-board Wiper</li>
<li>Weatherproof (IP66)</li>
<li>Arctic Camera</li>
</ul>
</div>', 'assets/images/tag/channel-8.png,assets/images/tag/camera-08.png,assets/images/tag/chat_luong_4K.png,assets/images/tag/o_cung_2.png,assets/images/tag/chieu_sang_131.png', '<p><span style="color: #993300;"><strong>Khuyến mại đặc biệt</strong></span></p>', 0, false, '2018-03-03 14:22:50', 'admin', 'Camera giám sát theo hãng');