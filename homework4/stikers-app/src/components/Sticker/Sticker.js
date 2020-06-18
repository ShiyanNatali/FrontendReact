import React from 'react';
import './Sticker.css';

function Sticker({ item, onSave, onDelete, onChange, onMouseDown}) {

    function onSubmit(e) {
        e.preventDefault();
        onSave(item, e.target.value);
    }

    function onDeleteClick(e) {
        e.stopPropagation();
        onDelete(item.id);
    }

    function onChangeDescription(e) {
        e.stopPropagation();
        onChange(item, e.target.value);
    }

    function mouseDown(e) {
        onMouseDown(e,item);
    }

    return (
        <div 
            className="container-sticker" 
            style={{ top: item.y + 'px', left: item.x + 'px'}}
            onDragStart={() => false}
        >
            <span className="move" onMouseDown={mouseDown}>o</span>
            <span className="delete" onClick={onDeleteClick}>x</span>
            <form action="" >
                <textarea rows="10" cols="30" 
                    value={ item.description } 
                    onChange={ onChangeDescription } 
                    onBlur={onSubmit}>
                </textarea>
            </form>
        </div>
    )
}

export default Sticker
