-- migrate:up
create table products(
  id int not null auto_increment primary key,
  name varchar(100) not null, 
  draw tinyint not null, 
  category_id int not null, 
  detail_id int not null,
  icon_id int not null,
  constraint products_category_id_fkey foreign key (category_id) references categories(id),
  constraint products_detail_id_fkey foreign key (detail_id) references details(id),
  constraint products_icon_id_fkey foreign key (icon_id) references icons(id)

)

-- migrate:down
drop table products;
