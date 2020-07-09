import React from 'react'

function ContactsListItem({ contact, onDelete }) {
    return (
        <tr>
        <td>{contact.name}</td>
        <td>{contact.surname}</td>
        <td>{contact.phone}</td>
        <td>
            <button
                onClick={e => e.stopPropagation() || onDelete(contact.id)}
            >
                Delete
            </button>
        </td>
    </tr>
    )
}

export default ContactsListItem;
