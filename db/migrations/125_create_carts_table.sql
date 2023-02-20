-- migrate:up
create table carts(
  id int not null auto_increment primary key, 
  quantity int not null, 
  user_id int not null, 
  product_option_id int not null,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp null on update current_timestamp,
  constraint carts_user_id_fkey foreign key (user_id) references users(id),
  constraint carts_product_option_id_fkey foreign key (product_option_id) references product_options(id)
)

-- migrate:down
drop table carts;
