import { configureStore } from "@reduxjs/toolkit";
import { userTokenSlice } from "../features/userAcessToken";

const store = configureStore({
  reducer: {
    userToken: userTokenSlice.reducer,
  },
});

export default store;
