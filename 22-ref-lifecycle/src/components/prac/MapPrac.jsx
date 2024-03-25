import { useState } from 'react';

function MapPrac() {
    const [info, setInfo] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const insertInfo = () => {
        const newInfo = info.concat({ id: info.length === 0 ? 1 : info.length + 1, name: name, email: email });
        setInfo(newInfo);
        setName('');
        setEmail('');
        console.log('insert error');
    };

    const deleteInfo = (id) => {
        // setInfo(info.slice(id - 1));
        setInfo(info.filter((item) => item.id !== id));
    };

    const enter = (e) => {
        if (e.key === 'Enter') {
            insertInfo();
            console.log('enter error');
        }
    };

    return (
        <>
            <input
                type="text"
                placeholder="이름"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <input
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                onKeyDown={enter}
            />
            <input type="button" value="등록" onClick={insertInfo} />
            <hr />
            {info.length === 0 ? (
                <h1>데이터가 없습니다.</h1>
            ) : (
                <ol>
                    {info.map((item) => (
                        <li key={item.id} onDoubleClick={() => deleteInfo(item.id)}>
                            <span>{item.name}: </span>
                            <span>{item.email}</span>
                        </li>
                    ))}
                </ol>
            )}
        </>
    );
}
export default MapPrac;
