import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetchUrl } from '../controlls/FetshingUrl'

const Actors = ({name,id}) => {
 const[data,setData]=useState([])
 useEffect(()=>{
     axios.get(fetchUrl.actorsInMovie(name,id)).then((responce)=>{
      setData(responce.data.cast.slice(0,8))
     }).catch(err =>{console.log(err)})

 },[name,id])
  return (
   <div className='flex flex-around fw-row' style={{gap:"10px"}}>
     { data?.map((actor)=>(
    <div className='actorBox'>
     <img src={`https://image.tmdb.org/t/p/original${actor?.profile_path} `} alt="" srcset="" />
     {actor.name}</div>
   ))}
   </div>
  
    
  )
}

export default Actors