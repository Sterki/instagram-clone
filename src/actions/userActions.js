import { GET_USERLOGGED, SET_USER_NULL } from "./../types";

export function getUserAction(user) {
  return (dispatch) => {
    dispatch(getUser(user));
  };
}
const getUser = (user) => ({
  type: GET_USERLOGGED,
  payload: user,
});

export function setUserNull() {
  return (dispatch) => {
    dispatch(setUser());
  };
}
const setUser = () => ({
  type: SET_USER_NULL,
});
