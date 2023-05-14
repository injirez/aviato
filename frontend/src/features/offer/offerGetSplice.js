import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const offerById = createAsyncThunk(
  'offers/offerById',
  async (itemId) => {
    const response = await axios.get(`http://127.0.0.1:8000/api/v1/advert/${itemId}/`);
    return response.data;
  }
);

const initialState = {
  offer: null,
  isLoading: false,
  error: null,
};

export const offerGetSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(offerById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(offerById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.offer = action.payload;
      })
      .addCase(offerById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default offerGetSlice.reducer;