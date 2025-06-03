import React from 'react';
import TodoItem from './TodoItem';
import './Todo.css';
const TodoLists = ({todos}) => {
  return (
    <div className="todo-list">
                {todos.map((item) => (
                    <TodoItem 
                        key={item} 
                        item={item}
                    />
                ))}
     </div>
  )
}

export default TodoLists
