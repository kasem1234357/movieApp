import {addMovie, deleteMovies} from '../utils/movies'

import axios from 'axios'

export const ToggleMovies = ({user,data,dispatch,setCheck,name,movies})=>{
 const check = movies?.some(movie => movie.imdb_id === data.imdb_id)
 if(check){
   try {
     axios.put(`http://localhost:8800/api/users/${user._id}/deleteMovie`,{...data.all,typeShow:name}).then(() =>{
       dispatch(deleteMovies({...data,typeShow:name}))
     })
   } catch (error) {
     console.error(error)
   }
 }else{
   try {
     axios.put(`http://localhost:8800/api/users/${user._id}/addMovie`,{data:{...data,typeShow:name}}).then((responce) =>{
       dispatch(addMovie({...data,typeShow:name}))
       setCheck(true)
     })
   } catch (error) {
     console.error(error)
   }
 }

}