-- migrate:up
create table product_option_images(
  id int not null auto_increment primary key,
  image_url varchar(1000) not null, 
  product_option_id int not null, 
  constraint product_option_images_product_option_id_fkey foreign key (product_option_id) references product_options(id)
)

-- migrate:down
drop table product_option_images;

