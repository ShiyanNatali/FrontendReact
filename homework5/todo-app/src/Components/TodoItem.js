import React from 'react'

function TodoItem({ text, completed, toggleTodo, deleteTodo}) {   
    return (
        <li 
            onClick={toggleTodo}
            style={getElementStyling(completed)}
        >
            {text}
            <span 
                onClick={deleteTodo}
                style={stylingSpan}
            >
                x
            </span>
        </li>
    )
}

export default TodoItem;

const stylingLi = {
    textAlign: 'left',
    padding: '7px 20px',
    marginBottom: '10px',
    borderRadius: '5px',
    boxShadow:'2px -2px 5px 0 rgba(0,0,0,.1), -2px -2px 5px 0 rgba(0,0,0,.1),2px 2px 5px 0 rgba(0,0,0,.1),-2px 2px 5px 0 rgba(0,0,0,.1)',
    fontSize: '16px',
    letterSpacing: '1px',
    transition: '0.3s all linear',
}

const stylingSpan = {
    float: 'right',
    color: 'red',
}

function getElementStyling(valid) {
    const styling = {backgroundColor: valid ? '#59ba5d' : 'yellow'};
    return {...styling, ...stylingLi};
}
