import { createSlice } from "@reduxjs/toolkit";

const regSlice = createSlice({
  name: "reg",
  initialState: { token: null, user: null },
  reducers: {
    setCredentials: (state, action) => {
      const accessToken = action.payload.access;
      const userName = action.payload.user;
      state.token = accessToken;
      state.user = userName;
    },
  },
});

export const { setCredentials, logOut } = regSlice.actions;

export default regSlice.reducer;

export const selectCurrentUser = (state) => state.reg.user;
export const selectCurrentToken = (state) => state.reg.token;
