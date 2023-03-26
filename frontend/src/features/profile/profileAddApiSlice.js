import { apiSlice } from "../../app/api/apiSlice";

export const profileAddApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        addProfile: builder.mutation({
            query: ({user, phone}) => ({
                url: 'client/profile/',
                method: 'POST',
                body: JSON.stringify({user, phone}),
                headers: {
                    'Content-Type': 'application/json',
                  },
            })
        }),
    })
})

export const {
    useAddProfileMutation
} = profileAddApiSlice