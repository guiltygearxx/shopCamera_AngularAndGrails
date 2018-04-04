CREATE TABLE myapp.filter_camera
(
    id varchar(255) PRIMARY KEY NOT NULL,
    version bigint(20) NOT NULL,
    moi_truong varchar(255),
    khau_do varchar(255),
    thuong_hieu varchar(255),
    is_deleted bit(1),
    tinh_nang_chuyen_dung varchar(255),
    phan_giai varchar(255),
    luu_tru_the varchar(255),
    product_id varchar(255),
    cong_nghe varchar(255),
    zoom_quang_hoc varchar(255),
    loai_lens varchar(255)
);