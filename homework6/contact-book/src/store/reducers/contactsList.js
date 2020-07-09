import {
    ACTION_SET_CONTACTS,
    ACTION_DELETE,
    ACTION_SHOW_FORM,
    ACTION_HIDE_FORM,
    ACTION_SAVE_FORM,
} from '../actions/contactsList';

const initialState = {
    contacts: [],
    isFormVisible: false,
}
function addContact(contacts, contact) {
    return [...contacts, contact];
}

export default function (state = initialState, { type, payload }) {
    switch(type){
        case ACTION_SET_CONTACTS:
            return { ...state, contacts: payload };
        case ACTION_DELETE:
            return {
                ...state, 
                contacts: state.contacts.filter(contact =>(contact.id !== payload))};
        case ACTION_SHOW_FORM:
            return {...state, isFormVisible: payload}
        case ACTION_HIDE_FORM:
            return {...state, isFormVisible: payload}
        case ACTION_SAVE_FORM:
            return {...state, contacts: addContact(state.contacts, payload)}
    default: 
        return state;
    }
}