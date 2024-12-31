import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";

const rootReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    user: userReducer,
    ...asyncReducers,
  });
  return combinedReducer(state, action);
};

export default rootReducer;
