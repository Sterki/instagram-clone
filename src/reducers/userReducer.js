import { GET_USERLOGGED, SET_USER_NULL } from "./../types";

const inisialState = {
  userloged: null,
};

export default (state = inisialState, action) => {
  switch (action.type) {
    case GET_USERLOGGED:
      return {
        ...state,
        userloged: action.payload,
      };
    case SET_USER_NULL:
      return {
        ...state,
        userloged: null,
      };
    default:
      return state;
  }
};
