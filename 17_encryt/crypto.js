const crypto = require('crypto');       // nodejs 내장 모듈
/* 
1. crypto를 이용한 단방향 암호화 구현 - 복호화 불가
- createHash(알고리즘)
- pbkdf2Sync(비밀번호, salt, 반복횟수, 키의 길이, 알고리즘)
    1-1 createHash(알고리즘).update(암호화할 값).digest(인코딩 방식)
    - 인코딩 방식으론 base64, hex, ascii, binary 등이 있음
    1-2 pbkdf2Sync(암호화할 값, salt, 반복횟수, 키 길이, 알고리즘).toString(인코딩방식);
    - salt를 이용하여 해싱하는 함수
    - salt는 사용자가 지정하는 것이 아닌 crypto 모듈에서 제공하는 randomBytes() 를 이용 -> crypto.randomBytes(바이트 수)
    - randomBytes()와 pbkdf2Sync() 는 버퍼 형식의 데이터를 반환함
*/
// 비밀번호를 받아 암호화 시켜주는 함수
const createHashPW = function(pw) {
    return crypto.createHash("sha512").update(pw).digest('base64');
};

console.log('1st hasing: ', createHashPW('1234'));
console.log('2nd hasing: ', createHashPW('1234'));
console.log('3rd hasing: ', createHashPW('1234'));

console.log('another value: ', createHashPW('1234.'));

/* const str = 'hello!!';
const buffer = Buffer.from(str);
console.log(buffer); */

// 회원가입 과정 - 새로운 hash & salt를 만드는 과정 --> db에 hash와 salt를 저장해야함
function saltAndHashPW(pw) {
    const salt = crypto.randomBytes(16).toString('base64');
    const iterations = 100;              // 반복 횟수
    const keylength = 64;                // 키의 길이
    const algorithm = 'sha512';

    const hash = crypto.pbkdf2Sync(pw,salt,iterations,keylength,algorithm).toString('base64');

    return { hash, salt };
}

console.log('1st hasing: ', saltAndHashPW('1234'));
console.log('2nd hasing: ', saltAndHashPW('1234'));
console.log('3rd hasing: ', saltAndHashPW('1234'));
// salt값이 다 다르기 때문에 모두 다른 값 출력


// login 과정 - db의 hash, salt를 이용, inputPW의 hash값 검증
function checkPW(inputPW, savedSalt, savedHash) {
    const iterations = 100;              // 회원가입 시(saltAndPW) 설정한 반복횟수와 같아야함
    const keylength = 64;                // 회원가입 시(saltAndPW) 설정한 키의 길이와 같아야함
    const algorithm = 'sha512';          // 회원가입 시(saltAndPW) 설정한 알고리즘과 같아야함

    const hash = crypto.pbkdf2Sync(inputPW,savedSalt,iterations,keylength,algorithm).toString('base64');    // 인코딩 방식도 회원가입시 설정한 값과 같아야함
    console.log('input hash',hash);
    return savedHash === hash;
}

console.log('====================================================================');

const registerPW = 'qwer1234';

// 회원가입
const { salt: registerSalt, hash: registerHash } = saltAndHashPW(registerPW);

console.log('암호화에 쓰인 salt: ',registerSalt);
console.log('암호화 된 hash: ', registerHash);

// 로그인 
const isMatch = checkPW('qwer1234',registerSalt,registerHash);
const isNotMatch = checkPW('qwer12345',registerSalt,registerHash);

console.log('비밀번호 일치? >> ', isMatch);
console.log('비밀번호 일치? >> ', isNotMatch);

/* 
2. 양방향 암호화: 복호화 가능
createCiperiv() initialized vector
*/
console.log('==================================양방향 암호화==================================');

const key = crypto.randomBytes(32);         // buffer 형태
const iv = crypto.randomBytes(16);          // buffer 형태

const algorithm = 'aes-256-cbc';

const originalMessage = 'Hello World!!'

// 암호화
function encrypt(text) {
    // 암호화 객체 생성(createCipheriv)-> 암호화 작업(cipher.update) -> 최종 결과 생성(cipher.final)
    // const cipher = crypto.createCipheriv(알고리즘, 키, iv);
    const cipher = crypto.createCipheriv(algorithm,key,iv);
    // cipher.update(암호화할 데이터, 입력 인코딩, 출력 인코딩);
    let encrypted = cipher.update(text,'utf8','base64');
    encrypted += cipher.final('base64');

    return encrypted;
};

// console.log(encrypt(originalMessage));
// 복호화
function decrypt(encryptedText) {
    const decipher = crypto.createDecipheriv(algorithm,key,iv);
    let decrypted = decipher.update(encryptedText,'base64','utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
};

const encryptedMessage = encrypt(originalMessage);
console.log('암호화 됨', encryptedMessage);

const decryptedMessage = decrypt(encryptedMessage);
console.log('복호화 됨', decryptedMessage);
