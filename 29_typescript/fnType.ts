function print(a: number, b: number, c: number): void {
    // 파라미터의 자료형은 적어줘야 하지만 함수의 자료형은 적어주지 않아도 됨
    console.log(a);
    console.log(b);
    console.log(c);
}

// print(1, 3, 5);
// print(1, 3); // error

function print2(a: number, b: number, c?: number) {
    console.log(a);
    console.log(b);
    console.log(c);
}

// print2(1, 3); // c의 값으로 undefined가 들어옴
// print2(1, 4, 7);

function sayHello(): void {
    console.log('Hello~');
}

sayHello();

function concatStr(a: string, b: string): string {
    return a + b;
}

console.log(concatStr('aaa', 'qse'));

function circleArea(r: number): number {
    return r * r * Math.PI;
}

console.log(circleArea(5));

const triangleArea = (w: number, h: number): number => (w * h) / 2;

console.log(triangleArea(2, 4));

interface Greet {
    name: string;
    hi(): string;
    bye(a: number): string;
}

const dw: Greet = {
    name: 'ldw',
    hi() {
        return `hello, my name is ${this.name}`;
    },
    bye(a) {
        return `작별인사를 ${a}번 했습니다.`;
    },
};

console.log(dw.hi());
console.log(dw.bye(5));

// function goingOn(): never {
//     while (true) {
//         console.log('무한루프');
//     }
// }
// function goingOn2(a: number): never {
//     while (true) {
//         if (a > 10) break; // 빠져나올수 있는 탈출구가 있는 경우 never 타입을 사용할 수 없다.
//         console.log('무한루프');
//     }
// }

function addSomething(x: number, y: number): string;
function addSomething(x: string, y: string): number;
function addSomething(x: any, y: any) {
    return x + y;
}

console.log(addSomething(1, 2));
console.log(addSomething('안녕', '하세요'));
