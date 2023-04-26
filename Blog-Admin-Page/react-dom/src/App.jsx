import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Layout from './components/layout/Layout'
import CourseList from './components/course/CourseList'
import CourseCreate from './components/course/CourseCreate'
import CourseDetail from './components/course/CourseDetail'


function App() {
   return (
    <>
      <Routes> // router điều hướng 
        <Route path="/admin" element={<Layout />}>
          <Route path="course">
           <Route index element ={<CourseList />}/>
           <Route path="create" element={<CourseCreate />}/>
           <Route path=":courseID" element={<CourseDetail />}/>
         </Route>
        </Route>
      </Routes>


    </>
  )
}

export default App
