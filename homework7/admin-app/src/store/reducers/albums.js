import { SET_ALBUMS } from "../actions/albums";

const initialState = {
  items: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_ALBUMS:
      return { ...state, items: payload };
    default:
      return state;
  }
}
