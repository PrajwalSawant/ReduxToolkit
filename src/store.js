import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slice";

export default configureStore({
  reducer: {
    user: UserSlice,
  },
});
