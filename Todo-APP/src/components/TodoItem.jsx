import React from 'react';
import './Todo.css';

const TodoItem = ({item,todos,setTodos}) => {
  const handleDelete = (item) =>{
    console.log("clicked",item);
    setTodos( todos.filter((todo)=> todo !== item ))
   
  }
  return (
   
    <div className="todo-item">
      <input type="checkbox" className="todo-checkbox" />
      <span className="todo-text">{item}</span>
      <button onClick={()=> handleDelete(item)} className="delete-button">×</button>
    </div>
  )
}

export default TodoItem
