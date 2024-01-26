/* 
    setTimeout(function() {}, 시간초)
    시간의 단위는 ms
    설정한 시간이 지난 후 함수 내부의 코드 동작
*/

// 편의점에 들어가 음료수를 사서 나오는 상황

/* setTimeout(function() {
    console.log('setTimeout 사용해보기');
},3000); */

let product, price;
function goMart() {
    console.log('마트로 들어가 어떤 음료를 살지 고민')
}

function pickDrink() {
    setTimeout(function(){
        console.log('고민 끝!');
        product = '닥터페퍼 제로';
        price = 1700;
    },3000)
}

function pay(){
    console.log(`상품명: ${product}
가격: ${price}`)
}

goMart();
pickDrink();
pay();