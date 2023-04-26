import { useForm } from "react-hook-form"
import { courseSchemas } from "../schemas/schemas"
import { useNavigate } from "react-router";
import { useCreateCourseMutation } from "../../app/courseService";
import { yupResolver } from "@hookform/resolvers/yup";

export const useCreate = () => {
   const [addCourse,addCourseReslut] = useCreateCourseMutation();

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },} = useForm({
        defaultValues: {
            price: 0,
        },
        resolver: yupResolver(courseSchemas),
        mode: "all",
    });
 const navatige = useNavigate();

 const CreateCourse = (data) =>{
    addCourse(data)
    .unwrap()
    .then(
        ()=>{ 
            return navatige("/admin/course")}
    )
    .catch((err)=>{
       return alert(err.data.messeage)
    })
}
return {
        control,
        register,
        handleSubmit,
        errors,
        CreateCourse,
}
};

export default useCreate;

