import { SET_OPEN, SET_CLOSE } from "./../types";

export function setOpenAction() {
  return (dispatch) => {
    dispatch(setOpen());
  };
}
const setOpen = () => ({
  type: SET_OPEN,
});

export function setCloseAction() {
  return (dispatch) => {
    dispatch(setClose());
  };
}
const setClose = () => ({
  type: SET_CLOSE,
});
