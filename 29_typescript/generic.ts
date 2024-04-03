function printSome<T>(x: T, y: T): T {
    console.log(x);
    console.log(y);
    return y;
}

printSome<number>(1, 2);
printSome<string>('H', 'i');

function printSome2<A, B>(x: A, y: B) {
    console.log(x);
    console.log(y);
}

printSome2<number, string>(1, 'Hi~');

function arrLen1(arr: any[]): number {
    return arr.length;
}

function getVal1(val: any): any {
    return val;
}

function arrLen2<A>(arr: A[]): number {
    return arr.length;
}

console.log(arrLen2<any>([1, 123, 2, 3213, 323, 'hello', 31, 4, 14, 'hi']));

function getVal2<T>(val: T): T {
    return val;
}

console.log(getVal2<any>('Hello'));
console.log(getVal2<any>(234));
console.log(getVal2<any[]>([4, 6, 1, 12, 3, 4, 51, 'as', 'dasd']));

// interface & generic
interface Phone<T> {
    company: T;
    createdAt: Date;
    option: T;
}
const iphone15: Phone<string> = {
    company: 'apple',
    createdAt: new Date('2023-10-13'),
    option: 'black',
};

type iphoneOption = {
    color: string;
    storage: number;
};
