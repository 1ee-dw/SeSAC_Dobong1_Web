/* 
1. for

for(변수 초기화; 조건; 증감) {
      반복할 코드
      -> 초기화한 변수가 조건을 만족할 때까지 증감하며 반복
}

2. while

while (조건) {
      반복할 코드
      -> 조건이 참인 경우 코드가 반복됨
            for문과 달리 값을 제어하는 구문이 없음
            조건이 항상 참이 되게 설정할 경우 무한루프
}

continue; & break;

continue - 해당 조건을 만족할 경우 스킵(다음 반복으로 넘김)
break - 해당 조건을 만족할 경우 반복을 중단하고 스코프 탈출


*/

/* for (let i = 1; i <= 10; i++) {
      console.log(`안녕 ${i}트`);
      console.log('안녕',i);
} */
/* 
for (let i=1; i <= 5; i++) {
      console.log(i)
}

for (let i=1; i < 6; i++) {
      console.log(i)
}

for (let i=0; i < 5; i++) {
      console.log(i+1)
}

for (let i = 5; i >= 0; i--) {
      console.log(i)
}
*/
/* let n = 11;
let sum1=0;
for (let i=1; i<=n; i++) {
      sum1 += i;
} */

/* let fruits=['사과','바나나','포도','오렌지','귤'];
console.log(fruits.length);
for (i = 0; i < fruits.length; i++) {
      console.log(`I like ${fruits[i]}`);
} */

/* let numArr = [99,99,98,85,77];
let sum2 = 0;
for (i = 0; i < numArr.length; i++) {
      sum2 += numArr[i];
}
console.log(sum2); */

/* let n2 = 1;
while(n2 <= 5) {
      console.log(n2);
      n2++;
} */

/* let n2 = 10;
while (n2 >= 5) {
      console.log(n2);
      n2--;
}
 */
/* let n2 = 1;
while (n2 <= 10) {
      if (n2 % 2 === 0) {
            console.log(n2);
      }
      n2++;
}

let n3 = 10;

while (n3 > 0) {
      if (n3 % 2 === 1) {
            console.log(n3);
      }
      n3--;
}

let b = 0;
while (true) {
      console.log(b);
      b++;
      if (b > 10) break;
} */

/* let sum3 = 0;

for (let i = 0; i < 10; i++) {
      if(i%2===0) continue;
      sum3+=i;
}

console.log(sum3); */

/* let n3 = 0;

while(confirm('ㄱ?')) {
      n3++;
      alert(`${n3}번`);
} */

/* for(let i = 1; i <= 10000; i++) {
      if (i % 13 == 0 && i % 2 === 1) {
            console.log(i);
      }
} */

/* let n = prompt('숫자를 입력해주세요');
for(i = 1; i < n; i++) {
      if(i % 13 === 0 && i % 2 === 1) {
            console.log(i);
      }
} */
/* let n = 2;
while ( n <= 9 ) {
      let i = 1;
      while (i <= 9) {
            if ( i < 10 ) console.log(`${n} x ${i} = ${n*i}`);
            i++;
      }
      n++;
      if(n>10) break;
} */

let sum4 = 0;
for (let i = 0; i <= 100; i++) {
      if (i % 2 === 0 || i % 5 === 0) {
            sum4 += i;
      }
}
console.log(sum4);