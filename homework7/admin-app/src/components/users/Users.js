import React from "react";
import { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { Paper, CircularProgress } from "@material-ui/core";
import UsersList from "./UsersList";
import UserForm from "./UserForm";
import { getUsers } from "../../store/actions/users";

function Users({ loading, getUsers }) {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const { path } = useRouteMatch();

  return (
    <Paper>
      <Switch>
        <Route path={path} exact>
          {!loading && <CircularProgress size={24} />}
          <UsersList />
        </Route>
        <Route path={path + "/:id"}>
          <UserForm />
        </Route>
      </Switch>
    </Paper>
  );
}

const mapStateToProps = ({ users: loading }) => loading;

const mapDispatchToprops = {
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToprops)(Users);
