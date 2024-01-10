/*if문

if(5>3) {
      console.log('5가 3보다 큼');
} */
// 조건문이 한줄일 경우 중괄호 생략 가능
/* 
let number = prompt('숫자를 입력해주세요.');
number = Number(number);

console.log(typeof number);
 */
/* if ~ else

if(number > 10) {
      console.log('10보다 큼');
} else {
      alert('10보다 작거나 같음');
} */

let number = 77;

if(number > 10) {
      console.log('10보다 큼');
} else if ( number === 10 ) {
      console.log('10');
} else {
      console.log('10보다 작음');
}

let age = 28;

if (age < 20 && age >= 17) {
      console.log('고딩');
} else if (age < 17 && age >= 14) {
      console.log('중딩');
} else if (age < 14 && age >=8) {
      console.log('초딩');
} else if (age < 8 && age >=0) {
      console.log('유아');
} else { console.log('성인'); }

// switch ~ case
// JS에선 조건이 많은 경우 switch가 if 보다 성능이 조금 더 좋음
let a = 4;
switch(a) {
      case 3:
            console.log('3');
            break;
      case 4:
            console.log('4');
            break;
      case 5:
            console.log('5');
            break;
      default:
            console.log('뭐임?');
            break;
}

let score = 76;

if (score >= 100 && score >= 90) {
      console.log('A');
} else if (score < 90 && score >= 80) {
      console.log('B');
} else if ( score < 80 && score >= 70) {
      console.log('C');
} else if ( score < 70 && score >=60 ) {
      console.log('D');
} else {
      console.log('F');
}

switch (parseInt(score/10)) {
      case 10:
      case 9:
            console.log('A');
            break;
      case 8:
            console.log('B');
            break;
      case 7:
            console.log('C');
            break;
      case 6:
            console.log('D');
            break;
      default:
            console.log('F');
            break;
}

let num=5681845341683;
if(num%2===1) {
      console.log('홀수');
} else { console.log('짝수'); }

num%2===1 ? console.log('홀수') : console.log('짝수');

const now = new Date().getHours();
// now = Number(now);
now-12<0 ? console.log('오전') : console.log('오후');