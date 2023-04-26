import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Provider } from "react-redux";

const baseUrl = "http://localhost:8085/api/v1/admin";
export const courseApi = createApi(
  {
    reducerPath: "courseApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ["Course"],
    endpoints: (builder) => ({
      getCourse: builder.query({
        query: () => "getCourseByPage",
      }),
      getCourseById: builder.query({
        query: (id) => `course/${id}`,
        providerTags : ["Course"]
      }),
      createCourse: builder.mutation({
        query: (data) => ({
          url: "createCourse",
          method: "POST",
          body: data
        })
      }),
        updateCourse : builder.mutation(
          {
            query :({id,...data})=>({ // tach id khoi obj 
              url:`updateCourse/${id}`,
              method:`POST`,
              body:data
            })
          }),
          deteleCourse : builder.mutation({
              query : (id)=>({
                url : `courses/${id}`,
                method : "DELETE",
                invalidatesTags: ["Course"]
              })

          })

      })


  })

export const { useGetCourseQuery, useGetCourseByIdQuery , useCreateCourseMutation,useUpdateCourseMutation,useDeteleCourseMutation} = courseApi;