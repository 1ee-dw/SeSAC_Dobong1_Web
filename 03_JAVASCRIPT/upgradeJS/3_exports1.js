/* 
    모듈 만들기
    exports라는 키워드를 사용하여 내보내기
    한번에 내보내기
*/

const colors = ['red','blue','green'];

const sayHi=()=> { console.log('Hi') };

function sayName(name) {
    console.log(`my name is ${name}`);
    sayHi();
};

// sayName('ㅇㄷㅇ')
module.exports = {
    colors,
    sayName
}