import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseUrl = "http://localhost:8085/api/v1/admin"
export const courseApi = createApi({
 reducerPath : "courseApi",

 baseQuery : fetchBaseQuery({baseUrl : baseUrl}),
 endpoints : (builder) => (
    {
        getCourseList : builder.query({
             query : () => "getAll"
        }),
        getCourseOnline : builder.query({
            query : () => "courseOnline"
         }),
         getCourseOnlab : builder.query({
            query : () => "courseOnlab"
         }),
        getCourseByID : builder.query({
            query : (id) => `course/${id}`
       })
    }
 )

}
)

export const {useGetCourseListQuery,useGetCourseByIDQuery,useGetCourseOnlineQuery,useGetCourseOnlabQuery} = courseApi;