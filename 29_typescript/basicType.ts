// 기본 타입
let number: number = 1;
// number="string" // ts에서 오류 알려줌 -> string 은 number type 으로 할당될 수 없음!
let str: string = 'string';
let isTrue: boolean = true;
let undef: undefined;
let empty: null;

/* 배열
선언 방법 1 -> type[] = [el1, el2, el3, ...]
선언 방법 2 -> Array<type> = [el1, el2, el3, ...] */
let numberArray: number[] = [1, 2, 3, 4, 5];
let stringArray: string[] = ['a', 'b', 'c', 'd', 'e'];

// number, string 자료형 둘 다 올 수 있는 배열
const arr1: (number | string)[] = [1, 2, 3, 'a', 'b', 'c'];

// boolean, null, number[]가 올 수 있는 배열
const arr2: Array<boolean | null | number[]> = [[1, 2, 3], null, true, false];

// 어떤 자료형이든 상관없는 배열
const arr3: any = [1, 2, 'a', true, null, [], {}];

// 객체 타입
let obj1: object = {
    name: 'allie',
    age: 11,
};
