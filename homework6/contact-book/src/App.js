import React from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link,
} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About'
import ContactsList from './components/contactsList/ContactsList';


function App() {
    return (
    <Router>
    <header>
    <h1 className="App-header">Contacts App</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/contactsList">Contacts</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </header>
    <Switch>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/contactsList">
            <ContactsList />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="*">
            <Redirect to="/" />
        </Route>
    </Switch>
</Router>
  );
}

export default App;
