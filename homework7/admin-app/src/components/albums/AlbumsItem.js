import React from "react";
import { TableRow, TableCell } from "@material-ui/core";
import { useHistory, useRouteMatch } from "react-router-dom";

function AlbumsItem({ album }) {
  const history = useHistory();
  const { url } = useRouteMatch();

  function onRowClick() {
    history.push(url + "/" + album.id);
  }

  return (
    <TableRow onClick={onRowClick}>
      <TableCell component="th" scope="row">
        {album.name}
      </TableCell>
      <TableCell align="right">{album.title}</TableCell>
    </TableRow>
  );
}

export default AlbumsItem;
