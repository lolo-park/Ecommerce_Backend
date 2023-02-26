-- migrate:up
create table colors(
  id int not null auto_increment primary key,
  color varchar(30) not null
)

-- migrate:down
drop table colors;
