import api from "../../api";

export const SET_USERS = "SET_USERS";
export const SET_LOADING = "SET_LOADING";
export const getUsers = () => (dispatch) => {
  api.get("users").then((resp) => {
    dispatch({
      type: SET_USERS,
      payload: resp.data,
    });
    dispatch({
      type: SET_LOADING,
      payload: true,
    });
  });
};

export const DELETE_USER = "DELETE_USER";
export const deleteUser = (id) => (dispatch) => {
  api.delete("users/" + id).then(() =>
    dispatch({
      type: DELETE_USER,
      payload: id,
    })
  );
};

export const UPDATE_USER = "UPDATE_USER";
export const CREATE_USER = "CREATE_USER";
export function saveFormUser(changes) {
  return function (dispatch) {
    if (changes.id) {
      api.put("users/" + changes.id, changes).then((resp) =>
        dispatch({
          type: UPDATE_USER,
          payload: resp.data,
        })
      );
    } else {
      api.post("users", changes).then((resp) =>
        dispatch({
          type: CREATE_USER,
          payload: resp.data,
        })
      );
    }
  };
}
