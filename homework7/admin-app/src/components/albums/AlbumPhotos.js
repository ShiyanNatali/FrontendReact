import React from "react";
import { useState, useEffect } from "react";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import { useRouteMatch } from "react-router-dom";
import api from "../../api";

function AlbumPhotos() {
  const [photos, setPhotos] = useState([]);
  const { params } = useRouteMatch();

  useEffect(() => {
    api.get("photos?albumId=" + params.id).then(({ data }) => setPhotos(data));
  }, [params.id]);

  return (
    <>
      <GridList cellHeight={160} cols={3}>
        {photos.map((item) => (
          <GridListTile key={item.id} cols={1}>
            <img src={item.thumbnailUrl} alt={item.title} />
            <GridListTileBar title={item.title} />
          </GridListTile>
        ))}
      </GridList>
    </>
  );
}

export default AlbumPhotos;
