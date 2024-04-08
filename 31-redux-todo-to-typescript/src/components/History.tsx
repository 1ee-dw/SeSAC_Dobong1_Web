import { useSelector } from 'react-redux';
import { BankProps } from '../types/interface';

interface State {
    bank: BankProps;
}

function History() {
    const history = useSelector((state: State) => state.bank.history);
    console.log(history);

    return (
        <footer>
            {history.map((log, idx) => (
                <p key={idx}>
                    {log.amount}원 {log.type} - {log.datetime}
                </p>
            ))}
        </footer>
    );
}

export default History;
