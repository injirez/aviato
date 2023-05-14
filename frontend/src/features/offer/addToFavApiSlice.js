import { apiSlice } from "../../app/api/apiSlice";

export const addToFavApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        addFav: builder.mutation({
            query: (data) => ({
                url: `/client/add_favourites/${data.idItem}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
            })
        }),
    })
})

export const {
    useAddFavMutation
} = addToFavApiSlice