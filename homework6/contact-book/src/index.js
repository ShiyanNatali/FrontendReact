import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './store';
import { Provider } from 'react-redux';
import { fetchContacts } from './store/actions/contactsList';

store.dispatch(fetchContacts());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById("root")
);