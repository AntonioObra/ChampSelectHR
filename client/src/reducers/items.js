import { FETCH_ALL_ITEMS } from "../constants/actionTypes";

export default (items = [], action) => {
  switch (action.type) {
    case FETCH_ALL_ITEMS:
      return action.payload;
    default:
      return items;
  }
};
