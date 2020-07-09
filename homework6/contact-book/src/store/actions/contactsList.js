import api from '../../api';
import { resetStateForm } from '../actions/contact';

export const ACTION_DELETE = 'ACTION_DELETE';
export function deleteContact(id) {
    return function (dispatch) {
        api.delete(id).then(() =>
            dispatch({
                type: ACTION_DELETE,
                payload: id,
            })
        );
    };
}

export const ACTION_SHOW_FORM = 'ACTION_SHOW_FORM';
export function showForm() {
    return {
        type: ACTION_SHOW_FORM,
        payload: true,
    };
}

export const ACTION_HIDE_FORM = 'ACTION_HIDE_FORM';
export function hideForm() {
    return function (dispatch) {
        dispatch(resetStateForm());
        dispatch({
            type: ACTION_HIDE_FORM,
            payload: false,
        });
    }
}

export const ACTION_SAVE_FORM = 'ACTION_SAVE_FORM';
export function saveForm(changes) {
    return function (dispatch) {
        api.post('', changes).then((resp) =>
            dispatch({
                type: ACTION_SAVE_FORM,
                payload: resp.data,
            })
        );

        dispatch(hideForm());
    };
}

export const ACTION_SET_CONTACTS = 'ACTION_SET_CONTACTS';
export function setContacts(data) {
    return {
        type: ACTION_SET_CONTACTS,
        payload: data,
    };
}

export function fetchContacts() {
    return function (dispatch) {
        api.get().then((resp) => dispatch(setContacts(resp.data)));
    };
}