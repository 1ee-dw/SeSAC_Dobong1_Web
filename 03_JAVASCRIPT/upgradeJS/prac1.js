/* class Shape{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return (this.width*this.height)
    }
}

let square = new Shape(3,4);
console.log(square.getArea());

class Rectangle extends Shape{
    constructor(width, height) {
        super(width, height);
    }

    getDiagonal() {
        return Math.sqrt((this.width**2)+(this.height**2));
    }
}

let rectangle = new Rectangle(5,12);
console.log(`직사각형 넓이: ${rectangle.getArea()}`);
console.log(`직사각형 내부의 대각선 길이: ${rectangle.getDiagonal()}`);

class Triangle extends Shape{
    constructor(width, height) {
        super(width, height);
    }

    getArea() {
        return (this.width*this.height)/2
    }
}

let triangle = new Triangle(3,6);
console.log(`삼각형의 넓이: ${triangle.getArea()}`);

class Circle extends Shape{
    constructor(width, height, radius) {
        super(width,height);
        this.radius = radius;
    }
    
    getArea() {
        return (this.radius**2)*Math.PI;
    }
}

let circle = new Circle(9999,9999,5);
console.log(`원의 넓이: ${circle.getArea()}`); */

let input = prompt('몇까지');
input = Number(input);
for (i=1; i<=input; i++) {
    if (i%13===0 && i%2 ===1) console.log(i);
}

let sum3=0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0 || i % 5 === 0) sum += i;
}
console.log(sum3);