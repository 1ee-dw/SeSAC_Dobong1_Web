interface Todo {
    id: number;
    text: string;
    done: boolean;
}

interface Props {
    todo: Todo;
    toggle: (id: number) => void;
}

export default function TodoItem({ todo, toggle }: Props) {
    return (
        <li key={todo.id}>
            <label htmlFor="">
                {todo.done === false ? <input type="checkbox" onChange={() => toggle(todo.id)} /> : <input type="checkbox" onChange={() => toggle(todo.id)} checked />}
                <span>{todo.text}</span>
            </label>
        </li>
    );
}
