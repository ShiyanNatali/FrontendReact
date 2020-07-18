import {
  SET_USERS,
  DELETE_USER,
  UPDATE_USER,
  CREATE_USER,
  SET_LOADING
} from "../actions/users";

const initialState = {
  items: [],
  loading: false,
};

function updateUser(users, user) {
  return users.map((item) => (item.id === user.id ? user : item));
}

function createUser(users, user) {
  return [...users, user];
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_USERS:
      return { ...state, items: payload};
      case SET_LOADING:
        return { ...state, loading: payload };
    case DELETE_USER:
      return {
        ...state,
        items: state.items.filter((user) => user.id !== payload),
      };
    case UPDATE_USER:
      return {
        ...state,
        items: updateUser(state.items, payload),
      };
    case CREATE_USER:
      return {
        ...state,
        items: createUser(state.items, payload),
      };
    default:
      return state;
  }
}
