CREATE VIEW V_PRODUCT AS
  SELECT
    id,
    name,
    gia,
    gia_truoc_khi_ha,
    image1
  FROM product
  WHERE is_deleted = 0
/
