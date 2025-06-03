import React, { useState } from 'react';
import './Todo.css';
import TodoLists from './TodoLists';
import Form from './Form';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
const Todo = () => {
    const [todos, setTodos] = useState([]);

    return (
        <div className="todo-container">
           <Header />
            <Form todos={todos} setTodos={setTodos}/>
           <TodoLists todos={todos} setTodos={setTodos}  />
           <Footer/>
        </div>
    )
}

export default Todo
