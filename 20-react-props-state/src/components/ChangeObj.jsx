import { useState } from 'react';

export function ChangeObj(props) {
    const { objArr } = props; // 배열
    const [idx, setIdx] = useState(0);
    function changeIdx() {
        if (idx === objArr.length - 1) {
            setIdx(0);
        } else setIdx(idx + 1);
    }
    // console.log(objArr);
    console.log(props);
    return (
        <div>
            <article>
                <p>이름: {objArr[idx].name}</p>
                <p>나이: {objArr[idx].age}</p>
                <p>별명: {objArr[idx].nickName}</p>
            </article>
            <button onClick={changeIdx}>다음으로 진행</button>
        </div>
    );
}
