import { apiSlice } from "../../app/api/apiSlice"

export const profileGetApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProfile: builder.query({
            query: () => 'client/profile/',
        })
    })
})

export const {
    useGetProfileQuery
} = profileGetApiSlice 