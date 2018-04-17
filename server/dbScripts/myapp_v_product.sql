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
    p.phan_tram_giam_gia,
    p.thong_tin_mo_rong,
    p.hinh_anh_truc_quan,
    p.thong_tin_bo_sung
  FROM product p
    JOIN category c ON c.id = p.category_id;

