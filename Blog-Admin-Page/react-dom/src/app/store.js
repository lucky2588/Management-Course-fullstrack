import {configureStore } from "@reduxjs/toolkit"
import { courseApi } from "./courseService"
import { userApi } from "./userService"
import { categoryApi } from "./categoryService"

export const store = configureStore({
 reducer:{
     // Add the generated reducer as a sp
     [courseApi.reducerPath] : courseApi.reducer,
     [userApi.reducerPath] : userApi.reducer,
     [categoryApi.reducerPath] : categoryApi.reducer
 },
 middleware: (getDefaultMiddleware) => 
 getDefaultMiddleware().concat(courseApi.middleware,userApi.middleware,categoryApi.middleware)
 
})