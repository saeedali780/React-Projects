import React from 'react';
import TodoItem from './TodoItem';
import './Todo.css';
const TodoLists = ({todos, setTodos}) => {
  const sortedTodos = todos.slice().sort((a,b)=> Number(a.done) - Number(b.done));
  return (
    <div className="todo-list">
                {sortedTodos.map((item) => (
                    <TodoItem 
                        key={item.name} 
                        item={item}
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
     </div>
  )
}

export default TodoLists
