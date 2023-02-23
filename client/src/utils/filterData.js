export const filterData = (data,type)=>{
 if(type === 'all'){
  return data
 }
   let newData = data.filter(dt=>dt.type === type);
   return newData
}
export const FilterList = [
  
]