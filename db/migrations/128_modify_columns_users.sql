-- migrate:up
alter table users modify password binary(60) null;

alter table users add kakao_id bigint null;

alter table users add nickname varchar(50) null;

alter table users add profile_image varchar(100) null;

alter table users add point decimal(10,2) DEFAULT 1000000.00 not null;

-- migrate:down
