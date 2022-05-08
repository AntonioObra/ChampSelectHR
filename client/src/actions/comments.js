import { CREATE_COMMENT } from "../constants/actionTypes";
import * as api from "../api";

//Action Creators
export const createComment = (comment) => async (dispatch) => {
  try {
    console.log(comment);
    await api.createComment(comment);
  } catch (err) {
    console.log(err);
  }
};

export const deleteComment = (id) => async (dispatch) => {
  try {
    console.log(id);
    await api.deleteComment(id);
  } catch (err) {
    console.log(err);
  }
};
