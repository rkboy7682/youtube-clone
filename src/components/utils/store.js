import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    name: appSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

// const store = configureStore({
//   reducer: { name: appSlice },
// });
export default store;
