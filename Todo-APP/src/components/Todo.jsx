import React from 'react';
import './Todo.css';
import { useState } from 'react';
import TodoItem from './TodoItem';

const Todo = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo('');        
    }

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            
            <div className="todo-stats">
                <div className="stat-item">
                    <span className="stat-label">Total Todos:</span>
                    <span className="stat-value">3</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Completed:</span>
                    <span className="stat-value">1</span>
                </div>
            </div>

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

            <div className="todo-list">
                {todos.map((item) => (
                    <TodoItem 
                        key={item} 
                        item={item}
                    />
                ))}
            </div>
        </div>
    )
}

export default Todo
