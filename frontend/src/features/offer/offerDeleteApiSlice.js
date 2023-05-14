import { apiSlice } from "../../app/api/apiSlice";

export const offerDeleteApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        deleteOffer: builder.mutation({
            query: (resourceId) => ({
                url: `/advert/${resourceId}/`,
                method: 'DELETE',
              }),
        }),
    })
})

export const {
    useDeleteOfferMutation
} = offerDeleteApiSlice