import {
    INPUT_CHANGE,
    RESET_STATE_FORM,
} from '../actions/contact';

const initialState = {
    values: {
        name: 'Name',
        surname: 'Surname',
        phone: 'Phone',
    },
    isValid: {
        name: true,
        surname: true,
        phone: true,
    },
    isFormValid: true,
};

function getInitialState() {
    return {...initialState};
}

function  validateInput({ name, value }) {
    const inputValid = {
        [name]: isValueValid(name, value),
    };

    return {
        inputValid,
        formValid: !Object.keys(inputValid).find((key) => !inputValid[key]),
    };
}

function isValueValid(name, value) {
    switch (name) {
        case 'name':
        case 'surname':
            return !!value;
        case 'phone':
            return (
                !!value &&
                value.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g)
            );
    }
}

export default function (state = initialState, { type, payload }) {
    switch(type){
        case INPUT_CHANGE:{
            const {inputValid, formValid} = validateInput(payload);

            return { ...state, 
                    values:{
                        ...state.values, 
                        [payload.name]: payload.value,
                    },
                    isValid: {
                        ...state.isValid,
                        ...inputValid,
                    },
                    isFormValid: formValid,
                    };
        };
        case RESET_STATE_FORM:{
            const resetState = getInitialState();
            return {
                ...state,
                ...resetState,
            };
        }
        default: 
            return state;
    }
}