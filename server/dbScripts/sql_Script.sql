create table product
(
  id varchar(36) not null
    primary key,
  version bigint not null,
  bao_hanh varchar(255) null,
  thong_tin_chi_tiet text null,
  is_deleted bit null,
  gia_truoc_khi_ha decimal(19,2) null,
  last_modified_user varchar(255) null,
  image4 varchar(255) null,
  khuyen_mai text null,
  image2 varchar(255) null,
  image3 varchar(255) null,
  hang_san_xuat varchar(255) null,
  kho_hang varchar(255) null,
  image1 varchar(255) null,
  name varchar(255) not null,
  thong_so_ki_thuat text null,
  gia decimal(19,2) null,
  category_id varchar(36) not null,
  last_modified_time datetime null
)
;

create table category
(
  id varchar(36) not null
    primary key,
  version bigint not null,
  is_deleted bit null,
  code varchar(255) not null,
  last_modified_user varchar(255) null,
  parent_category_id varchar(255) null,
  name varchar(255) not null,
  last_modified_time datetime null
)
;

create table order_detail
(
  id bigint auto_increment
  primary key,
  version bigint not null,
  order_id varchar(255) not null,
  quantity int not null,
  product_id varchar(255) not null,
  gia decimal(19,2) not null
)
;


create table news
(
  id varchar(36) not null
    primary key,
  version bigint not null,
  tieu_de varchar(255) null,
  is_deleted bit null,
  ngay_tao date null,
  last_modified_user varchar(255) null,
  noi_dung_chi_tiet text null,
  hinh_anh varchar(255) null,
  noi_dung_ngan varchar(1000) null,
  last_modified_time datetime null
)
;

create table solution
(
  id varchar(36) not null
    primary key,
  version bigint not null,
  tieu_de varchar(1000) null,
  is_deleted bit null,
  ngay_tao datetime null,
  last_modified_user varchar(255) null,
  noi_dung_chi_tiet text null,
  hinh_anh varchar(255) null,
  noi_dung_ngan text null,
  last_modified_time datetime null
)
;

