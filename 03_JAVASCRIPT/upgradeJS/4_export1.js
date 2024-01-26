// 모듈 만들기 export 이용 한번에 내보내기

const flower = ['rose','sunflower','tulip'];
function getFlowers(num) {
    if(num>=flower.length || num<0) return 'x';
    return flower[num];
}

export {flower as flr, getFlowers as getFlrs}