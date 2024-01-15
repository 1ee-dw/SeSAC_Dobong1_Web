/*
문제
- [ ] 아래 리스트는 오늘의 투두 리스트입니다. 그런데 완료한 일과 해야할 일 표시가 뒤바뀌었습니다. ("점심 먹기"와 "커피 마시기" 두 가지 일만 현재 완료한 상태입니다.)
- [ ] 완료한 일은 회색 글씨에 취소선 표시가 되어있고, 해야할 일은 굵은 글씨에 노란 배경이 더해져 있어야 합니다.
- [ ] 완료한 일은 done 클래스를 갖고, 해야할 일은 todo 클래스를 갖도록 코드를 변경해주세요.
- [ ] [경고] html 코드 변경 없이 js 코드로만 변경해야 합니다. script 태그의 내부 코드를 추가해주세요.
*/

let list = document.querySelectorAll('li')

// for (i = 0; i < list.length; i++) { // 지역변수 i 선언; i가 배열 list의 크기보다 작을 때까지만 i가 1씩 증가하는 형태로 반복;
//       list[i].classList.toggle('todo'); // 배열 list의 i번째 인덱스의 클래스를 수정
//       list[i].classList.toggle('done');
// }

// for (i of list) { // 'list의 i번째 인덱스'를 지역변수로 선언;
//       i.classList.toggle('todo');      // i(list의 i번째 인덱스)의 클래스를 수정
//       i.classList.toggle('done');
// }

// list.forEach(function(check){ // for~of와 동일
//       check.classList.toggle('done');
//       check.classList.toggle('todo');
// });

// list.forEach(check => {
//       check.classList.toggle('done');
//       check.classList.toggle('todo');
// })