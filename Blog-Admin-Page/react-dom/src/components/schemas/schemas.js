import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const courseSchemas = yup.object(
    {
    name : yup.string().required("Tên không được để trống"),
    description: yup.string().required("Không được để trống phần này !! "),
    price: yup.number().typeError("Không đúng định dạng").min(0,"giá phải lớn hơn 0 ")
}
)