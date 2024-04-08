import { TodoProps } from '../../types/interface';

interface Action {
    type: string;
    payload: number | string;
}

const TodoList: TodoProps[] = [];

const INSERT = 'todo/INSERT';
const DELETE = 'todo/DELETE';
const RESET = 'todo/RESET';
const INVALID_INSERT = 'todo/INVALID_INSERT';

export function insertTodo(value: string) {
    if (!value) {
        return {
            type: INVALID_INSERT,
        };
    } else {
        return {
            type: INSERT,
            payload: value,
        };
    }
}
export function deleteTodo(idx: number) {
    return {
        type: DELETE,
        payload: idx,
    };
}
export function reset() {
    return {
        type: RESET,
    };
}

export function todo(state = TodoList, action: Action) {
    switch (action.type) {
        case INSERT:
            return [{ todo: action.payload }, ...state];
        case INVALID_INSERT:
            return state;
        case DELETE:
            return state.filter((_, index) => index !== action.payload);
        case RESET:
            return [];
        default:
            return state;
    }
}
