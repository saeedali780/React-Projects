import React from 'react';
import './Todo.css';

const TodoItem = ({item, todos, setTodos}) => {
  const handleDelete = (item) => {
    console.log("clicked", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  const handleCheck = (item) => {
    const newArray = todos.map((todo) => 
      todo === item ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray)
  
    
  }

  return (
    <div className="todo-item">
      <input 
        type="checkbox" 
        className="todo-checkbox" 
        checked={item.done}
        onChange={() => handleCheck(item)}
      />
      <span className={`todo-text ${item.done ? 'completed' : ''}`}>{item.name}</span>
      <button onClick={() => handleDelete(item)} className="delete-button">×</button>
    </div>
  )
}

export default TodoItem
