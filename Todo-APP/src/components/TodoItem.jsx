import React from 'react'

const TodoItem = ({item}) => {
  return (
    <div className="todo-list">
    <div className="todo-item">
      <input type="checkbox" className="todo-checkbox" />
      <span className="todo-text">{item}</span>
      <button className="delete-button">×</button>
    </div>
    </div>
  )
}

export default TodoItem
