const { useState } = require('react');
/*
방법 1. socket, initialSocketConnect 직접 선언.
const socket = io.connect('http://localhost:8080', {
    autoConnect: false,
});
*/
function Prac1({ socket }) {
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
    /*
    const initSocketConnect = () => {
        console.log(socket.connected);
        if (!socket.connected) socket.connect();
        console.log('connected?', socket.connected);
    };
    
    useEffect(() => {
        initSocketConnect();
    }, []);
    */
    return (
        <>
            <button onClick={hello}>hello</button>
            <button onClick={study}>study</button>
            <button onClick={bye}>bye</button>
            <h3>{fromServerStr}</h3>
        </>
    );
}

export default Prac1;
