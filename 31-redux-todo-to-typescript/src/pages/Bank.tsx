import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../store/modules/bank';
import { useState } from 'react';
import History from '../components/History';
import { BankProps } from '../types/interface';
interface State {
    bank: BankProps;
}

function Bank() {
    const [money, setMoney] = useState<string>('');
    const balance = useSelector((state: State) => state.bank.balance);
    const dispatch = useDispatch();
    const error = useSelector((state: State) => state.bank.error);

    const depositMoney = () => {
        dispatch(deposit(money));
        setMoney('');
    };
    const withdrawMoney = () => {
        dispatch(withdraw(money));
        setMoney('');
    };
    return (
        <>
            <main>
                <h1>코딩온 은행</h1>
                <h2>잔액 : {balance} 원</h2>
                <div>
                    <input type="number" step={1000} value={money} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMoney(e.target.value)} />
                    {error && <div>{error}</div>}
                </div>
                <input type="button" value="입금" onClick={depositMoney} />
                <input type="button" value="출금" onClick={withdrawMoney} />
            </main>
            <History />
        </>
    );
}

export default Bank;
