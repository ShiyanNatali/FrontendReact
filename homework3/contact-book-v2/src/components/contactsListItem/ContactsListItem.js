import React, { Component } from 'react'

export default class ContactsListItem extends Component {

    render() {
        const { contact } = this.props;
        return (
            <tr onClick={this.props.onClickContact.bind(null, contact.id)}>
                <td>{contact.name}</td>
                <td>{contact.surname}</td>
            </tr>
        )
    }
}