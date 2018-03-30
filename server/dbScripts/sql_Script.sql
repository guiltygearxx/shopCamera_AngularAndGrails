CREATE TABLE product
(
  id                 VARCHAR(36)    NOT NULL
    PRIMARY KEY,
  version            BIGINT         NOT NULL,
  bao_hanh           VARCHAR(255)   NULL,
  thong_tin_chi_tiet TEXT           NULL,
  is_deleted         BIT            NULL,
  gia_truoc_khi_ha   DECIMAL(19, 2) NULL,
  last_modified_user VARCHAR(255)   NULL,
  image4             VARCHAR(255)   NULL,
  khuyen_mai         TEXT           NULL,
  image2             VARCHAR(255)   NULL,
  image3             VARCHAR(255)   NULL,
  hang_san_xuat      VARCHAR(255)   NULL,
  kho_hang           VARCHAR(255)   NULL,
  image1             VARCHAR(255)   NULL,
  name               VARCHAR(255)   NOT NULL,
  thong_so_ki_thuat  TEXT           NULL,
  gia                DECIMAL(19, 2) NULL,
  category_id        VARCHAR(36)    NOT NULL,
  last_modified_time DATETIME       NULL
);

CREATE TABLE category
(
  id                 VARCHAR(36)  NOT NULL
    PRIMARY KEY,
  version            BIGINT       NOT NULL,
  is_deleted         BIT          NULL,
  code               VARCHAR(255) NOT NULL,
  last_modified_user VARCHAR(255) NULL,
  parent_category_id VARCHAR(255) NULL,
  name               VARCHAR(255) NOT NULL,
  last_modified_time DATETIME     NULL
);

CREATE TABLE order_detail
(
  id         BIGINT AUTO_INCREMENT
    PRIMARY KEY,
  version    BIGINT         NOT NULL,
  order_id   VARCHAR(255)   NOT NULL,
  quantity   INT            NOT NULL,
  product_id VARCHAR(255)   NOT NULL,
  gia        DECIMAL(19, 2) NOT NULL
);


CREATE TABLE news
(
  id                 VARCHAR(36)   NOT NULL
    PRIMARY KEY,
  version            BIGINT        NOT NULL,
  tieu_de            VARCHAR(255)  NULL,
  is_deleted         BIT           NULL,
  ngay_tao           DATE          NULL,
  last_modified_user VARCHAR(255)  NULL,
  noi_dung_chi_tiet  TEXT          NULL,
  hinh_anh           VARCHAR(255)  NULL,
  noi_dung_ngan      VARCHAR(1000) NULL,
  last_modified_time DATETIME      NULL
);

CREATE TABLE solution
(
  id                 VARCHAR(36)   NOT NULL
    PRIMARY KEY,
  version            BIGINT        NOT NULL,
  tieu_de            VARCHAR(1000) NULL,
  is_deleted         BIT           NULL,
  ngay_tao           DATETIME      NULL,
  last_modified_user VARCHAR(255)  NULL,
  noi_dung_chi_tiet  TEXT          NULL,
  hinh_anh           VARCHAR(255)  NULL,
  noi_dung_ngan      TEXT          NULL,
  last_modified_time DATETIME      NULL
);

-- auto-generated definition
CREATE TABLE contact
(
  id                 VARCHAR(36)  NOT NULL
    PRIMARY KEY,
  version            BIGINT       NOT NULL,
  phone              VARCHAR(255) NULL,
  is_deleted         BIT          NULL,
  last_modified_user VARCHAR(255) NULL,
  address            VARCHAR(255) NULL,
  comment            VARCHAR(255) NULL,
  name               VARCHAR(255) NULL,
  email              VARCHAR(255) NULL,
  last_modified_time DATETIME     NULL,
  status             VARCHAR(255) NULL
);


CREATE OR REPLACE VIEW v_product AS

  SELECT
    p.id,
    p.version,
    p.bao_hanh,
    p.is_deleted,
    p.gia_truoc_khi_ha,
    p.last_modified_user,
    p.image4,
    p.image2,
    p.image3,
    p.hang_san_xuat,
    p.kho_hang,
    p.image1,
    p.name,
    p.gia,
    p.category_id,
    p.last_modified_time,
    c.name AS category_name,
    p.phan_tram_giam_gia
  FROM product p
    JOIN category c ON c.id = p.category_id;


CREATE TABLE ORDER_
(
  id                 VARCHAR(36) PRIMARY KEY NOT NULL,
  version            BIGINT(20)              NOT NULL,
  code               VARCHAR(255),
  is_deleted         BIT(1),
  ten_nguoi_mua      DATE,
  last_modified_user VARCHAR(255),
  sdt                TEXT,
  email              VARCHAR(255),
  diaChi             VARCHAR(1000),
  moTa               VARCHAR(1000),
  last_modified_time DATETIME
);
