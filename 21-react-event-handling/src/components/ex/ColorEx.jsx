import { useState } from 'react';
export default function ColorEx() {
    const [color, setColor] = useState('black');
    const [text, setText] = useState('검정색 글씨');
    const red = (color) => {
        setColor(color);
        setText('빨간색 글씨');
    };
    const blue = (color) => {
        setColor(color);
        setText('파란색 글씨');
    };
    return (
        <div>
            <h2 style={{ color: color }}>{text}</h2>
            <button onClick={() => red('red')}>빨간색</button>
            <button onClick={() => blue('blue')}>파란색</button>
        </div>
    );
}
