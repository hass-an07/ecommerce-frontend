import { createSlice } from "@reduxjs/toolkit";

export const userTokenSlice = createSlice({
  name: "userToken",
  initialState: {
    userToken: null,
  },
  reducers: {
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
  },
});

export const userTokenActions = userTokenSlice.reducer;
