import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos , onToggle, onDelete}) {
    return (
        <ul style={stylingUl}>
            {todos.map((todo) => 
                (<TodoItem 
                    key={todo.id} 
                    {...todo} 
                    toggleTodo={() => onToggle(todo.id)}
                    deleteTodo={() => onDelete(todo.id)}
                />)
            )}
        </ul>
    )
}

export default TodoList;

const stylingUl = {
    float: 'clear',
    listStyle: 'none',
    padding: '1em',
}
