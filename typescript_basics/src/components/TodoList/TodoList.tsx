import React from 'react';
import {Todo} from '../../App';

interface TodoListProps {
    todo: Todo;
    someFunction: (value: number | string) => number | string;
    dumbFunction: () => void;
}

export const TodoList: React.FC<TodoListProps> = ({todo, someFunction, dumbFunction}) => {
    return (
        <li>
            <label>
                <input type="checkbox"/>
                {todo.text}
                {someFunction('some string value')}
                {dumbFunction()}
            </label>
        </li>
    )
}