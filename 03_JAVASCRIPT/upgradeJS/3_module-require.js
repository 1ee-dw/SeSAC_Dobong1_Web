// 모듈을 호출해 사용
// 가져오고 싶은 함수/ 변수만 구조분해할당을 이용해 따로 가져올 수 있음
const {sayName} = require('./3_exports1.js');
// 한 번에 가져옴(객체)
const exports1 = require('./3_exports1.js');
// sayName('대원');
console.log(exports1);
exports1.sayName('dd');

const {sayHi2, sayHi3 }= require(`./3_exports2.js`);

sayHi2();
sayHi3(`안녕하세요`);