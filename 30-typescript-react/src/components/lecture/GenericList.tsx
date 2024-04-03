import { useState } from 'react';
import GenericItem from './GenericItem';
interface GTodo<T> {
    id: number;
    text: T;
    done: boolean;
}
export default function GenericList() {
    const [numTodos, setNumTodos] = useState<GTodo<number>[]>([]);
    const [strTodos, setStrTodos] = useState<GTodo<string>[]>([]);
    const addNumTodo = () => {
        setNumTodos([{ id: Date.now(), text: 10, done: false }, ...numTodos]);
    };
    const addStrTodo = () => {
        setStrTodos([{ id: Date.now(), text: '문자열 추가', done: false }, ...strTodos]);
    };
    const toggleComplete = (id: number) => {
        setNumTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
        setStrTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
    };
    return (
        <>
            <h4>Number 추가</h4>
            <input type="button" value="add Number" onClick={addNumTodo} />
            <GenericItem todos={numTodos} toggle={toggleComplete} />
            <h4>String 추가</h4>
            <input type="button" value="add String" onClick={addStrTodo} />
            <GenericItem todos={strTodos} toggle={toggleComplete} />
        </>
    );
}
