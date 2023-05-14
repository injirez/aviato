import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "../features/auth/authSlice";
import regReducer from "../features/registration/regSlice";
import profileAddReducer from "../features/profile/profileAddSlice"
import offerAddReducer from "../features/offer/offerAddSlice"
import  offerGetReducer  from "../features/offer/offerGetSplice";


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    reg: regReducer,
    profileAdd:  profileAddReducer,
    offerAdd:  offerAddReducer,
    offer: offerGetReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
