import { configureStore } from "@reduxjs/toolkit";
import { courseApi } from "./CourseService";


export const store = configureStore(
    {
        reducer : {
            [courseApi.reducerPath] : courseApi.reducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(courseApi.middleware)
    },)