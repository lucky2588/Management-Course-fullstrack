export const getUserOptions = (users)=>{
  if(!users) {
    return [];
  }
  return users.map((user)=>{
         return {
            label : user.name,
            value : user.id
         };
  })
}

export const getCategoryOptions = (categories) => {
    if(!categories){
        return [];
    }
    return categories.map((category)=>{
        return {
            value : category.id,
            label : category.name
        }
    })
}

export const getTypeOptions = () => {
    return [
         {
            value : "onlab",
            label : "online"
         },
         {
            value : "online",
            label : "onlab"
         }
    ]
}

