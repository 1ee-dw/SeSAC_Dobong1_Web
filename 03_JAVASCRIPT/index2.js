/*
1. string (문자열)
      - 텍스트 정보
      - "", '', `` 안에 적힌 숫자, 특수문자도 문자열로 취급
*/

let mname=`이대원`;
let number1=`128`
console.log(mname);
console.log(number1);

// 2. 숫자

let number2=128;
let opacity=.7;
console.log(number2);
console.log(opacity);

//NaN -> Not a Number

// 3. boolean -> true or false

let checked = true;
let isShow = false;
console.log(checked, isShow);

// 4. undefined & null -> 값과 type 둘다 없음

let undef;
console.log(undef);

let empty=null;
console.log(empty);

// 5. array(배열)

let fruits = [`orange`, `apple`, `banana`, `cherry`];
console.log(fruits[2]);
console.log(fruits[0]);

let data = [22, `22`, false, null, undefined];
console.log(data[0]);
console.log(data[1]);

// 2차원 배열

const korean=[
      [`가`, `나`, `다`],
      [`라`, `마`, `바`]
];

console.log(korean[0]);
console.log(korean[0][1]);

const letters = [
	["사", "스", "자", "크"],
	["진", "안", "리", "이"],
	["가", "수", "림", "나"],
	["아", "으", "차", "운"],
];

console.log(letters[3][0],letters[1][3],letters[0][1],letters[0][3],letters[2][2]);
console.log(letters[3][0]);
console.log(letters[1][3]);
console.log(letters[0][1]);
console.log(letters[0][3]);
console.log(letters[2][2]);

const numb = [
      [
            [1,2,3],
            [4,5,6]
      ], [
            [7,8,9],
            [10,11,12]      
      ]
]

console.log(numb[1][0][1]);

/* object
배열에는 순서가 있음 object는 key - value 형태로 저장
저장된 데이터에 접근할 때 key 이름을 이용하여 접근함
key value 저장 / { key:value } / 호출 -> console.log(key.keyname)
*/
let cat = {
      name:`나비`,
      age:2,
      isCute:true,
      mew: function(){return 'meow'}
}

// 점 표기법
console.log(cat.name);
console.log(cat.age);
console.log(cat.isCute);
console.log(cat.mew());

cat.like = `tuna`;
cat.age = 3;
console.log(cat);

// 대괄호 표기법
let dog = {
      name:'개',
      age:8,
      isPoodle:false,
      sibling:['max','lucy']
};

console.log(dog['name']);
console.log(dog['age']);
console.log(dog['isPoodle']);
console.log(dog['sibling'][1]);

/* let me = {
      name:'이대원',
      age:28,
      gender: 'male'
} */

// typeof : 문자형을 알려주는 명령어, 배열과 object, null -> object로 표시됨
/* console.log(typeof 4213);
console.log(typeof `문자`);
console.log(typeof undefined);
console.log(typeof false);
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});
console.log(typeof NaN);

형변환
      문자형 -> 숫자 :Number(문자형)
      숫자 -> 문자형 : String(숫자)


let mathScore = prompt("수학 점수를 입력 하세요");
let engScore = prompt("영어 점수를 입력 하세요");
mathScore = number(mathScore);
engScore = number(engScore);
let avg = (mathScore + engScore) / 2;
console.log(avg);

console.log(typeof engScore);
 */

console.log(`-----------------------`);

let str1 = true;
let str2 = 123;
let str3 = null;

console.log(String(str1))
console.log(String(str2))
console.log(String(str3))
console.log(typeof String(str1))
console.log(typeof String(str2))
console.log(typeof String(str3))

// 2. ? >> number
let n1 = true;
let n2 = false;
let n3 = 123;
let n4 = '123.9';

console.log(Number(n1)); // 1
console.log(Number(n2)); // 0
console.log(Number(n3)); // 123
console.log(Number(n4)); // 123.9 --> 소수형
console.log(typeof Number(n4));
console.log(parseInt(n4)); // 123 --> 소수점을 버리고 정수형으로 변환

console.log(`"` + typeof 10 + `" isn't "` + typeof 'abc' + `" data type`);
console.log(`typeof 를 array나 null에 사용하면 "` + typeof null + `" 결과를 얻을 수 있습니다.`)

let mathScore, engScore;
let math = '77';
let eng='88';
mathScore = Number(math);
engScore = Number(eng);
let avgScore = (mathScore + engScore) / 2;
console.log(avgScore);
console.log(typeof avgScore);