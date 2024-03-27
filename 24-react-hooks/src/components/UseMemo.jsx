import { useMemo } from 'react';
import { useState } from 'react';

function UseMemo() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    //useMemo 사용 전
    const calc1 = () => {
        return count * 2;
    };

    //useMemo 사용 후

    const calc2 = useMemo(() => {
        return count * 2;
    }, [count]);
    return (
        <>
            <h3>UseMemo</h3>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <input type="button" value="+1" onClick={() => setCount(count + 1)} />

            <p>{count}</p>
            {/* useMemo 사용 전 */}
            <p>{calc1()}</p>
            {/* useMemo 사용 후 */}
            <p>{calc2}</p>
        </>
    );
}

export default UseMemo;
