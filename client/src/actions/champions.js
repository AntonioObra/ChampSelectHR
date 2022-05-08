import { FETCH_ALL, FETCH_ONE } from "../constants/actionTypes";
import * as api from "../api";

//Action Creators
export const getChampions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchChampions();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const getSingleChampion = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchSingleChampion(id);

    dispatch({ type: FETCH_ONE, payload: data });
  } catch (err) {
    console.log(err);
  }
};
