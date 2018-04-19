alter table attribute
  add index idx_attribute_code (code);

alter table attribute_value
  add index idx_attribute_value_attribute_id (attribute_id),
  add index idx_attribute_value_reference_id (reference_id);

alter table authentication_token
  add index idx_authentication_token_token_value (token_value);

alter table category
  add index idx_category_parent_category_id (parent_category_id),
  add index idx_category_parent_code (code);

alter table order_
  add index idx_order_code (code);

alter table order_detail
  add index idx_order_detail_product_id (product_id),
  add index idx_order_detail_order_id (order_id);

alter table product
  add index idx_product_category_id (category_id);

alter table user
  add index idx_user_username (username);

