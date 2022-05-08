import { FETCH_ONE } from "../constants/actionTypes";

export default (champion = [], action) => {
  switch (action.type) {
    case FETCH_ONE:
      return action.payload;
    default:
      return champion;
  }
};
