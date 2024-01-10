/* Date
- 현재의 날짜, 시간을 반환
- 원하는 값으로 초기화 가능 */
let now = new Date();
console.log(now);

// new Date - 날짜 설정 가능
console.log(new Date('oct 23, 2023 00:00:00'));
console.log(new Date(2020,2,9));

console.log(now.getFullYear(),'년');
console.log(now.getMonth()+1,'월'); // 0~11
console.log(now.getDate(),'일');
console.log(now.getHours(),'시'); //
console.log(now.getMinutes(),'분');
console.log(now.getSeconds(),'초');
console.log(now.getMilliseconds(),'밀리초');
console.log(now.getDay(),'요일') // 0~6 (0 일 6 토)

// Math

console.log(Math.PI); // 원주율
console.log(Math.E); // 자연로그 e
console.log(Math.SQRT2); // 루트 2

// 메소드

console.log(Math.min(485374864,453453273,487545243,453777856,465459432));
console.log(Math.max(485374864,453453273,487545243,453777856,465459432));
console.log(Math.round(3.5124)); // 반올림
console.log(Math.ceil(3.722)); // 올림
console.log(Math.floor(3.7123)); // 내림

// random - 랜덤 출력

console.log(Math.random()); // 0에서 1까지 랜덤한 수 출력(소수 O)
console.log(Math.round(Math.random()*3)); // 0~3 랜덤 수 출력(소수 X)

// object 관련

const areaNum = {
      Seoul:'02',
      Gyeongi:'031',
      Incheon:'032',
      Busan:'051',
      Ulsan:'052'
}

console.log(areaNum);

// 객체 안의 key와 value를 배열로 반환하는 메소드

const area = Object.keys(areaNum);
console.log(area);
const num = Object.values(areaNum);
console.log(num);


// let now = new Date();
console.log(now);
if( now.getDay() === 0 || now.getDay() === 6) {
      console.log('주말');
} else console.log('평일');

switch (now.getDay()) {
      case 0:
      case 6:
            console.log('주말');
            break;
      default:
            console.log('평일');
            break;
}

now.getDay() === 0 || now.getDay() === 6 ? console.log('주말') : console.log('평일');

let jebi = Math.round(Math.random()*10)
console.log(jebi);