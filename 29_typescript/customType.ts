// interface & customType
interface Student {
    name: string;
    isPassed: boolean;
}

const student1: Student = {
    name: 'ldw',
    isPassed: false,
};

type Score = 'A+' | 'A' | 'B+' | 'B' | 'C' | 'D' | 'F';

interface 야구부 extends Student {
    position: string;
    height: number;
    weight: number;
    readonly backNumber?: number; // readonly를 사용해 변경이 불가능 함, 필수값이 아닌 경우 ? 처리
    [grade: number]: Score; // key의 형태가 숫자인 값이 여러개 올 수 있다.
}

const otani: 야구부 = {
    name: '오타니 쇼헤이',
    isPassed: true,
    weight: 95.3,
    height: 193,
    backNumber: 17,
    position: 'pitcher',
    1: 'A+',
};

otani['2'] = 'B+';
console.log(otani);

const junghoo: 야구부 = {
    name: '이정후',
    isPassed: true,
    position: 'hitter',
    weight: 88,
    height: 185,
};

console.log(junghoo);

// interface - 함수 타입 설정
interface Calc {
    (a: number, b: number): number;
}

const sum: Calc = function (num1, num2) {
    return num1 + num2;
};

console.log(sum(4, 3));

// interface 교차 타입(&) : 모든 타입을 만족해야 함.(선언 중복 시 초기화 때 한 번만 작성해도 됨)
interface Toy {
    name: string;
    start(): void;
}

interface Car {
    name: string;
    color: string;
    price: number;
}

const toyCar: Toy & Car = {
    name: '타요',
    color: 'blue',
    price: 50000,
    start() {
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    },
};

toyCar.start();

// type 교차타압
type Person = {
    name: string;
    age?: number;
    like?: Array<string>;
    gender: string;
};

type Gender = 'Male' | 'Female';

type Person2 = {
    name: string;
    age?: number;
    like?: Array<string>;
    gender: Gender;
};

let Daniel: Person2 = {
    name: '다니엘',
    gender: 'Female',
    age: 20,
};

let c: Person2 = {
    name: 'a',
    age: 20,
    gender: 'Male',
};
