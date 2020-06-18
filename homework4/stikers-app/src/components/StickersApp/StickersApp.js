import React, { useState, useEffect } from 'react';
import api from '../../api';
import Sticker from '../Sticker/Sticker';
import './StickersApp.css';

const EMPTY_STICKER = {
    id: '',
    x: 10,
    y: 90,
    description: '',
}

function StickersApp() {
    const [stickers, setStickers] = useState([]);
    const [dragItem, setDragItem] = useState();

    useEffect(() => {
        api.get('').then(({ data }) => setStickers(data));
    }, []);


    function getEmptySticker() {
        return { ...EMPTY_STICKER };
    }

    function onClickBtn() {
        api.post('', getEmptySticker())
        .then(({ data }) => setStickers([...stickers, data])); 
    };

    function onSave(sticker, description) {
        api.put(sticker.id, {...sticker, description});
    };

    function onDelete(stickerId) {
        api.delete('/'+stickerId);
        setStickers(
            stickers.filter((item) => (item.id !== stickerId))
        );
    }

    function onChange(sticker, newDescription) {
        setStickers(
            stickers.map((item) => (item.id === sticker.id ? {...item, description: newDescription} : item))
        );
    }
    
    function onMouseDown(e,sticker) {
        e.preventDefault();
        setDragItem(sticker);
    }

    function onMouseUp() {
        if (dragItem) {
        console.log('onMouseUp'); 
            api.put(dragItem.id, {...dragItem, x: dragItem.x, y: dragItem.y});
        setDragItem(); 
        }
    }

    function onMouseMove(e) {
        if (dragItem) {
            setDragItem({...dragItem,x: e.pageX, y: e.pageY})
            setStickers(stickers.map((item) => 
                    (item.id === dragItem.id ? {...item, x: e.pageX, y: e.pageY} : item)));
        }  
    }

    return (
        <div onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
        >
            <header>
                <h1>Stickers App</h1>
                <button onClick={onClickBtn}>New add</button>
            </header>
            <div className='container'>
                {stickers.map((item) => (
                        <Sticker 
                            key={item.id} 
                            item={item}
                            onSave={onSave}
                            onDelete={onDelete}
                            onChange={onChange}
                            onMouseDown={onMouseDown}
                        />
                ))}
            </div>
        </div>
    )
}

export default StickersApp
