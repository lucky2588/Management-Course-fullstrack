import React from 'react'
import { useDeteleCourseMutation, useGetCourseByIdQuery, useUpdateCourseMutation } from '../../app/courseService'
import { useNavigate, useParams } from 'react-router';
import { useGetUserAllQuery } from '../../app/userService';
import { useGetCategoryQuery } from '../../app/categoryService';
import { useFetchQuery } from '../hook/useFetchQuery';
import { getCategoryOptions, getTypeOptions, getUserOptions } from '../options/options';
import updateCouse from '../hook/useUpdateCourse';
import { Controller } from 'react-hook-form';
import Select from "react-select";
import { Link } from 'react-router-dom';

function CourseDetail() {
    const nativage = useNavigate();
    const { courseID } = useParams();
    const { data: data, isLoading, isError } = useGetCourseByIdQuery(courseID);
    const { dataUser, dataCategory } = useFetchQuery();
    const listUser = getUserOptions(dataUser)
    const categoryList = getCategoryOptions(dataCategory)
    const typeOptions = getTypeOptions();
    const { control, register, handleSubmit, errors, onUpdateCouse } = updateCouse(courseID);
    const [deleteCourse] = useDeteleCourseMutation();

    if (isLoading) {
        return <h2>Is Loanding....</h2>
    }

    if (isError) {
        return <h2>Error ... </h2>
    }

    const categoryDefault = getCategoryOptions(data.categoryList)
     const handlenBtnDelete = (courseID)=>{
        deleteCourse(courseID)
        .unwrap()
        .then(()=>{
            alert("Xoa thanh Cong")
            nativage("/admin/course")
        })
        .catch(err=>{
            alert(err)
        }
           )
     }

    return (
        <>

            <div className="course-list mt-4 mb-4">
                <div className="container">
                    <form onSubmit={handleSubmit(onUpdateCouse)}>

                        <div className="mb-4 d-flex justify-content-between">
                            <div>
                                <button className="btn-custom btn-update-course" type="submit">
                                    <span><i className="fa-solid fa-plus"></i></span>
                                    Cập nhật
                                </button>
                                <Link to="/admin/course" className="btn-custom btn-refresh">
                                    <span><i className="fa-solid fa-angle-left"></i></span>
                                    Quay lại
                                </Link>
                            </div>
                            <div>
                                <button className="btn-custom btn-delete-course bg-danger"
                                 onClick={()=>handlenBtnDelete(data.id)}>
                                    <span><i className="fa-solid fa-trash-can"></i></span>
                                    Xóa
                                </button>
                            </div>
                        </div>

                        <div className="course-list-inner p-2">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="mb-3">

                                        <label for="course-name" className="form-label fw-bold">Tên khóa học</label>
                                        <input type="text" className="form-control"
                                            id="course-name" defaultValue={data?.name}
                                            {...register("name")}
                                        />
                                        {errors.name?.message}
                                    </div>
                                    <div className="mb-3">
                                        <label for="course-description" className="form-label fw-bold">Mô tả</label>
                                        <textarea className="form-control" id="course-description" rows="10" defaultValue={data?.description}
                                            {...register("description")}
                                        ></textarea>
                                        {errors.description?.message}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <label for="course-type" className="form-label fw-bold">Hình thức học</label>
                                        <Controller
                                            name="type"
                                            control={control}
                                            defaultValue={data.type}
                                            render={({ field }) => (
                                                <Select
                                                    {...field}
                                                    defaultValue={{
                                                        label: data.type,
                                                        value: data.type,
                                                    }}
                                                    options={typeOptions}
                                                    value={typeOptions.find((c) => c.value === field.value)}
                                                    onChange={(val) => field.onChange(val.value)}
                                                />
                                            )}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="course-supporter" className="form-label fw-bold">Topic</label>
                                        <Controller
                                            name="categoryList"
                                            control={control}
                                            defaultValue={data.categoryList.map((e) => e.id)}
                                            render={({ field: { onChange, value, ref } }) => (
                                               
                                                <Select
                                                    closeMenuOnSelect={false}
                                                    defaultValue={categoryDefault}
                                                    options={categoryList}
                                                    inputRef={ref}
                                                    value={categoryList.find((c) => c.value === value)}
                                                    onChange={(val) => onChange(val.map((c) => c.value))}
                                                    isMulti
                                                />
                                                
                                            )}
                                        />


                                    </div>
                                    <div className="mb-3">
                                        <label for="course-supporter" className="form-label fw-bold">Tư vấn viên</label>
                                        <Controller
                                            name="userId"
                                            control={control}
                                            defaultValue={data.user.id}
                                            render={({ field }) => (
                                                <Select
                                                    {...field}
                                                    defaultValue={{
                                                        label: data.user.name,
                                                        value: data.user.id,
                                                    }}
                                                    options={listUser}
                                                    value={listUser.find((c) => c.value === field.value)}
                                                    onChange={(val) => field.onChange(val.value)}
                                                />
                                            )}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Thumnail</label>
                                        <div className="course-logo-preview mb-3 rounded">
                                            <img id="course-logo-preview" className="rounded" />
                                        </div>

                                        <label for="course-logo-input" className="btn btn-warning" />Đổi ảnh
                                        <input type="file" id="course-logo-input" className="d-none" />
                                    </div>
                                </div>
                            </div>
                        </div>






                    </form>



                </div>
            </div>

        </>
    )
}

export default CourseDetail