import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseUrl = "http://localhost:8085/api/v1/admin";
export const categoryApi = createApi(
  {
reducerPath:"categoryApi",
baseQuery: fetchBaseQuery({ baseUrl:baseUrl}),
endpoints: (builder) => ({
    getCategory : builder.query({
        query: ()=>"getCategory",
     })
  })
  })

export const {useGetCategoryQuery} = categoryApi;