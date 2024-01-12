/* 요소 선택
1. getElementById : id 속성값으로 요소를 선택(요소 하나)
2. getElementsByClassName : class 속성값으로 요소를 선택
3. getElementsByTagName : 태그 이름으로 요소 선택
4. getElementsByName : name 속성값으로 요소 선택 (NodeList로 반환)
5. querySelector : 선택자를 이용해 요소를 선택, css 선택자와 동일(클래스: . / ID: # ...)
*/

/* 태그의 내부 내용을 변경
- innerText: 문자열 추가 & 공백 제거
- innerHTML: html 요소 추가
- textContent: 문자열 추가 & 공백 반환
*/

/* HTMLCollection vs NodeList

      HTMLCollection
      - 태그 요소만 포함
      - 자식 요소 노드에 접근할 때, 인덱스 방식과
       namedItem 메소드 방식을 사용할 수 있다.
      - 동적(DOM을 다루며 새로운 요소가 추가됐을 때
                  추가된 요소도 가져올 수 있음)
      - 실제 배열은 아니나 배열과 유사한 객체임

      NodeList
      - 태그와 텍스트 노드 등을 모두 포함
      - 인덱스로만 접근 가능하다.
      - 정적(DOM을 다루며 새로운 요소가 추가됐을 때
                  추가된 요소를 가져올 수 없음)
      - 배열이 맞음. nodelist만의 메소드가 있음(forEach 등)
*/

let dom1 = document.getElementById('green');
console.log(dom1);

let dom2 = document.getElementsByClassName('box');
console.log(dom2);

let dom3 = document.getElementsByTagName('div');
console.log(dom3);

let dom4 = document.getElementsByName('userName');
console.log(dom4)

let dom5 = document.querySelector('#red');
console.log('dom5 :', dom5)

let dom6 = document.querySelectorAll('div');
console.log(dom6);

/* --------------------------------------------------- */

let two = document.getElementById('two');
two.innerHTML = '<strong>강조</strong>';
two.textContent = '     textContent<strong>강조</strong>    @#';
two.innerText = '     textContent<strong>강조</strong>    @#';
console.log(two.innerText);
console.log(two.textContent);

let parent = document.getElementById('parent');
let parentChildren = parent.children;
let parentChildNodes = parent.childNodes;
console.log('children', parentChildren);
console.log('childNodes:', parentChildNodes);

let child1 = document.createElement('div');
child1.innerText='네번째 텍스트'
parent.appendChild(child1);