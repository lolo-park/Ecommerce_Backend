-- migrate:up
create table categories (
  id int not null auto_increment primary key,
  name varchar(50) not null
)

-- migrate:down
drop table categories