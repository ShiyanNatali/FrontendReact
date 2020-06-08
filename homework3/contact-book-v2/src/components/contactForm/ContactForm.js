import React, { Component } from 'react'
import './ContactForm.css'

export default class ContactForm extends Component {
    render() {       
        const { values, validInput } = this.props;
        
        return (
            <form className="contact-form" key={values.id}>
                <h2>Contact</h2>
                <input
                    className={validInput.name ? '' : 'error'}
                    autoComplete="off"
                    type="text"    
                    name="name"
                    value={values.name}
                    onChange={this.props.onInputChange.bind(this)}
                />
                <input
                    className={validInput.surname ? '' : 'error'}
                    autoComplete="off"
                    type="text"    
                    name="surname"
                    value={values.surname}
                    onChange={this.props.onInputChange.bind(this)}
                />
                <button
                    className="contacts-button"
                        onClick={this.props.onSave}
                        disabled={!this.props.validForm}
                >
                    Save
                </button>
                <button
                    className="button-delete" 
                    onClick={this.props.onDelete.bind(null, values.id)}
                    disabled={!values.id}
                >
                    Delete
                </button>
            </form>
        )
    }
}
