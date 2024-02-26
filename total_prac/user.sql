-- Active: 1707101293082@@127.0.0.1@3306@sesac
use sesac;

show tables;

drop table user;

create table user (
    id int primary key auto_increment,
    pw varchar(255) not null,
    name varchar(15) not null,
    userid varchar(15) not null
);

desc user;
select * from user;