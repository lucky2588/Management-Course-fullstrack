import { useGetCategoryQuery } from "../../app/categoryService";
import { useGetUserAllQuery } from "../../app/userService"



export const useFetchQuery = () => {
     const {data : dataUser , isLoading : isLoadingUser} = useGetUserAllQuery();
    const {data : dataCategory , isLoading : isLoadingCategory} = useGetCategoryQuery();

      return {
        dataUser,
        dataCategory,
        isLoading : isLoadingUser || isLoadingCategory
      }
}


