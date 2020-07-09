import React from 'react';
import { connect } from 'react-redux';

import ContactsListItem from '../contactsListItem/ContactsListItem';
import ContactForm from '../contactForm/ContactForm'
import { deleteContact, showForm } from '../../store/actions/contactsList';

import './ContactsList.css';


function ContactsList({ contacts, isFormVisible, onDeleteContact, onShowForm }) {
    return (
        <>
            <table className="contacts-list">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody> 
                {contacts.map((contact) => (
                        <ContactsListItem
                            contact={contact}
                            key={contact.id}
                            onDelete={onDeleteContact}
                        />
                    ))}
                </tbody>
                <tfoot>
                    {isFormVisible ? (
                        <ContactForm />
                    ) : (
                        <tr>
                            <td colSpan="5">
                                <button onClick={() => onShowForm()}>
                                    Add new contact
                                </button>
                            </td>
                        </tr>
                    )} 
                </tfoot>
            </table>
        </>
    )
}

const mapStateToProps = (state) => (
    {contacts: state.contacts.contacts, 
    isFormVisible: state.contacts.isFormVisible,
});

const mapDispatchToProps = {
    onDeleteContact : deleteContact, 
    onShowForm: showForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
