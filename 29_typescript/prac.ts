let olimpic_newgame: readonly [object, boolean] = [
    {
        name: '쇼트트랙',
        type: '혼성 계주',
    },
    true,
];

interface Game {
    title: string;
    price: number;
    desc?: string;
    category: string;
    platform: Platform;
}

type Platform = '데스크탑' | '콘솔' | '모바일';

let heroGame_A: Game = {
    title: 'DC 언체인드',
    price: 50000,
    desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
    category: '액션',
    platform: '모바일',
};
let heroGame_B: Game = {
    title: 'MARVEL 퓨처파이트',
    price: 65000,
    category: '롤플레잉',
    platform: '모바일',
};

const sum1 = (a: number, b: number) => console.log(a + b);

sum1(5, 11);

const sum2 = (...num: number[]): number => {
    let result = 0;
    num.forEach((item) => {
        result += item;
    });
    return result;
};

console.log(sum2(2, 3, 4)); // 9
console.log(sum2(2, 3, 4, 5, 6, 7, 8)); // 35

const sum3 = (a: number[]): number => {
    let result = 0;
    a.forEach((num) => (result += num));
    return result;
};

console.log('sum3', sum3([1, 2, 3, 4, 5]));

function arrElement<A>(arr: A[], idx: number): A | boolean {
    if (idx >= arr.length) {
        return false;
    } else return arr[idx];
}
console.log(arrElement<any>([1, 2, 3, 'qwer', 'qaz'], 3));
console.log(arrElement<any>([1, 2, 3, 'qwer', 'qaz'], 5));

const arrElement2 = <A>(arr: A[], idx: number): A | boolean => (idx < arr.length ? arr[idx] : false);

console.log('2', arrElement2<any>([1, 2, 3, 'qwer', 'qaz'], 5));
console.log('2', arrElement2<any>([1, 2, 3, 'qwer', 'qaz'], 3));
