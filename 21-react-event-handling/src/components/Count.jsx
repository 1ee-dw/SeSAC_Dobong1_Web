import { useState } from 'react';
const Count = () => {
    const [num, setNum] = useState(0);
    const increase = () => {
        setNum(num + 1);
    };
    const alertMessage = (event, message) => {
        console.log(event.target);
        alert(`${message}. 현재 숫자는 ${num}입니다.`);
    };
    const consoleMessage = (message) => {
        console.log(`${message}. 현재 숫자는 ${num}입니다.`);
    };
    const handleEvnet = (e) => {
        console.log(e.target);
        console.log(e.currentTarget);
    };
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={increase}>+ 1</button>
            <button onClick={(e) => alertMessage(e, 'hello')}>alert</button>
            <button onClick={() => consoleMessage('안녕')}>console</button>
            <button onClick={handleEvnet}>
                <span>target 확인</span>
            </button>
        </div>
    );
};

export default Count;
