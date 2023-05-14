import { apiSlice } from "../../app/api/apiSlice";

export const offerAddApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        addOffer: builder.mutation({
            query: (body) => ({
                url: 'advert/',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                  body,
            })
        }),
    })
})

export const {
    useAddOfferMutation
} = offerAddApiSlice