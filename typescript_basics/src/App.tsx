import React from 'react';
import { TodoList } from './components/TodoList/TodoList';

export interface Todo {
  author: {
    name: string;
    surname: string;
  };
  isDone: boolean;
  text: string;
}

export const App: React.FC = () => {
  const todo: Todo = {
    author: {
      name: 'Martyna',
      surname: 'Stosik',
    },
    isDone: false,
    text: 'do shopping',
  }

  const someFunction = (value: number | string) => {
    return value
  }

  const dumbFunction = () => {
    alert("I'm dumb!")
  }

  return (
    <TodoList todo={todo} someFunction={someFunction} dumbFunction={dumbFunction} />
  );
}