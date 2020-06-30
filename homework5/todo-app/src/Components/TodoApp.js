import React from 'react';
import { connect } from 'react-redux';
import { onToggle, onDelete, onAdd, onInputChange } from '../store/actions';

import TodoForm from './TodoForm';
import TodoList from './TodoList';


function TodoApp({todos, newTaskText, onToggle, onDelete, onAdd, onInputChange}) {
    return (
        <div style={stylingTodoApp}>
            <h1>TODOS</h1>
            <TodoList 
                todos = {todos}
                onToggle={onToggle}
                onDelete={onDelete}
            />
            <TodoForm 
                taskText={newTaskText}
                addTodo={onAdd}
                onChange={onInputChange}
            />
        </div>
    )
}

const mapStateToProps = ({todos, newTaskText}) => ({todos, newTaskText});

const mapDispatchToProps = {
    onToggle,
    onDelete, 
    onAdd,
    onInputChange,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);

const stylingTodoApp = {
    margin: '0 auto',
    width: '500px',
    textAlign: 'center',
}