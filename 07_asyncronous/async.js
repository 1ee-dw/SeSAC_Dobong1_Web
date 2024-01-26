let product, price;
function goMart() {
    console.log('마트로 들어가 어떤 음료를 살지 고민')
}

function pickDrink() {
    return new Promise(function(resolve,reject) {
        setTimeout(function(){
            console.log('고민 끝!');
            product = '닥터페퍼 제로';
            price = 1700;
            resolve('선택 완료!');
            // reject('실패..')
        },3000)
    });
}

function pay(){
    console.log(`상품명: ${product}.
가격: ${price}원.`)
}

async function execute() {
    goMart();
    await pickDrink();
    pay();
}

execute();