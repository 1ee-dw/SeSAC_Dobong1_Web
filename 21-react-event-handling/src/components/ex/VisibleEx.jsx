import { useState } from 'react';

const VisibleEx = () => {
    const [visibility, setVisibility] = useState('visible');
    const [text, setText] = useState('사라져라');
    const isVisible = () => {
        if (visibility === 'visible') {
            setVisibility('hidden');
            setText('보여라');
        } else {
            setVisibility('visible');
            setText('사라져라');
        }
    };
    return (
        <div>
            <button onClick={isVisible}>{text}</button>
            <h2 style={{ visibility: visibility }}>안녕하세요</h2>
        </div>
    );
};

export default VisibleEx;