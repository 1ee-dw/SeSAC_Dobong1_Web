/* 문자열에서 쓸 수 있는 속성/메소드
- length
- toUpperCase,toLowerCase,trim,indexOf,slice,
  replace,replaceAll,repeat,split */

// let str1 = "Strawberry Moon";
// let str2 = "            Strawberry Moon";

// // 문자열 인덱싱

// console.log(str1[5]+str1[12]+str1[14]+str1[6]);

// // length - 문자열 길이 반환

// console.log('str1 문자열 길이',str1.length); // 15
// console.log('str2 문자열 길이', str2.length); // 20, 공백도 문자열 길이에 포함됨

// // toUpperCase, toLowerCase - 문자열 대소문자 변환

// console.log(str1.toUpperCase()); // 문자열 전체 대문자로 변경

// // trim - 문자열 앞뒤의 공백 제거

// console.log(str2); // 공백 o
// console.log(str2.trim()); // 앞뒤 공백 제거
// console.log(str2.trim().length); // 앞뒤 공백 제거된 문자열 길이 반환

// // indexOf - 문자열의 위치 반환

// let mango = 'AppleMango~'
// console.log(mango.indexOf('Apple')); // 0
// console.log(mango.indexOf('~')); // 10
// console.log(mango.indexOf('q')); // -1 문자열에 포함되지 않은 문자열이 매개변수로 들어갈 경우 -1 반환

// // slice(n) - n번째 위치부터의 문자열 반환
// // slice (n1, n2) - n1부터 n2 전까지의 문자열 반환

// console.log(mango.slice(5));
// console.log(mango.slice(4,6));
// console.log(mango.slice(-3));

// // replace('abc','def') - 문자열 abc를 def로 바꿈
// // replaceAll('a','d') - 문자열 내의 a를 모두 d로 바꿈

// let msg = "Wow~ It's so amazing~";
// console.log(msg.replace('Wow','Hey'));
// console.log(msg.replaceAll('a','A'));

// let date = '2024.01.10';
// console.log(date);
// date = date.replaceAll('.','-');
// console.log(date);

// console.log('abc'.repeat(10));

// console.log(date.split('-'));
// console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')
// /* 배열 관련 메소드
// - push, pop, unshift, shift
//   , indexOf, join, reverse
// - includes, map, forEach, find, filter
// - for~of */

// let arr1 = [1,2,3,4,5];
// console.log(arr1)
// let arr2 = ['cow','pig','snake','dog','cat'];
// arr1[5] = 6;
// console.log(arr1);
// arr1.push(6);
// arr1.push(7);
// arr1.push(10);
// console.log(arr1);
// arr1.pop();
// arr1.pop();
// arr1.pop();
// console.log(arr1);

// arr2.unshift('fish');
// console.log(arr2);
// arr2.shift('fish');
// console.log(arr2);

// /* includes('배열의 요소')
// - 파라미터로 들어간 값이 배열에 있으면 true 없으면 false */

// console.log(arr2.includes('fish'));
// console.log(arr2.includes('cat'));

// // indexOf - 문자열의 indexOf와 동일(해당 문자열 위치 반환)

// console.log(arr2.indexOf('dog'));

// // reverse - 배열의 순서를 뒤집음

// arr1.reverse();
// console.log(arr1)

// // join - 문자열의 split과 반대(배열 -> 문자열 변경)

// str1 = str1.split('');
// console.log(str1);
// str1 = str1.join('');
// console.log(str1);

// // 반복문 - for~of & forEach[]

// let arr3 = [5,6,7,8,9];
// let alphabets = ['a','b','c','d','e','f'];

// for (let i = 0; i < arr3.length; i++) {
//       console.log(arr3[i]);
// }
// console.log('----------');
// for (let i of arr3) { // arr3 배열의 요소인 i를 선언
//       console.log(i);
// }
// console.log('----------');
// for (let alphabet of alphabets) {
//       console.log(alphabet);
// }
// console.log('----------');

// /* 배열.forEach(function(elements, index, array)) 형태
//                      elements 필수 index,array 선택 */

// arr3.forEach(function(element,index,arr){
//       console.log(element,index,arr)
// });

// //filter
// let three = arr2.filter(function(word) {
//       return word.length === 3;
// })
// console.log(three)
// let three2 = arr2.filter((word) => {
//       return word.length === 3;
// })
// console.log(three2)
// let three3 = arr2.filter((word) => word.length === 3)
// console.log(three3)

// let arr4 = [1,23,4,567,89];
// let multiArr = arr4.map(function(element) {
//       return element*3;
// })
// console.log(multiArr);

// //find - 해당 배열 내에서 조건을 만족하는 첫번째 요소 반환

// let findResult = multiArr.find(function(element){
//       return element >= 100;
// })
// console.log(findResult);

let arr1 = [];
for (i=1; i<=100; i++) {
      arr1.push(i);
}
console.log(arr1);

// for

let sum1 = 0;
for (i = 0; i < arr1.length; i++) {
      sum1 += arr1[i];
}
console.log(sum1)

// for ~ of

let sum2 = 0;
for (i of arr1) {
      sum2 += i;
}
console.log(sum2);

// forEach

let sum3 = 0;
arr1.forEach(function(element) {
      sum3 +=element;
})
console.log(sum3);

/* 
let three = arr2.filter(function(word) {
      return word.length === 3;
})

let three3 = arr2.filter((word) => word.length === 3) */

let fruits1 = ['사과','딸기','파인애플','수박','참외','오렌지','자두','망고'];
let fruits2 = ['수박','사과','참외','오렌지','파인애플','망고'];

let same = fruits1.filter(function(element) {
      return fruits2.includes(element);
})
console.log(same);

let diff = fruits1.filter(function(element) {
      return fruits1.includes(element) !== fruits2.includes(element);
})
console.log(diff);