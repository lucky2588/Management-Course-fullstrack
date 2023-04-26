import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseUrl = "http://localhost:8085/api/v1/admin";
export const userApi = createApi(
  {
reducerPath:"userApi",
baseQuery: fetchBaseQuery({ baseUrl:baseUrl}),
endpoints: (builder) => ({
    getUserAll : builder.query({
        query: ()=>"getUser",
     })
  })
  })

export const {useGetUserAllQuery} = userApi;