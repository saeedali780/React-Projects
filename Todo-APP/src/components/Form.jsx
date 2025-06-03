import React, { useState } from 'react';
import './Todo.css';

const Form = ({todos,setTodos}) => {
    const [todo, setTodo] = useState({name:"",done:false});
   
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name:"",done:false});        
    }

  return (

    <form className="todo-input-container" onSubmit={handleSubmit}>
    <input 
        type="text" 
        placeholder="Add a new task..."
        className="todo-input"
        value={todo.name}
        onChange={(e) => setTodo({name: e.target.value, done: false})}
    />
    <button type="submit" className="add-button">
        Add Task
    </button>
</form>
  )
}

export default Form
