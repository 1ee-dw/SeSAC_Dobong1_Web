-- Active: 1707101293082@@127.0.0.1@3306@sesac
show tables;

create table visitor (
    id int primary key auto_increment,
    name varchar(10) not null,
    comment mediumtext
);

desc visitor;

insert into visitor(name,comment) values('aa','hello');
insert into visitor(name,comment) values('bb','hi');
insert into visitor values(null,'cc','vonjour');

select * from visitor;

-- 방법 1
create user 'sesac'@'%' identified by '5172';
alter user 'sesac'@'%' identified with mysql_native_password;

-- 방법 2
create user 'sesac'@'%' identified with mysql_native_password by '5172';
drop user 'sesac'@'%';
select * from mysql.user;

grant all privileges on *.* to 'sesac'@'%' with grant option;

flush privileges;