import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Notice from './Notice';
import Speech from './Speech';

const socket = io.connect('http://localhost:8080', {
    autoConnect: false,
});

export default function Chatting2() {
    const initSocketConnect = () => {
        if (!socket.connected) socket.connect();
    };

    const [msgInput, setMsgInput] = useState('');
    const [chatList, setChatList] = useState([
        { type: 'me', content: '내가 작성한 메시지' },
        { type: 'other', content: '다른 사람이 작성한 메시지' },
        { type: 'notice', content: '입장/퇴장 메시지' },
    ]);

    useEffect(() => {
        socket.on('notice', (notice) => {
            const newChatList = [...chatList, { type: 'notice', content: notice }];
            setChatList(newChatList);
        });
    }, [chatList]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const [nnInput, setNnInput] = useState('');
    const [nickName, setNickName] = useState(null);
    const join = () => {
        initSocketConnect();
        socket.emit('checkNick', nnInput); // 중복체크를 위해 서버로 닉네임 전송
    };

    useEffect(() => {
        // 닉네임 중복 시 서버로부터 받은 에러 메시지 출력
        socket.on('error', (errMsg) => {
            alert(errMsg);
        });
        //
        socket.on('entrySuccess', (nickname) => {
            setNickName(nickname);
        });
    }, []);

    return (
        <>
            <ul>
                <li>닉네임 받고 중복체크</li>
                <li>퇴장 알림</li>
            </ul>
            {/* 
            nickname이 null이면 닉네임 입력창
            nickname이 있으면 채팅창
            */}
            {!nickName ? (
                <div className="entry-box">
                    <input type="text" placeholder="닉네임을 입력해주세요." value={nnInput} onChange={(e) => setNnInput(e.target.value)} />
                    <input type="button" value="입장" onClick={join} />
                </div>
            ) : (
                <div className="container">
                    <header>코코아톡🐛- {nickName}</header>
                    <section>{chatList.map((chat, idx) => (chat.type === 'notice' ? <Notice chat={chat} key={idx} /> : <Speech chat={chat} key={idx} />))}</section>
                    <form className="msg-form" id="msg-form" onSubmit={handleSubmit}>
                        <select id="dm-select">
                            <option value="all">전체</option>
                        </select>
                        <input type="text" placeholder="메세지 입력" value={msgInput} onChange={(e) => setMsgInput(e.target.value)} />
                        <button>전송</button>
                    </form>
                </div>
            )}
        </>
    );
}
