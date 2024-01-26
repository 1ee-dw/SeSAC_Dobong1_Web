let product, price;
function goMart() {
    console.log('마트로 들어가 어떤 음료를 살지 고민')
}

function pickDrink(callback) {
    setTimeout(function(){
        console.log('고민 끝!');
        product = '닥터페퍼 제로';
        price = 1700;
        callback();
    },3000)
}

function pay(){
    console.log(`상품명: ${product}
가격: ${price}`)
}

goMart();
pickDrink(pay);