import React from 'react';
import TodoItem from './TodoItem';
import './Todo.css';
const TodoLists = ({todos, setTodos}) => {
  return (
    <div className="todo-list">
                {todos.map((item) => (
                    <TodoItem 
                        key={item} 
                        item={item}
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
     </div>
  )
}

export default TodoLists
