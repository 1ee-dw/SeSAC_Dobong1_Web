import { useRef, useState } from 'react';

export default function Text() {
    const [text, setText] = useState<string>('');
    // 1. DOM 요소에 접근하는 REF
    const ref = useRef<HTMLInputElement>(null);
    // 2. 변수로 사용하는 REF
    const refVal = useRef<number>(0);

    const changeState = () => {
        if (typeof ref.current?.value === 'string') {
            setText(ref.current.value);
        }
    };

    const increseRefVal = () => (refVal.current += 1);
    return (
        <div>
            <h4>useState, useRef 사용</h4>
            <input type="text" ref={ref} />
            <input type="button" onClick={changeState} value="state 변경" />
            <p>state: {text}</p>
            <p>ref: {ref.current?.value}</p>
            <input type="button" value="ref +1" onClick={increseRefVal} />
            <p>ref Value: {refVal.current}</p>
        </div>
    );
}
