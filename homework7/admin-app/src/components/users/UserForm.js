import React from "react";
import { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import { saveFormUser } from "../../store/actions/users";

const EMPTY_FORM_VALID = {
  isValid: {
    name: true,
    username: true,
    email: true,
    phone: true,
  },
  formValid: true,
};

function UserForm({ user, saveFormUser }) {
  const history = useHistory();
  const [formItem, setFormItem] = useState(user);
  const [formItemValid, setFormItemValid] = useState(setEmptyValid());

  function setEmptyValid() {
    return { ...EMPTY_FORM_VALID };
  }

  function isValueValid(name, value) {
    switch (name) {
      case "name":
      case "username":
        return !!value;
      case "email":
        return !!value && !!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
      case "phone":
        return (
          !!value &&
          !!value.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g)
        );
    }
  }

  function isFormValid(values) {
    return !Object.keys(values).find((key) => !values[key]);
  }

  useEffect(() => {
    const isValid = {
      name: isValueValid("name", user.name),
      username: isValueValid("username", user.username),
      email: isValueValid("email", user.email),
      phone: isValueValid("phone", user.phone),
    };
    const formValid = isFormValid(isValid);
    setFormItemValid({ isValid, formValid });
  }, [user]);

  function onClickCancel() {
    history.push("/users");
  }

  function onSave() {
    saveFormUser(formItem);
    onClickCancel();
  }

  function onValueChange(e) {
    const changes = {
      [e.target.name]: e.target.value,
    };
    const changesValid = {
      ...formItemValid.isValid,
      [e.target.name]: isValueValid(e.target.name, e.target.value),
    };
    const formValid = isFormValid(changesValid);

    setFormItem({ ...formItem, ...changes });
    setFormItemValid({ isValid: changesValid, formValid });
  }

  return (
    <form noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-basic"
          name="name"
          error={!formItemValid.isValid.name}
          label="Name"
          style={{ margin: 8 }}
          value={formItem.name}
          onChange={onValueChange}
        />
      </div>
      <div>
        <TextField
          id="standard-basic"
          name="username"
          error={!formItemValid.isValid.username}
          label="UserName"
          style={{ margin: 8 }}
          value={formItem.username}
          onChange={onValueChange}
        />
      </div>
      <div>
        <TextField
          id="standard-basic"
          name="email"
          error={!formItemValid.isValid.email}
          label="Email"
          style={{ margin: 8 }}
          value={formItem.email}
          onChange={onValueChange}
        />
      </div>
      <div>
        <TextField
          id="standard-basic"
          name="phone"
          error={!formItemValid.isValid.phone}
          label="Phone"
          style={{ margin: 8 }}
          value={formItem.phone}
          onChange={onValueChange}
        />
      </div>
      <div>
        <Button
          variant="contained"
          disabled={!formItemValid.formValid}
          color="primary"
          size="small"
          style={{ margin: 9 }}
          onClick={(e) => e.stopPropagation() || onSave()}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ margin: 9 }}
          onClick={onClickCancel}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}

const mapStateToProps = (state, props) => {
  const user =
    props.match.params.id === "new"
      ? {
          name: "",
          username: "",
          email: "",
          phone: "",
        }
      : state.users.items.find(
          (user) => Number(user.id) === Number(props.match.params.id)
        );
  return {
    user,
  };
};

const mapDispatchToprops = {
  saveFormUser,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToprops)(UserForm)
);
