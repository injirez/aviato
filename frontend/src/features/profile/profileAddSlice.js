import { createSlice } from "@reduxjs/toolkit"

const profileAddSlice = createSlice({
    name: 'profileAdd',
    initialState: {
        phone: '',
        username: '',
        email: '',
        firstName: '',
        lastName:'',
      },
    reducers: {
        setCredentials: (state, action) => {
            state.phone = action.payload;
            state.username = action.payload.user;
            state.email = action.payload.user;
            state.firstName = action.payload.user;
            state.lastName = action.payload.user;
          },
    },
})

export const { setCredentials} = profileAddSlice.actions

export default profileAddSlice.reducer
