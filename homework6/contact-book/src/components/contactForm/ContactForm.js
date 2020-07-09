import React from 'react';
import { connect } from 'react-redux';

import { hideForm, saveForm } from '../../store/actions/contactsList';
import { inputChange } from '../../store/actions/contact';

import './ContactForm.css';

function ContactForm({ values, isValid, isFormValid, onHideForm, onInputChange, onSaveForm }) {
    return (
        <tr id="contactForm" className="contacts-list-tfoot">
        <td>
            <input
                className={isValid.name ? '' : 'error'}
                type="text"
                name="name"
                autoComplete="off"
                value={values.name}
                onChange={(e) => onInputChange(e.target.name, e.target.value)}
            />
        </td>
        <td>
            <input
                className={isValid.surname ? '' : 'error'}
                type="text"
                name="surname"
                autoComplete="off"
                value={values.surname}
                onChange={(e) => onInputChange(e.target.name, e.target.value)}
            />
        </td>
        <td>
            <input
                className={isValid.phone ? '' : 'error'}
                type="text"
                autoComplete="off"
                name="phone"
                value={values.phone}
                onChange={(e) => onInputChange(e.target.name, e.target.value)}
            />
        </td>
        <td>
            <button
                onClick={()=> onSaveForm(values)}
                disabled={!isFormValid}
            >
                Save
            </button>
            <button onClick={() => onHideForm()}>Cancel</button>
        </td>
    </tr>
    )
}

const mapStateToProps = (state) => (
    {values: state.contact.values, 
    isValid: state.contact.isValid,
    isFormValid: state.contact.isFormValid,
});

const mapDispatchToProps = {
    onHideForm: hideForm,
    onInputChange: inputChange,
    onSaveForm: saveForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
