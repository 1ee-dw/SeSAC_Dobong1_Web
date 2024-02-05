show databases;
/*
DDL(Data Definition Language) - create(생성), alter(수정), drop(삭제1), truncate(삭제2)
*/
drop database sesac;
drop database dobong;
create database sesac default character set utf8 collate utf8_general_ci;
-- 기본 문자 set을 utf8로 설정 정렬 방식은 utf8_general_ci 로 설정
create database dobong default character set utf8mb4 collate utf8mb4_unicode_ci;
-- 기본 문자 set을 utf8mb4 로 설정 정렬 방식은 utf8mb4_unicode_ci 로 설정
/* 
    utf8mb4는 utf8보다 더 많은 문자를 지원함(이모지 등)
    이모지를 저장하는 db는 전자를 아니라면 후자를 사용
 */ 
use sesac;
create table products(
    id int primary key auto_increment,
    name varchar(50) not null,
    model_number varchar(15) not null,
    series varchar(30) not null
);
show tables;
desc products; -- desc: 테이블에 어떠한 컬럼들이 있는지 조회(테이블 구조 파악)
-- 테이블 삭제 명령어
drop table products; -- 테이블 전체 삭제
truncate table products; -- 테이블의 컬럼값만 삭제

-- 테이블 수정 명령어
alter table products add new_column varchar(20);
alter table products modify column new_column int;
alter table products drop column new_column;
/* 
DML(Data Management Language) - insert(입력) select(조회) update(수정)
 */
create table user(
    id int primary key auto_increment,
    name varchar(10) not null,
    age int not null,
    addr varchar(100)
);

show tables;

drop table user;
insert into user(name,age,address) values('이대원',28,'서울특별시 노원구 상계동');
insert into user(name,age,address) values('유현승',27,'부산광역시 부산진구 전포동');
insert into user(name,age,address) values('최윤도',26,'인천광역시 남동구 도림동');
insert into user(name,age,address) values('조문영',27,'서울특별시 노원구 상계동');
insert into user(name,age,address) values('김윤우',28,'서울특별시 관악구 신림동');
insert into user(name,age,address) values('이대원',28,'서울특별시 노원구 상계동');

update user set name='임주엽', address='경상남도 양산시 동면', age='33' where id=6;
select * from user;
truncate table user;

insert into user (name, age, addr) VALUES('김민정',20,'서울특별시 마포구');
insert into user (name, age, addr) VALUES('이한이',30,'서울특별시 강남구');
insert into user (name, age, addr) VALUES('이지은',22,'대구광역시 동구');
insert into user (name, age, addr) VALUES('윤세희',25,'부산광역시 관악구');
insert into user (name, age, addr) VALUES('박수진',19,'서울특별시 노원구');
insert into user (name, age, addr) VALUES('박찬희',23,'서울특별시 강서구');
insert into user (name, age, addr) VALUES('이지수',32,'부산광역시 동구');
insert into user (name, age, addr) VALUES('최솔희',37,'강원도 강릉시');
insert into user (name, age, addr) VALUES('한소희',26,'충청남도 공주시');
insert into user (name, age, addr) VALUES('권희수',40,'강원도 속초시');
insert into user (name, age, addr) VALUES('김민지',22,'서울특별시 중구');

select * from user;
select name from user;
select * from user where age >= 25;
select name from user where id=6;
select id, age from user where name = '이지은';
select * from user where age >= 25 order by age;
select name, age from user order by age desc;
select * from user where name like '_지%';
select * from user where name like '박%';
select * from user where addr like '서울%';
select * from user where addr like '%광역시%';
select name from user where name like '%희%' order by age desc;
select * from user limit 5;
select * from user where addr like '서울%' order by age desc limit 2;
select * from user where age between 24 and 32;
select * from user where age in(26,23,22);

insert into user(name,age) values ('서현승', 28);

select * from user where addr is null;
select name,addr from user where addr is not null;
select * from user where addr is not null and age > 25;
select * from user where addr is not null or age > 25;
select name from user where name like '이%' and age = 22;

select distinct age from user order by age;
select distinct age, count(age) from user group by age order by age;

delete from user where name like '이%';

select * from user;