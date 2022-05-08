import * as api from "../api";
import { AUTH, GET_USER } from "../constants/actionTypes";

export const starGuide = (id, user) => async (dispatch) => {
  try {
    const { data } = await api.starGuide(id, user);
    dispatch({ type: AUTH, data });
  } catch (err) {
    console.log(err);
  }
};

export const unStarGuide = (id, user) => async (dispatch) => {
  try {
    const { data } = await api.unStarGuide(id, user);
    dispatch({ type: AUTH, data });
  } catch (err) {
    console.log(err);
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.getUser(id);
    dispatch({ type: GET_USER, payload: data });
  } catch (err) {
    console.log(err);
  }
};
