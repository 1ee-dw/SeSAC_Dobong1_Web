interface GTodo<T> {
    id: number;
    text: T;
    done: boolean;
}

interface Props<T> {
    todos: GTodo<T>[];
    toggle: (id: number) => void;
}

export default function GenericItem<T>({ todos, toggle }: Props<T>) {
    return (
        <>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li>
                            <label htmlFor="">
                                <input type="checkbox" onChange={() => toggle(todo.id)} />
                                {String(todo.text)}
                            </label>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
