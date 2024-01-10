// var : 재선언 & 재할당 모두 가능
var name = '홍길동';
var name = '고길동';
console.log(name);

// let : 재선언 불가. But, 재할당 가능(초기화 필수 X)
let c = 5;
console.log(c); // 5
// let c = 7; --> 선언시 오류 발생
c= 7; // 재할당
console.log(c); // 7

//const : 재선언 & 재할당 불가, 초기화 필수
//const b; --> 값이 할당되지 않아(= 초기화 작업이 수행되지 않아) 오류 발생
const b = 10;
console.log(b);
// b = 11; --> 재할당 불가하기에 오류 발생

let q1 = 3;
q1 - 3; // 동작하지 않음
console.log(q1); // 3
q1 = q1 - 3; // q1의 값을 q1 - 3 으로 재할당 하겠다 선언.
console.log(q1); // 0

/* 비교 연산자
      1. == / != --> value만 비교하는 비교연산자
                     문자형과 숫자도 값이 같으면 true 출력

      2. === / !== --> value & datatype 까지 비교
*/

console.log(`== 연산자.`)
console.log(1 == 1); // true
console.log(1 == 2); // false
console.log(1 != 2); // true
console.log(1 != 1); // false
console.log('1' == 1); // true
console.log('1' != 1); // false

console.log('' == 0);
console.log('' != 0);

console.log(`=== 연산자.`)
console.log('1' === 1); // false
console.log(null === undefined); // false

// 크기 비교

console.log(2>1); // true
console.log(1<=1); // true

// 산술 연산자
console.log(1+2)
console.log(9-2)
console.log(4*3)
console.log(8/2)
console.log(9%2) // 나머지
console.log(10**2) // 거듭제곱

// 논리 연산
console.log(!true)
console.log(!!false)

// & 연산자(AND 연산자) --> false 일 확률이 높은 조건을 앞쪽에 배치
console.log(true && true)
console.log(true && false)
// || 연산자(OR 연산자) --> true 일 확률이 높은 조건을 앞쪽에 배치
console.log(false || false)
console.log(false || false || false || false || false || true)

// 문자와 변수를 같이 쓰는 방법
const str1 = 'lee';
const str2 = 'seoul';
//1. + 연산자 이용
console.log(str1 + "는 " + str2 + "에 삽니다.");
// 2. , 이용
console.log(str1, "는", str2, "에 삽니다.");
// 템플릿 리터럴 사용
console.log(`${str1}는 ${str2}에 삽니다.`);
const str3 = `${str1}는 ${str2}에 삽니다.`;
console.log(str3);