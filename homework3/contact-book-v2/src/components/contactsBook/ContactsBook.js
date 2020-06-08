import React, { Component } from 'react'
import ContactsList from '../contactsList/ContactsList'
import ContactForm from '../contactForm/ContactForm'
import './ContactsBook.css'

export default class ContactsBook extends Component {
    state = {
        contacts: [],
        values: {
            id: '',
            name: '',
            surname: '',
        },
        isValid: {
            name: true,
            surname: true,
        },
        isFormValid: false,
    };

    splitFullName(str) {
        let words = str.split(' ') ;
        if (words[0] !== 'Mrs.' 
            && words[0] !== 'Mr.'
            && words[0] !== 'Ms.'
            ) 
        {
            return {name: words[0], surname: words.slice(1).join(' ')};
        } else {
            return {name: words[1], surname: words.slice(2).join(' ')};
        }
    }

    getContacts = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => data.map(item => {
                const fullName = this.splitFullName(item.name);  
                return {id: item.id, name: fullName.name, surname: fullName.surname}}))
        .then(contacts => this.setState({contacts: contacts}));
    };
    
    postContact = () => {
        const userName = this.state.values.name+' '+this.state.values.surname;

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({username: userName}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then(response => response.json())
        .then(data => this.addNewContact(data.id) );
    }

    putContact = () => {
        const userName = this.state.values.name+' '+this.state.values.surname;

        fetch(`https://jsonplaceholder.typicode.com/users/${this.state.values.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: this.state.values.id,
                username: userName,
            }),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(data => this.modifyContact(data))
        .catch(err => console.log(`not found contact  `, err));    
    }

    deleteContact = (contactId) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${contactId}`, {
            method: 'DELETE'
        })
        .catch(err => console.log(`not found contact ${contactId} `, err));
    }

    componentDidMount() {
        console.log('Component Contact Book did mount!')
            this.getContacts();
    };

    addNewContact = (contactId) => {
        const contact = this.state.values;
        
        const id = this.state.contacts[this.state.contacts.length - 1].id + 1;
        contact.id = id; // Date.now();           

        this.setState({
            contacts: [...this.state.contacts, contact],
        });  
    }

    modifyContact = (data) => {
        const contact = this.state.values || data;
        const index = this.state.contacts.findIndex(item => item.id === contact.id);
        this.setState({
            contacts: [
                ...this.state.contacts.slice(0, index),
                contact,
                ...this.state.contacts.slice(index + 1)
            ],
        });
    }

    onClickContact = (contactId) => {
        this.setState({
            values: this.state.contacts.filter((item) => (item.id === contactId))[0],
            isValid: {
                name: true,
                surname: true,
            },
            isFormValid: true,
        });   
    }

    onAddNewContact = () => {
        this.setState({
            values: {
                id: '', 
                name: '', 
                surname: '',
            },
            isValid: {
                name: false,
                surname: false,
            },
            isFormValid: false,
        });
    }

    onFormSave = (e) => {
        e.preventDefault();

        if (!this.state.values.id) {
            this.postContact(); 
        } else {
            this.putContact();
        }    
    };

    onDelete = (contactId) => {
        this.deleteContact(contactId);
        this.setState({
            contacts: this.state.contacts.filter(({ id }) => id !== contactId),
            values: {
                id: '', 
                name: '', 
                surname: '',
            },
        });
    };

    chooseContact(contactId) {
        return contactId ? this.state.contacts.filter((item) => (item.id === contactId))[0] : {id: '', name: '', surname: '',};
    }

    validateInput(name, value) {
        const isValid = {
            ...this.state.isValid,
            [name]: this.isValueValid(name, value),
        };

        this.setState({
            isValid,
            isFormValid: !Object.keys(isValid).find((key) => !isValid[key]),
        });
    }

    isValueValid(name, value) {
        switch (name) {
            case 'name':
            case 'surname':
                return !!value;
            default: break;
        };
    }

    onInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            values: {
                ...this.state.values,
                [name]: value,
            },
        });
        
        this.validateInput(name, value);
    };

    render() {        
        return (
            <div className="container">
                <ContactsList 
                    contacts={this.state.contacts}
                    onClickContact={this.onClickContact}
                    onClickAdd={this.onAddNewContact}
                />
                <ContactForm 
                    values={this.state.values}
                    validForm={this.state.isFormValid}
                    validInput={this.state.isValid}
                    onInputChange={this.onInputChange}
                    onSave={this.onFormSave}
                    onDelete={this.onDelete}
                />
            </div>
        )
    }
}
