import React from 'react'

function TodoForm({ taskText, addTodo, onChange}) {

    function onFormSubmit(e) {

        e.preventDefault();
        const todoText = e.target.taskText.value;
        if (todoText) {
            const todo = {
                id: Date.now(),
                text: todoText,
                completed: false,
            }; 
            addTodo(todo);
        }
        onChange('');
    };

    return (
        <form onSubmit={onFormSubmit}>
        <input 
            style={stylingInput}
            autoComplete="off"
            type="text" 
            name="taskText" 
            value={taskText}
            onChange={(e) => onChange(e.target.value)}
        />
        <button style={stylingBtn}>Add</button>
    </form>
    )
}

export default TodoForm;

const stylingBtn = {
	borderRadius:'6px',
	fontSize:'15px',
	fontWeight:'bold',
	padding:'6px 24px',
	textDecoration:'none',
    marginLeft: '5px',
    boxShadow: '0px 1px 0px 0px #a8cfc4',
    backgroundColor:'#84c2b0',
    border:'1px solid #95e2cc',
    cursor:'pointer',
    color:'#ffffff',
    textShadow:'0px -1px 0px #3ad6aa',
    outline: 'none',
}

const stylingInput = {
    boxSizing: 'border-box',
    padding: '7px 20px',
    borderRadius: '5px',
	background: 'transparent',
    height: '32px',
    width: '77%',
}
