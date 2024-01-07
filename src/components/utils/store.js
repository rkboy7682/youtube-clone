import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store = configureStore({
  reducer: {
    name: appSlice,
  },
});

// const store = configureStore({
//   reducer: { name: appSlice },
// });
export default store;
