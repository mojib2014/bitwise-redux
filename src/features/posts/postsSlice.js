import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints(builder) {
    return {
      fetchPosts: builder.query({
        query() {
          return '/posts';
        },
      }),
    };
  },
});

export const { useFetchPostsQuery } = apiSlice;
