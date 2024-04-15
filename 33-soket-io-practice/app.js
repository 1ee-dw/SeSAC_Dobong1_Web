const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const PORT = 8080;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client');
});

// socket.io 코드 작성
io.on('connection', (socket) => {
    console.log(socket.id, '연결되었습니다');
    // socket.on('hello', (msg, callback) => {
    //     console.log('client:', msg);
    //     callback('안녕하세여');
    // });
    socket.on('hello', (msg) => {
        console.log('client:', msg);
        socket.emit('hello2', '안녕하세요');
    });

    socket.on('study', (msg) => {
        console.log('client:', msg);
        socket.emit('study2', '공부하세요!');
    });

    socket.on('bye', (msg) => {
        console.log('client:', msg);
        socket.emit('bye2', '잘 가...');
    });
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
