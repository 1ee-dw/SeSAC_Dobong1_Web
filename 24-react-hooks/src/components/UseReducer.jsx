import { useReducer, useState } from 'react';

const reducer = (prevState, action) => {
    // action : 요구 --> state를 어떻게 바꿀지에 대한..
    console.log('dispatch 호출 시 reducer 동작');
    console.log(action);

    // reducer의 내부 로직은 주로 조건문(if, switch) 사용
    switch (action.type) {
        case 'deposit':
            return prevState + action.payload;
        case 'withdraw':
            return prevState - action.payload;
    }
};
export default function UseReducer() {
    const [num, setNum] = useState(0);

    /* useReducer 사용법
    const [state, dispatch] = useReducer(reducer(==setState), state의 초기값) */

    const [money, dispatch] = useReducer(reducer, 0);
    // dispatch: action을 담아서 reducer로 전달하는 역할할
    return (
        <div>
            <h3>UseReducer</h3>
            <p>잔고: {money}원</p>
            <input type="number" value={num} onChange={(e) => setNum(Number(e.target.value))} step={1000} />
            <input type="button" value="입금" onClick={() => dispatch({ type: 'deposit', payload: num })} />
            <input type="button" value="출금" onClick={() => dispatch({ type: 'withdraw', payload: num })} />
        </div>
    );
}
