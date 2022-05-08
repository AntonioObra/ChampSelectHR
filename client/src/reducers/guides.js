import { FETCH_ALL_GUIDES, CREATE, DELETE } from "../constants/actionTypes";

export default (guides = [], action) => {
  switch (action.type) {
    case FETCH_ALL_GUIDES:
      return action.payload;
    case CREATE:
      return [...guides, action.payload];
    case DELETE:
      return guides.filter((guide) => guide._id !== action.payload);
    default:
      return guides;
  }
};
