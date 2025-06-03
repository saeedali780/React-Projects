import React from 'react';
import './Todo.css';

const Header = () => {
  return (
    <>
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
    </>
  )
}

export default Header
