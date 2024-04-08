export interface History {
    datetime: string;
    type: string;
    amount: number;
}
export interface BankProps {
    balance: number;
    history: History[];
    error: string;
}

export interface TodoProps {
    todo: string;
}
