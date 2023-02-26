-- migrate:up
create table sizes (
  id int not null auto_increment primary key,
  size varchar(30) not null
)

-- migrate:down
drop table sizes;
