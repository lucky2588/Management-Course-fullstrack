import React from 'react'
import { Link } from 'react-router-dom'
import { useGetCourseQuery } from '../../app/courseService'

function CourseList() {
  const {data, isLoading , isError} = useGetCourseQuery();



  if(isLoading) {
    return <h2>Is Loading .... </h2>
  }
  if(isError) {
    return <h2> Error , Please return Home  .... </h2>
  }
  return (
    <>
        <div className="course-list mt-4 mb-4">
        <div className="container">
            <div className="mb-4">
                <Link to={"/admin/course/create"} className="btn-custom btn-create-course">
                    <span><i className="fa-solid fa-plus"></i></span>
                    Tạo khóa học
                </Link>
                <Link to={"admin/course"} className="btn-custom btn-refresh">
                    <span><i className="fa-solid fa-arrow-rotate-right"></i></span>
                    Refresh
                </Link>
            </div>

            <div className="course-list-inner p-2">
                <table className="table course-table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên khóa học</th>
                            <th>Hình thức</th>
                            <th>Chủ đề</th>
                        </tr>
                    </thead>
                    <tbody>
                         {data.content.length > 0 && 
                            data.content.map((e,index)=> (
                              <tr>
                              <td>{index+1}</td>
                              <td>
                                  <Link to={`/admin/course/${e.id}`}>{e.name}</Link>
                              </td>
                              <td className="text-info">{e?.type}</td>
                              <td>
                              {
                                e.categories.map(category => category.name).join(" , ")
                              }                                                   
                                </td>
                          </tr>                           
                            ))
                         }
                        {/* <tr>
                            <td>1</td>
                            <td>
                                <a href="./course-edit.html">SpringBoot - Web Back End</a>
                            </td>
                            <td className="text-info">onlab</td>
                            <td>backend, cơ sở dữ liệu, lập trình web</td>
                        </tr> */}
                      
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
  )
}

export default CourseList