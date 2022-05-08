import { FETCH_ONE_GUIDE, DELETE } from "../constants/actionTypes";

export default (guide = [], action) => {
  switch (action.type) {
    case FETCH_ONE_GUIDE:
      return action.payload;
    default:
      return guide;
  }
};
