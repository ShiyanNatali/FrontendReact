import React, { Component } from 'react'
import ContactBookListItem from './ContactBookListItem'

export default class ContactBookList extends Component {
    render() {
        return (
            <ul style = {styling}>
            {this.props.contacts.map((item) => (
                <ContactBookListItem 
                    key={item.id} 
                    item={item} 
                    onDelete={this.props.onDelete}
                />
            ))}
        </ul>
        );
    }
}

const styling = {
    listStyle: 'none',
    padding: '1em',
}