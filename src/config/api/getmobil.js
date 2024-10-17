import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const LIST_SIZE = 12;

export const getmobilApi = createApi({
  reducerPath: 'getmobilApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ limit = LIST_SIZE, skip }) => {
        const args = {
          delay: 1000,
        };

        if (limit) {
          args['limit'] = limit;
        }

        if (skip) {
          args['skip'] = skip;
        }

        const search = new URLSearchParams(args).toString();

        return `/products` + (search ? `?${search}` : '');
      },
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useLazyGetAllProductsQuery,
  useGetSingleProductQuery,
  useLazyGetSingleProductQuery,
} = getmobilApi;
