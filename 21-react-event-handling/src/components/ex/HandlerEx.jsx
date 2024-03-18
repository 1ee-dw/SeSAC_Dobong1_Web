import { useState } from 'react';

export default function HandlerEx() {
    const [state, setState] = useState('Hello, World!');
    function clickEvent(msg) {
        setState(msg);
    }

    return (
        <div>
            <h2>{state}</h2>
            <button onClick={() => clickEvent('Goodbye, World!')}>클릭</button>
        </div>
    );
}
