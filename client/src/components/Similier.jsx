import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ScrollBox from '../controlls/ScrollBox'
import Loading from './Loading';
import {fetchUrl} from '../controlls/FetshingUrl'
function Similier({typeId}) {
 const [data,setData]=useState([]);
 const [loading,setLoading] = useState(true)
 const [error,setError] = useState(false)
 useEffect(()=>{
  try {
   setLoading(true);
   axios(fetchUrl.similier(typeId) ).then((responce) => {
   setData(responce.data.results)
   setLoading(false);
  })
 
  } catch (error) {
   setLoading(false)
   setError(true)
    
  }
},[typeId])
if(loading){
 return <Loading/>
}
if(error){
 return <h1>hello error</h1>
}

  return (
   <>
   <div className='flex flex-between ' style={{paddingTop:'10px'}}>
     <h3 className='text-white'>Similiar Movies</h3>
     
   </div>
   
   

<ScrollBox style={{ minHeight: "270px",position:'relative'}} data={data} type={'large-movie'}/></>
   
  )
}

export default Similier