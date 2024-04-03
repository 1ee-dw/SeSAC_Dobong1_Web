import { useRef, useState } from 'react';
import TodoItem from './TodoItem';
interface Todo {
    id: number;
    text: string;
    done: boolean;
}
function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            const updatedTodo = [{ id: Date.now(), text: newTodo, done: false }, ...todos];
            setTodos(updatedTodo);
            setNewTodo('');
            focusInput();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') addTodo();
    };

    const toggleComplete = (id: number) => {
        const checkTodo = todos.map((todo) => (id === todo.id ? { ...todo, done: !todo.done } : todo));
        setTodos(checkTodo);
    };
    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    return (
        <>
            <h4>To do list.</h4>
            <input type="text" placeholder="To do!" value={newTodo} ref={inputRef} onChange={(e) => setNewTodo(e.target.value)} onKeyDown={handleKeyDown} />
            <input type="button" value="등록" onClick={addTodo} />
            <input type="button" value="focus" onClick={focusInput} />
            <div>
                <h5>To do!</h5>
                <ul>
                    {todos
                        .filter((todo) => todo.done === false)
                        .map((todo) => {
                            return <TodoItem todo={todo} toggle={toggleComplete} key={todo.id} />;
                        })}
                </ul>
            </div>
            <div>
                <h5>Done!</h5>
                <ul>
                    {todos
                        .filter((todo) => todo.done === true)
                        .map((todo) => {
                            return <TodoItem todo={todo} toggle={toggleComplete} key={todo.id} />;
                        })}
                </ul>
            </div>
        </>
    );
}
export default TodoList;
