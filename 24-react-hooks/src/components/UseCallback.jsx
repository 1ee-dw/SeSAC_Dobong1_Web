import { useCallback, useEffect, useState } from 'react';

function UseCallback() {
    const [num, setNum] = useState(0);
    const [isTrue, setIsTrue] = useState(true);

    const func1 = () => {
        console.log('number1: ', num);
    };
    const func2 = useCallback(() => {
        console.log('number2: ', num);
    }, [num]);

    useEffect(() => {
        console.log('함수 1 변경');
    }, [func1]);

    useEffect(() => {
        console.log('함수 2 변경');
    }, [func2]);
    return (
        <div>
            <h3>useCallback</h3>
            <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
            <input
                type="button"
                value="call function"
                onClick={() => {
                    func1();
                    func2();
                }}
            />
            <input type="button" value={isTrue.toString()} onClick={() => setIsTrue(!isTrue)} />
        </div>
    );
}

export default UseCallback;
