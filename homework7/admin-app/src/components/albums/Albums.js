import React from "react";
import { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import { getAlbums } from "../../store/actions/albums";
import AlbumsList from "./AlbumsList";
import AlbumPhotos from "./AlbumPhotos";

function Albums({ getAlbums }) {
  useEffect(() => {
    getAlbums();
  }, [getAlbums]);

  const { path } = useRouteMatch();

  return (
    <Paper>
      <Switch>
        <Route path={path} exact>
          <AlbumsList />
        </Route>
        <Route path={path + "/:id"}>
          <AlbumPhotos />
        </Route>
      </Switch>
    </Paper>
  );
}

const mapDispatchToprops = {
  getAlbums,
};

export default connect(null, mapDispatchToprops)(Albums);
