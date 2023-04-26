import { useForm } from "react-hook-form";
import { useUpdateCourseMutation } from "../../app/courseService"
import { yupResolver } from "@hookform/resolvers/yup";
import { courseSchemas } from "../schemas/schemas";
import { useNavigate } from "react-router";

const updateCouse = (courseID) => {
    const [updateCourse] = useUpdateCourseMutation();
    const navatige = useNavigate();

    const { control, register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(courseSchemas),
        mode: 'all',
    });

    const onUpdateCouse = (data) => {
        const newData = { ...data, id: courseID }
        updateCourse( {courseID, ...newData } )
            .unwrap()
            .then(() => {
                alert("Update Thanh Cong")
                navatige(``)
            })
            .catch((err) => {
                alert("Update That Bai")
            })
    }


    return {
        control, register, handleSubmit,errors,onUpdateCouse
    }
}
export default updateCouse;

