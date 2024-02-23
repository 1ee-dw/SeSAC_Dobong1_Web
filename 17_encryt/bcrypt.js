const bcrypt = require('bcrypt');       // 강력한 암호화를 필요로 할 때 사용

// 솔트의 반복 횟수 정의 (= 해시함수의 반복)
// 숫자가 크면 안전하나 성능이 저하됨.
const saltRounds = 10;

// 회원가입 > 해시 값 생성
function hashPW(pw) {
    // hashSync(비밀번호, 솔트라운드) // 암호화된 문자열(String) 반환
    return bcrypt.hashSync(pw, saltRounds);
};

// 로그인 > 해시값 일치 확인인
function comparePW(inputPW, hashedPW){
    // compareSync(원본 비밀번호, hashed 비밀번호)
    return bcrypt.compareSync(inputPW,hashedPW);    // true or false 반환
};

const originalPW = '12345';
const hashedPW = hashPW(originalPW);
console.log('암호화 된 비밀번호:',hashedPW);

const isMatch = comparePW(originalPW, hashedPW);
const isNotMatch = comparePW('1234', hashedPW);

console.log('비밀번호 일치? >>', isMatch);
console.log('비밀번호 일치? >>', isNotMatch);

