import { apiSlice } from "../../app/api/apiSlice"
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const offerGetApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getOffer: builder.query({
            query: () => 'advert/',
        })
    })
})


// export const offerById = createAsyncThunk(
//   'offers/offerById',
//   async (itemId) => {
//     const response = await axios.get(`http://127.0.0.1:8000/api/v1/advert/${itemId}`);
//     return response.data;
//   }
// );

export const {
    useGetOfferQuery
} = offerGetApiSlice 