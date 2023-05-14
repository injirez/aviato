import { createSlice } from "@reduxjs/toolkit"

const offerAddSlice = createSlice({
    name: 'offerAdd',
    initialState: {
            name: '',
            price: '',
            description: '',
                type: '',
                brand: '',
                model: '',
                power: '',
                releaseDate: '',
      },
    reducers: {
        setCredentials: (state, action) => {
            state.name = action.payload;
            state.price = action.payload.user;
            state.description = action.payload.user;
            state.type = action.payload.user;
            state.brand = action.payload.user;
            state.model = action.payload.user;
            state.power = action.payload.user;
            state.releaseDate = action.payload.user;
          },
    },
})

export const { setCredentials} = offerAddSlice.actions

export default offerAddSlice.reducer
