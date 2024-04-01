// Tuple - 갯수와 자료형의 순서가 정해져있는 배열
let drink1: [string, string] = ['a', 'b'];
let drink2: [string, string, number];
drink2 = ['coca-cola', 'pepsi', 1];
// console.log(drink2);
// console.log(drink2[1]);
// console.log(...drink1, ...drink2);

drink2.push('push 됨?');
console.log(drink2);
// drink2.push(null);
console.log(drink2);

/* typescript의 type 추론
    string, number -> 이 두가지 자료형으로만 이루어진 tuple을 선언했기 때문에
    typescript가 자동으로 타입을 추론해서 결정함(string | number)
*/

// readonly => 길이를 특정하고 싶을 때 사용(수정 및 추가 불가능함)
let drink3: readonly [string, number] = ['doctor pepper', 1700];
// drink3[0] = 'cider'; // 수정 불가
// drink3.push('풋씨'); // 추가 불가

// ============ enum ============
enum Auth {
    admin = 0,
    user = 1,
    guest = 2,
}

enum Cafe {
    americano = '아메리카노',
    latte = '라떼',
}

// enum은 선언 후 변경이 불가하여 수정이 필요한 경우 선언 부분에서 수정해야 함.
console.log(Auth.guest); // 2
console.log(Cafe.latte); // 라떼

enum Cake {
    choko, // 0
    vanilla, // 1
    strawberry, // 2
    kiwi = 'kiwi', // kiwi
}

console.log(Cake.choko);
console.log(Cake.vanilla);
console.log(Cake.strawberry);
console.log(Cake.kiwi);
