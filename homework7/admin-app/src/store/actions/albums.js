import api from "../../api";

export const SET_ALBUMS = "SET_ALBUMS";
export const getAlbums = () => (dispatch) => {
  api.get("albums").then((resp) =>
    dispatch({
      type: SET_ALBUMS,
      payload: resp.data,
    })
  );
};
