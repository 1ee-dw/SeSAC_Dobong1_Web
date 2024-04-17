export default function Speech({ chat }) {
    /* 
    { type: 'me', content: '내가 작성한 메시지', isDm: true / undefined, name: 보낸 사람의 닉네임 },
    { type: 'other', content: '다른 사람이 작성한 메시지' },
    */
    return (
        <>
            <div className={`speech ${chat.type} ${chat.isDm ? 'dm' : ''}`}>
                {chat.type === 'other' && <span className="nickname">{chat.name}</span>}
                <span className="msg-box">{chat.content}</span>
            </div>
        </>
    );
}
