import React from "react";
import { TableRow, TableCell, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory, useRouteMatch } from "react-router-dom";

function UsersItem({ user, onDelete }) {
  const history = useHistory();
  const { url } = useRouteMatch();

  function onRowClick() {
    history.push(url + "/" + user.id);
  }

  return (
    <TableRow onClick={onRowClick}>
      <TableCell component="th" scope="row">
        {user.name}
      </TableCell>
      <TableCell align="right">{user.username}</TableCell>
      <TableCell align="right">{user.email}</TableCell>
      <TableCell align="right">{user.phone}</TableCell>
      <TableCell align="right">
        <IconButton aria-label="edit" onClick={onRowClick}>
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={(e) => e.stopPropagation() || onDelete(user.id)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default UsersItem;
