import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, insertTodo, reset } from '../store/modules/todo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
function TodoList() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const todolist = useSelector((state: any) => state.todo);
    const insert = () => {
        dispatch(insertTodo(value));
        setValue('');
    };

    return (
        <>
            <h1>할 일 적기</h1>
            <div>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                {!value ? (
                    <div>
                        <span>한 글자 이상 작성해주세요</span>
                    </div>
                ) : null}
            </div>
            <input type="button" value="등록" onClick={insert} />
            <input type="button" value="초기화" onClick={() => dispatch(reset())} />
            <ul>
                {todolist.map((todo: any, idx: any) => (
                    <li key={idx}>
                        <span>{todo.todo} </span>
                        <input type="button" value="삭제" onClick={() => dispatch(deleteTodo(idx))} />
                        <span>
                            <FontAwesomeIcon icon={faTrash} onClick={() => dispatch(deleteTodo(idx))} />
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;
