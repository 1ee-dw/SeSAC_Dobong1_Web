import { useCallback, useState } from 'react';

export default function UseCallback2() {
    const [text, setText] = useState('');
    // const onChangeText = (e) => {
    //     setText(e.target.value);
    // };

    const onChangeText = useCallback((e) => setText(e.target.value), []);
    return (
        <div>
            <h3>UseCallback2</h3>
            <input type="text" value={text} onChange={onChangeText} />
            <p>작성한 값: {text}</p>
        </div>
    );
}
