import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

//ACTIONS
export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    console.log(data);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};
