import React, { Component } from 'react'
import ContactBookList from './ContactBookList'
import ContactBookForm from './ContactBookForm'

export default class ContactBook extends Component {
    state = {
        contacts: [
            { id: 1, firstName: 'Ivan', lastName: 'Petrov', phone: '050 456 7111' },
            { id: 2, firstName: 'Alice', lastName: 'Selezneva', phone: '095 456 6793' },
            { id: 3, firstName: 'Peter', lastName: 'Sidorov', phone: '067 334 4677' },
            { id: 4, firstName: 'Marina', lastName: 'Ivanova', phone: '066 434 3433' },
        ]
    };
    addNewContact = (newContact) => {
        newContact.id = Date.now();
        this.setState({
            contacts: [...this.state.contacts, newContact],
        });
    };

    DeleteContact = (id) => {
        this.setState({
            contacts: this.state.contacts.filter((item) => item.id !== id),
        });
    };

    render() {
        return (
            <>
                <div style={stylingDiv}>
                    <ContactBookList 
                        contacts={this.state.contacts}
                        onDelete={this.DeleteContact} 
                    />
                    <ContactBookForm onSubmit={this.addNewContact}/> 
                </div>
            </>
        )
    }
}

const stylingDiv = {
    margin: '0 auto',
    width: '500px'
}