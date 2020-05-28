import React, { Component } from 'react'

export default class ContactBookForm extends Component {
    state = {
        contact: {
            firstName: '',
            firstNameValid: false,
            lastName: '',
            lastNameValid: false,
            phone: '',
            phoneValid: false,
        },
        hideElement: true,
        disabledButton: true,
    };

    validateInput(value) {
        return value.length>0;
    }

    changeContact = (val, key) => {
        const valid = this.validateInput(val);
        const keyValid = key + 'Valid';

        this.setState({ 
            contact: {...this.state.contact, [key]: val, [keyValid]: valid},
        });  
    }

    toggleStateBtn = () => {
        const stateBtn  = this.state.contact.firstNameValid && this.state.contact.lastNameValid && this.state.contact.phoneValid;

        this.setState({ 
            disabledButton: !stateBtn,
        });
    }

    onFirstNameChange = (e) => {
        const val = e.target.value;

        this.changeContact(val, 'firstName');
        this.toggleStateBtn();
    }

    onLastNameChange = (e) => {
        const val = e.target.value;

        this.changeContact(val, 'lastName');
        this.toggleStateBtn();
    }

    onPhoneChange= (e) => {
        const val = e.target.value;

        this.changeContact(val, 'phone');
        this.toggleStateBtn();
    }

    onClickButtonNew = () => {
        this.setState({
            hideElement: !this.state.hideElement,
        });
    }

    clearState = () => {
        this.setState({
            hideElement: !this.state.hideElement,
            disabledButton: true,
            contact: {
                firstName: '',
                firstNameValid: false,
                lastName: '',
                lastNameValid: false, 
                phone: '',
                phoneValid: false,
            },
        });       
    }
    onClickButton = () => {
        this.clearState();
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        
        this.props.onSubmit({
            firstName: this.state.contact.firstName,
            lastName: this.state.contact.lastName,
            phone: this.state.contact.phone,
        });
        this.clearState();
    }

    getElementStyling(valid) {
        const styling = { ...ELEMENT_STYLING};
        if (valid) {
            styling.border = '1px solid #ccc';
        }
        return {...styling, ...stylingInput};
    };

    getElementStylingHide = (changeEl, styleEl, styleD) => {
        return changeEl ? styleEl : styleD;
    }

    render() {
        const contactPerson = this.state.contact;
        
        return (
            <div style = { stylingDiv }>
                <button onClick = {this.onClickButtonNew} 
                style={this.getElementStylingHide(this.state.hideElement,btnActive,stylingDisplay)}
                >
                    Add new contact
                </button>
                <form onSubmit={this.onFormSubmit} style={this.getElementStylingHide(this.state.hideElement, stylingDisplay, stylingForm)}>
                    <input 
                        autoComplete="off"
                        type="text" 
                        name="firstName" 
                        value={contactPerson.firstName}
                        placeholder='Name'
                        style={this.getElementStyling(contactPerson.firstNameValid)} 
                        onChange = {this.onFirstNameChange}
                    />
                    <input 
                        autoComplete="off"
                        type="text" 
                        name="lastName" 
                        value={contactPerson.lastName}
                        placeholder='Surname'
                        style={this.getElementStyling(contactPerson.lastNameValid)} 
                        onChange = {this.onLastNameChange}
                    />
                    <input 
                        autoComplete="off"
                        type="tel" 
                        name="phone" 
                        value={contactPerson.phone}
                        pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                        placeholder='Phone'
                        style={this.getElementStyling(contactPerson.phoneValid)} 
                        onChange = {this.onPhoneChange}
                        title = '### ### ####'
                    />
                    <button
                        disabled= {this.state.disabledButton}
                        type="submit"
                        style={this.getElementStylingHide(this.state.disabledButton, stylingBtnDisabled, btnActive)}
                        >
                            Add
                    </button>
                    <button 
                        onClick = {this.onClickButton} 
                        type="reset"
                        style={btnActive}
                        >
                            Cancel
                    </button>
                </form>
        </div>
        )
    }
}

const ELEMENT_STYLING = {
    border: '2px solid #f05d22',
}
const stylingDisplay = { display: 'none' }

const stylingDiv = {
    display: 'flex',
    justifyContent: 'center',
}

const stylingBtnActive = {
    boxShadow: '0px 1px 0px 0px #f0f7fa',
	background:'linear-gradient(to bottom, #33bdef 5%, #019ad2 100%)',
	backgroundColor:'#33bdef',
	border:'1px solid #057fd0',
	color:'#ffffff',
    textShadow:'0px -1px 0px #5b6178',
}

const stylingBtn = {
	borderRadius:'6px',
	fontSize:'15px',
	fontWeight:'bold',
	padding:'6px 24px',
	textDecoration:'none',
    margin: '5px',
}

const stylingBtnDisabled = {
    boxShadow: '0px 1px 0px 0px #ffffff',
	background:'linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%)',
	backgroundColor:'#ffffff',
	borderRadius:'6px',
	border:'1px solid #dcdcdc',
	color:'#666666',
	fontSize:'15px',
	fontWeight:'bold',
	padding:'6px 24px',
	textDecoration:'none',
    textShadow:'0px -1px 0px #ffffff',
    margin: '5px',
}

const btnActive = {...stylingBtn, ...stylingBtnActive}

const stylingForm ={
    borderRadius: '5px',
    background: '#ffffff',
    margin: '0 auto',
    padding: '1em',
    boxShadow:' 0px 0px 15px rgba(0, 0, 0, 0.22)',
    width: '90%',
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
}

const stylingInput = {
    boxSizing: 'border-box',
	display: 'block',
	width: '100%',
	padding: '3%',
	background: 'transpaent',
	marginBottom: '4%',
	height: '45px',
}
