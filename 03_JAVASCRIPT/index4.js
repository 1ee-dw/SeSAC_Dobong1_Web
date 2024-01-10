/*
함수
- 어떤 작업을 수행하기 위해 독립적으로 설계된 코드의 집합
- 함수를 정의(=선언)하고 호출(=사용)
- 선언 방식 3가지
      1. 함수 선언문
            - 선언 후 어디에서나 사용 가능(선언 위쪽에도 사용 가눙)
      2. 함수 표현식
            - 선언 이후에만 사용 가능(선언 아래에만 사용 가능)
      3. 화살표 함수
            - 함수 표현식과 동일(모양만 조금 다름)
*/

// 함수 선언문
helloworld(); // 선언문 위에 호출 되어도 오류가 나지 않음

function helloworld() {
      console.log(`Hello World!`);
}

helloworld();

// 함수 표현식
// helloworld2(); --> 선언 전에 호출이 되어 오류 발생
const helloworld2 = function(){
      console.log(`Hello World!!`);
}

helloworld2();

//화살표 함수

// helloworld3(); --> 선언 전에 호출이 되어 오류 발생
const helloworld3 = () => {
      console.log(`Hello World!!!`);
}

helloworld3();

// 함수에 parameter 전달

function add(num1, num2) {
      console.log(num1 + num2);
}

add(5,7)
console.log(add(5,7))


/* return
- 반환 값으로 함수 내부 코드의 최종 결과값을 가지고 있는 것
- 값을 보관 & 저장
- return을 만나면 함수 실행 중단(return 이후 코드 작동 X)
*/
const add2 = function(num1,num2) {
      return num1 + num2;
}

console.log(add2(3,5));

const result1 = add2(3,5);
console.log(result1);
const result2 = add(3,5);
console.log(result2);

const add3 = (num1,num2) => {
      return num1 + num2;
}

const result3 = add3(8,19);
console.log(result3);


function multifly(num1, num2) {
      return num1 * num2;
}
console.log(multifly(98,72));

const square = function(num1) {
      console.log(num1**2);
}
square(4)