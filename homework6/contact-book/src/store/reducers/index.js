import { combineReducers } from 'redux';
import contact from './contact';
import contacts from './contactsList';

export default combineReducers({ contacts, contact });