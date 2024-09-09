import { configureStore } from "@reduxjs/toolkit";
import dropDownSlice from "./slice/dropDownSlice";

const store = configureStore({
  reducer: {
    dropDown: dropDownSlice.reducer,
  },
});

export default store;
