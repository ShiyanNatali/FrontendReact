import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableFooter,
  TableBody,
  Paper,
  Button,
} from "@material-ui/core";
import { useHistory, useRouteMatch, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { deleteUser } from "../../store/actions/users";
import UsersItem from "./UsersItem";

function UsersList({ users, deleteUser }) {
  const history = useHistory();
  const { url } = useRouteMatch();

  function onAddButtonClick() {
    history.push(url + "/new");
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table size="small" stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">UserName</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <UsersItem user={user} key={user.id} onDelete={deleteUser} />
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell align="center" colSpan="5">
                <Button
                  variant="contained"
                  component={NavLink}
                  to={url + "/new"}
                  color="primary"
                  size="small"
                  onClick={onAddButtonClick}
                >
                  Add User
                </Button>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}

const mapStateToProps = ({ users: { items } }) => ({
  users: items,
});

const mapDispatchToprops = {
  deleteUser,
};

export default connect(mapStateToProps, mapDispatchToprops)(UsersList);
