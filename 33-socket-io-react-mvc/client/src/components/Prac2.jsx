import { useState } from 'react';

function Prac2({ socket }) {
    const [fromServerStr, setFromServerStr] = useState('');
    const hello = () => {
        socket.emit('hello', '안녕하세요');
        socket.on('hello2', (message) => {
            setFromServerStr('hello: ' + message);
        });
    };
    const study = () => {
        socket.emit('study', '공부하세요!');
        socket.on('study2', (message) => {
            setFromServerStr('study: ' + message);
        });
    };
    const bye = () => {
        socket.emit('bye', '안녕히계세요..');
        socket.on('bye2', (message) => {
            setFromServerStr('bye: ' + message);
        });
    };

    return (
        <>
            <button onClick={hello}>hello</button>
            <button onClick={study}>study</button>
            <button onClick={bye}>bye</button>
            <h3>{fromServerStr}</h3>
        </>
    );
}

export default Prac2;
