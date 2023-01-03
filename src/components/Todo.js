import React from 'react';
import { Link } from 'react-router-dom';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const Todo = () => {
  return (
    <>
      <AddTodo/>
      <TodoList/>
    </>
  );
};

export default Todo;