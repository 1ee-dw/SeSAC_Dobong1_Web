import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import Notice from './Notice';
import Speech from './Speech';

const socket = io.connect('http://localhost:8080', {
    autoConnect: false,
});

export default function Chatting3() {
    const initSocketConnect = () => {
        if (!socket.connected) socket.connect();
    };

    const [nnInput, setNnInput] = useState('');
    const [nickName, setNickName] = useState(null);
    const [userList, setUserList] = useState({}); // 전체 클라이언트 내의 닉네임 정보를 관리하는 state
    const [sendTo, setSendTo] = useState('all'); // dm 관련 state
    const [msgInput, setMsgInput] = useState('');
    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        socket.on('notice', (notice) => {
            const newChatList = [...chatList, { type: 'notice', content: notice }];
            setChatList(newChatList);
        });
    }, [chatList]);

    // 메시지 전송
    const handleSubmit = (e) => {
        e.preventDefault();
        if (msgInput.trim() === '') return setMsgInput('');
        const sendData = {
            nickname: nickName,
            sendTo: sendTo, // all or socket.id
            content: msgInput,
        };
        socket.emit('send', sendData);
        setMsgInput('');
    };

    // usememo: 값을 저장, useCallback: 함수를 저장
    const addChatList = useCallback(
        (data) => {
            // console.log(data); // {id: 보낸 사람 닉네임, msg: 보낸 메시지 내용, isDm: true/undefined}
            // 닉네임으로 me type과 orher type을 구분.
            // 내 닉네임은 nickName state에서 관리, 보낸 사람의 닉네임은 서버로부터 전달받은 data.id
            const type = data.id === nickName ? 'me' : 'other';
            const content = `${data.isDm ? '[DM]' : ''} ${data.msg}`;
            const newChatList = [...chatList, { type: type, content: content, isDm: data.isDm, name: data.id }];
            setChatList(newChatList);
        },
        [chatList, nickName]
    );

    useEffect(() => {
        socket.on('message', addChatList);
    }, [addChatList]);

    const join = () => {
        initSocketConnect();
        socket.emit('checkNick', nnInput); // 중복체크를 위해 서버로 닉네임 전송
    };

    // 메시지 및 dm 전송
    // option 생성
    // const options = [<option value={'socketid1'}>닉네임1</option>];
    const userOptions = useMemo(() => {
        const options = [];
        for (let key in userList) {
            if (key !== socket.id) options.push(<option value={key}>{userList[key]}</option>); // id끼리 비교
            // if (nickName !== userList[key]) options.push(<option value={key}>{userList[key]}</option>); // 닉네임 끼리 비교
        }
        return options;
    }, [userList]);

    useEffect(() => {
        // 닉네임 중복 시 서버로부터 받은 에러 메시지 출력
        socket.on('error', (errMsg) => {
            alert(errMsg);
        });
        // 닉네임 사용 가능 시, 설정한 닉네임을 저장
        socket.on('entrySuccess', (nickname) => {
            setNickName(nickname);
        });
        // 서버로부터 nickname 정보를 받아서 저장
        socket.on('updateNicks', (nickInfo) => {
            setUserList(nickInfo);
        });
    }, []);

    const scrollDiv = useRef(null);
    useEffect(() => {
        scrollDiv.current?.scrollIntoView({ behavior: 'auto' });
    }, [chatList]);

    return (
        <>
            <ul>
                <li>메시지 전송</li>
                <li>dm 전송</li>
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
                    <section>
                        {chatList.map((chat, idx) => (chat.type === 'notice' ? <Notice chat={chat} key={idx} /> : <Speech chat={chat} key={idx} />))}
                        <div ref={scrollDiv}></div>
                    </section>
                    <form className="msg-form" id="msg-form" onSubmit={handleSubmit}>
                        <select id="dm-select" onChange={(e) => setSendTo(e.target.value)}>
                            <option value="all">전체</option>
                            {userOptions}
                        </select>
                        <input type="text" placeholder="메세지 입력" value={msgInput} onChange={(e) => setMsgInput(e.target.value)} />
                        <button>전송</button>
                    </form>
                </div>
            )}
        </>
    );
}
