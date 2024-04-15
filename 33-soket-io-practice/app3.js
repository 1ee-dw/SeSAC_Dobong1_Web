const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const PORT = 8080;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('talk_dm');
});

// {socket.id: nickname} 형식으로 저장
const nickInfo = {};

io.on('connection', (socket) => {
    console.log('socket Info', socket);
    // 실습 3
    // socket.broadcast.emit('notice', `${socket.id}님이 입장하셨습니다.`);
    // 실습 4
    // [4-2] submit 요청 전송 시 메시지를 전체로 전송
    socket.on('send', (msgData) => {
        if (msgData.dm === 'ALL') {
            // 전체에게 메시지 전송
            io.emit('message', { id: msgData.myNick, message: msgData.msg });
        } else {
            // 특정 socket.id(msgData.dm)를 가진 클라이언트에게 메시지 전송
            // io.to(socket.id).emit() => 해당 socket.id를 가진 클라이언트에게만 emit 작업 실행.
            // 해당 작업은 특정 socket id를 가진 클라이언트(자신 제외)에게만 보임.
            io.to(msgData.dm).emit('message', { id: msgData.myNick, message: msgData.msg, isDm: true });
            // 나한테도 보이게 나에게만 데이터를 한번 더 보내주어야 함.
            socket.emit('message', { id: msgData.myNick, message: msgData.msg, isDm: true });
        }
    });

    // 닉네임 사용 2. 요청 닉네임이 중복이 아닐 때만 nickInfo에 정보 추가.
    socket.on('checkNick', (nickname) => {
        console.log('저장된 nickname:', nickInfo);
        console.log('obj value:', Object.values(nickInfo));

        // 요청받은 nickname과 중복된 값이 nickInfo 배열 내에 존재하는 지 확인
        // Array.indexOf(element) ===> Array에 element가 있으면 1 없으면 -1 반환
        if (Object.values(nickInfo).indexOf(nickname) > -1) {
            // 중복된 데이터인 경우 입장 실패 안내
            socket.emit('error', '이미 존재하는 닉네임입니다.');
        } else {
            // 중복되지 않은 데이터인 경우 nickInfo에 socket.id와 nickname 정보 입력
            nickInfo[socket.id] = nickname;
            // 입장 성공 시 1) 나의 닉네임 정보를 나에게 전달
            socket.emit('entrySuccess', nickname);
            // 2) 입장 알림 메시지(나 제외)
            socket.broadcast.emit('notice', `${nickname}님이 입장하셨습니다.`);
            // 3) 전체 클라이언트에게 update nickInfo 전달.
            io.emit('updateNicks', nickInfo);
        }
    });

    // 퇴장
    socket.on('disconnect', () => {
        // 클라이언트 퇴장 시 퇴장 안내, nickInfo 내의 특정 key 삭제 및 nickInfo 갱신
        // 1) 퇴장 안내
        io.emit('notice', `${nickInfo[socket.id]}님이 퇴장하셨습니다.`);
        // 2) 특정 키 삭제
        delete nickInfo[socket.id];
        // 3) nickInfo 갱신
        io.emit('updateNicks', nickInfo);
    });
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
