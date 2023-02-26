-- migrate:up
create table types (
  id int not null auto_increment primary key,
  gender varchar(100) not null,
  kid_types varchar(100) null
)

-- migrate:down
drop table types;

