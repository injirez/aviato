import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: { token: null },
    reducers: {
        setCredentials: (state, action) => {
            const  accessToken  = action.payload.access
            const userName = action.payload.user
            state.token = accessToken
            state.user = userName
            window.sessionStorage.setItem("token", state.token)
        },
        logOut: (state, action) => {
            state.token = null
        }
    },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token