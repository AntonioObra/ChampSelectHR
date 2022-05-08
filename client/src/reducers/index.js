import { combineReducers } from "redux";

import champions from "./champions";
import items from "./items";
import guides from "./guides";
import champion from "./champion";
import guide from "./guide";
import auth from "./auth";
import user from "./user";

export const reducers = combineReducers({
  champions,
  items,
  guides,
  champion,
  guide,
  auth,
  user,
});
