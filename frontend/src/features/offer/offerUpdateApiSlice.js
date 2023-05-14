import { apiSlice } from "../../app/api/apiSlice";

export const offerUpdateApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        updateOffer: builder.mutation({
            query: ({resourceId, updatedAd}) => ({
                url: `/advert/${resourceId}/`,
                method: 'PUT',
                body: {
                    name: updatedAd.name,
                    price: updatedAd.price,
                    description: updatedAd.description,
                    product: {
                      type: updatedAd.product.type,
                      brand: updatedAd.product.brand,
                      model: updatedAd.product.model,
                      power: updatedAd.product.power,
                      release_date: updatedAd.product.release_date,
                    },
                },
              }),
        }),
    })
})

export const {
    useUpdateOfferMutation
} = offerUpdateApiSlice