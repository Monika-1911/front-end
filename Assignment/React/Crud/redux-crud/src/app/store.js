import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../Features/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
