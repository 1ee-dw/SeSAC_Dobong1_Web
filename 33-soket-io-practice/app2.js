const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const PORT = 8080;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('talk_basic');
});

io.on('connection', (socket) => {
    // 실습 3
    socket.broadcast.emit('notice', `${socket.id}님이 입장하셨습니다.`);
    // 실습 4
    // [4-2] submit 요청 전송 시 메시지를 전체로 전송
    socket.on('send', (msg) => {
        console.log(`${socket.id} : ${msg}`);
        io.emit('message', { id: socket.id, message: msg });
    });
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
