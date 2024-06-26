import { io } from 'socket.io-client';

const { useState, useEffect } = require('react');
/*
방법 1. component 내에 socket, initialSocketConnect 직접 선언.
1-1) socket 선언(io import 해야함)
*/
const socket = io.connect('http://localhost:8080', {
    autoConnect: false,
});
function Prac1() {
    // 1-2) initialSocketConnect 선언 및 useEffect를 사용해 페이지가 처음 렌더링 될 때만 해당 함수 실행.
    const initSocketConnect = () => {
        console.log(socket.connected);
        if (!socket.connected) socket.connect();
        console.log('connected?', socket.connected);
    };

    useEffect(() => {
        initSocketConnect();
    }, []);

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
            <h1>실습 1-1</h1>
            <button onClick={hello}>hello</button>
            <button onClick={study}>study</button>
            <button onClick={bye}>bye</button>
            <h3>{fromServerStr}</h3>
        </>
    );
}

export default Prac1;
