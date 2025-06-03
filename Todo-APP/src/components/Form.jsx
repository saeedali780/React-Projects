import React, { useState } from 'react';
import './Todo.css';

const Form = ({todos,setTodos}) => {
    const [todo, setTodo] = useState('');
   
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo('');        
    }

  return (

    <form className="todo-input-container" onSubmit={handleSubmit}>
    <input 
        type="text" 
        placeholder="Add a new task..."
        className="todo-input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
    />
    <button type="submit" className="add-button">
        Add Task
    </button>
</form>
  )
}

export default Form
