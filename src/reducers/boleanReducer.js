import { SET_OPEN, SET_CLOSE } from "./../types";

const inisialState = {
  open: false,
};

export default (state = inisialState, action) => {
  switch (action.type) {
    case SET_OPEN:
      return {
        ...state,
        open: true,
      };
    case SET_CLOSE:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};
