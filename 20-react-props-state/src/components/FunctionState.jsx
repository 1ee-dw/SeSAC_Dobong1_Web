import { useState } from 'react';

// export function FunctionState() {
//     const [banana, setBanana] = useState('바나나');
//     const changeEng = () => {
//         setBanana('banana');
//     };
//     return (
//         <div>
//             <div style={{}}>{banana}</div>
//             <button onClick={changeEng}>영어로 변경</button>
//         </div>
//     );
// }

// export function FunctionState2() {
//     const [banana, setBanana] = useState('바나나');
//     function inEng() {
//         setBanana('Banana');
//         console.log('state', banana);
//     }
//     return (
//         <div>
//             <div>{banana}</div>
//             <button onClick={inEng}>영어로 바꾸기</button>
//         </div>
//     );
// }

// export function FunctionState3() {
//     function changeLanguage() {
//         const apple = document.querySelector('.apple');
//         apple.textContent === '사과' ? (apple.innerText = 'Apple') : (apple.innerText = '사과');
//     }
//     return (
//         <div>
//             <div className="apple">사과</div>
//             <button type="button" onClick={changeLanguage}>
//                 영어로 바꾸기
//             </button>
//         </div>
//     );
// }

// export function FunctionState4() {
//     const [apple, changeLan] = useState('사과');
//     function isEng() {
//         apple === '사과' ? changeLan('apple') : changeLan('사과');
//     }
//     return (
//         <div>
//             <div>{apple}</div>
//             <button onClick={isEng}>{apple === '사과' ? '영어' : '한글'}로 변경</button>
//         </div>
//     );
// }
export function FunctionState() {
    const [number, setNumber] = useState(0);
    const plus = () => {
        setNumber(number + 2);
    };
    function minus() {
        setNumber(number - 1);
    }
    return (
        <div>
            <h1>
                {number}
                {number < 8 ? '👌' : '😒'}
            </h1>
            <button onClick={plus}>+2</button>
            <button onClick={minus}>-1</button>
        </div>
    );
}

export function FunctionState2() {
    const [number, setNumber] = useState(0);
    const increase = () => {
        setNumber(number + 1);
    };
    function decrease() {
        setNumber(number - 2);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
        </div>
    );
}
