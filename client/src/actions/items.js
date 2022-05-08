import { FETCH_ALL_ITEMS } from "../constants/actionTypes";
import * as api from "../api";

//Action Creators
export const getItems = () => async (dispatch) => {
  try {
    const { data } = await api.fetchItems();

    dispatch({ type: FETCH_ALL_ITEMS, payload: data });
  } catch (err) {
    console.log(err);
  }
};
