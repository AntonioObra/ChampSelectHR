import {
  FETCH_ALL_GUIDES,
  CREATE,
  FETCH_ONE_GUIDE,
  DELETE,
  UPDATE,
} from "../constants/actionTypes";
import * as api from "../api";
import { useNavigate } from "react-router-dom";

//Action Creators
export const getGuides = () => async (dispatch) => {
  try {
    const { data } = await api.fetchGuides();

    dispatch({ type: FETCH_ALL_GUIDES, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const createGuide = (guide, navigate) => async (dispatch) => {
  // const navigate = useNavigate();
  try {
    const { data } = await api.createGuide(guide);

    dispatch({ type: CREATE, payload: data });
    console.log(data);

    navigate(`/guides/${data.newGuide._id}`);
    // navigate("/");
  } catch (err) {
    console.log(err);
  }
};

export const getSingleGuide = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchSingleGuide(id);

    dispatch({ type: FETCH_ONE_GUIDE, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const deleteGuide = (id) => async (dispatch) => {
  try {
    await api.deleteGuide(id);

    dispatch({ type: DELETE, payload: id });
  } catch (err) {
    console.log(err);
  }
};

export const updateGuide = (guide, navigate) => async (dispatch) => {
  try {
    const { data } = await api.updateGuide(guide);

    // dispatch({ type: UPDATE, payload: data });

    navigate(`/guides/${guide.id}`);
  } catch (err) {
    console.log(err);
  }
};
