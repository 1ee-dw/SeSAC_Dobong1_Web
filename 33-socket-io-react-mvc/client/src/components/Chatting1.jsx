import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Notice from './Notice';
import Speech from './Speech';

const socket = io.connect('http://localhost:8080', {
    autoConnect: false,
});

export default function Chatting1() {
    const initSocketConnect = () => {
        if (!socket.connected) socket.connect();
    };

    const [msgInput, setMsgInput] = useState('');
    const [chatList, setChatList] = useState([
        { type: 'me', content: '내가 작성한 메시지' },
        { type: 'other', content: '다른 사람이 작성한 메시지' },
        { type: 'notice', content: '입장/퇴장 메시지' },
    ]);
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        initSocketConnect();
        // 문제점. newChatList를 만들 때 mount 시점의 chatList만 이용됨.
        /* socket.on('notice', (notice) => {
            const newChatList = [...chatList, { type: 'notice', content: notice }];
            setChatList(newChatList);
        }); */
    }, []);
    // 해결. useEffect를 하나 더 만들어 chatList가 변경될 때마다 notice가 작동하도록 변경.
    useEffect(() => {
        socket.on('notice', (notice) => {
            const newChatList = [...chatList, { type: 'notice', content: notice }];
            setChatList(newChatList);
        });
    }, [chatList]);
    return (
        <>
            <ul>
                <li>채팅방 ui</li>
                <li>입장 알림</li>
            </ul>
            <div className="container">
                <header>코코아톡🐛</header>
                <section>
                    {/* <Speech chat={chatList[0]} />
                    <Speech chat={chatList[1]} />
                    <Notice chat={chatList[2]} /> */}
                    {chatList.map((chat, idx) => (chat.type === 'notice' ? <Notice chat={chat} key={idx} /> : <Speech chat={chat} key={idx} />))}
                </section>
                <form className="msg-form" id="msg-form" onSubmit={handleSubmit}>
                    <select id="dm-select">
                        <option value="all">전체</option>
                    </select>
                    <input type="text" placeholder="메세지 입력" onChange={(e) => setMsgInput(e.target.value)} />
                    <button>전송</button>
                </form>
            </div>
        </>
    );
}
