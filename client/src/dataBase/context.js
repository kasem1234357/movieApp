import axios from "axios";
import { createContext,useReducer, useEffect, useState } from "react";
const INITIAL_STATE = JSON.parse(localStorage.getItem("user")) ||null 

export const contextData = createContext(INITIAL_STATE);
export const ContextBox = ({ children }) => {
  
 const [popUpOpen,setPopUpOpen] = useState(false)
 const [typePopup,setTypePopup] = useState('success');
 const [logged,setLogged] = useState(false)
 const [userData,setUserData]=useState(INITIAL_STATE)
 useEffect(()=>{
  const timer =()=> setTimeout(()=>{setPopUpOpen(false)},3000)
  if(popUpOpen === true){
    timer()
  }
  return clearTimeout(timer)
 },[popUpOpen])
 useEffect(()=>{
   if(logged){
    localStorage.setItem("user", JSON.stringify(userData))
   }
   if(userData !==null){
     setLogged(true)
   }
},[userData,logged])
// useEffect(()=>{
//   if(userData){
    
//     try {
//       axios.get(`/users/?username=${userData.name}`).then(responce =>{
//         const {username,email,favMovies,profilePicture,_id}= responce.data
//           setUserData({
//             name:username,
//      email,
//      profile:profilePicture,
//      userId:_id,
//      favData:favMovies,
//           })
//       })
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
// },[])
	return (
 <contextData.Provider 
 value={{popUpOpen,setPopUpOpen,typePopup,setTypePopup,logged,userData,setUserData,setLogged}}>
  {children}
  </contextData.Provider>
  );

};