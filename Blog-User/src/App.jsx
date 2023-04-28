import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Layout from './components/Layout/Layout'
import ListCourse from './page/course/ListCourse'
import CourseOnline from './page/course/CourseOnline'
import CourseOnLab from './page/course/CourseOnLab'
import CourseDetail from './page/course/CourseDetail'

function App() {
 

  return (
    <>
      <Routes>
            <Route path="Course" element={<Layout />}>
              <Route path='getCourse'> 
              <Route index element={<ListCourse />}/>
                <Route path='online' element={<CourseOnline />}/>
                <Route path='onlab' element={<CourseOnLab />}/>
                <Route path=":courseID" element={<CourseDetail />}/>
              </Route>
            </Route>
      </Routes>


    </>
  )
}

export default App
