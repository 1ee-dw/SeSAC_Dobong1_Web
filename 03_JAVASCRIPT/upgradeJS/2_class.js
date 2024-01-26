// class : object를 만드는 틀
/* 속성 
    - 건축연도
    - 이름
    - 창문 갯수
메소드
    - 건물의 나이 출력
    - 창문의 개수 출력
 */

class House {
    constructor(year, name, window) {
        this.year = year;
        this.name = name;
        this.window = window;
    }

    getAge() {
        console.log(`${this.name}은 건축한 지 ${2024-this.year}년 되었습니다.`);
    }

    getWindow() {
        console.log(`${this.name}의 창문은 ${this.window}개 입니다.`)
    }
}

const house1 = new House(1789, 'old', 1);
house1.getAge();
house1.getWindow();
console.log(house1.name);

const house2 = new House(2015, 'XI', 10);
house2.getAge();
house2.getWindow();
console.log(house2.name);

console.log('---------------상속---------------');

class Apart extends House {
    constructor(year, name, window, floor, household, windowMaker) {
        super(year, name, window);
        this.floor = floor;
        this.household = household;
        this.windowMaker = windowMaker;
    }

    getApartInfo() {
        return `${this.year}에 지어진 ${this.name}.
        총 층수: ${this.floor}층.
        세대 수: ${this.household}세대.
        창문의 개수: ${this.window}개.`;
    }

    getWindow() {
        return `${this.name}의 창문은 ${this.windowMaker}에서 만들었으며 ${this.window}개 입니다.`
    }
}

const apart1 = new Apart(2022, 'lemian', 19, 50, 200, 'KCC');
console.log(apart1.getWindow());
console.log(apart1.getApartInfo());
apart1.getAge();
console.log(apart1);