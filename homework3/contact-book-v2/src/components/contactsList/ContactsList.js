import React, { Component } from 'react'
import ContactsListItem from '../contactsListItem/ContactsListItem'

import "./ContactsList.css"

export default class ContactsList extends Component {
    render() {
        return (
            <table className="contacts-list" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.contacts.map((contact) => (
                        <ContactsListItem
                            contact={contact}
                            key={contact.id}
                            onClickContact={this.props.onClickContact}
                        ></ContactsListItem>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">
                            <button 
                                className="contacts-button"
                                onClick={this.props.onClickAdd}
                            >
                                Add contact
                            </button>
                        </td>
                    </tr>
                </tfoot>
        </table>
        )
    }
}
