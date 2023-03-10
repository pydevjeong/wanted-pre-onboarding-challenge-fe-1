import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './auth/Login';
import Signup from './auth/Signup';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/create',
    element:<Signup/>
  },
  {
    path:'/createTodo',
    element:<AddTodo/>
  },
  {
    path:'/todoList',
    element:<TodoList/>
  },
  {
    path:'/todos',
    element:<Todo/>
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
