import { apiSlice } from "../../app/api/apiSlice";

export const regApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        registration: builder.mutation({
            query: credentials => ({
                url: '/auth/register/',
                method: 'POST',
                body: { ...credentials }
            })
        }),
    })
})

export const {
    useRegistrationMutation
} = regApiSlice