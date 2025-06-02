import React from 'react';
import './Todo.css';
import { useState } from 'react';


const Todo = () => {
    const [todo, setTodo] = useState('');
  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      
      <form className="todo-input-container">
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

      <div className="todo-list">
        <div className="todo-item">
          <input type="checkbox" className="todo-checkbox" />
          <span className="todo-text">Learn React</span>
          <button className="delete-button">×</button>
        </div>
        
        <div className="todo-item">
          <input type="checkbox" className="todo-checkbox" />
          <span className="todo-text">Build Todo App</span>
          <button className="delete-button">×</button>
        </div>
        
        <div className="todo-item">
          <input type="checkbox" className="todo-checkbox" />
          <span className="todo-text">Practice JavaScript</span>
          <button className="delete-button">×</button>
        </div>
      </div>
    </div>
  )
}

export default Todo
