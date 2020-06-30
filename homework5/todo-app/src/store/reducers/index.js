import { TOGGLE_TODO, ADD_TODO, REMOVE_TODO, INPUT_CHANGE } from '../actions';

const initialState = {
    todos: [
        {
            id: 1,
            text: 'Do something 1',
            completed: true,
        },
        {
            id: 2,
            text: 'Do something 2',
            completed: false
        }
    ],
    newTaskText: '',
};

export default function (state = initialState, { type, payload }) {
    
    switch(type){
        case TOGGLE_TODO:
            return {...state, 
                    todos: state.todos.map(todo =>
                    (todo.id === payload ? { ...todo, completed: !todo.completed } : todo)
            )};
        case ADD_TODO:
            return { ...state, todos: [ ...state.todos, payload]};
        case REMOVE_TODO:
            return  {...state, todos: state.todos.filter(todo =>(todo.id !== payload))};
        case INPUT_CHANGE:{
            return { ...state, newTaskText: payload};
        }
        default: 
            return state;
    }
}
