import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";
import { connect } from "react-redux";
import AlbumsItem from "./AlbumsItem";

function AlbumsList({ albums }) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table size="small" stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Album Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {albums.map((album) => (
              <AlbumsItem album={album} key={album.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const mapStateToProps = (state) => {
  const albums = state.albums.items
    .map((item) => {
      const user = state.users.items.find((user) => user.id === item.userId);
      return {
        ...item,
        name: user ? user.name : null,
      };
    })
    .filter((album) => album.name !== null);

  return { albums };
};

export default connect(mapStateToProps)(AlbumsList);
