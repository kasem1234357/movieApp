import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {fetchUrl} from '../controlls/FetshingUrl'
import Loading from './Loading'
import EpsoideBox from './sm-components/EpsoideBox'
function Epsoides({tvId,season,imageUrl}) {
 const [data,setData]=useState([])
 const [loading,setLoading]=useState(true)
 const dateNow = (new Date().getTime())
 useEffect(()=>{
  try {
   setLoading(true)
      axios(fetchUrl.singleSeason(tvId,season)).then(responce =>{
       setData(responce.data)
      setLoading(false)
     })
  } catch (error) {
    console.log(error);
  }

 },[tvId,season])
 if(loading) return <Loading/>
 else{
  return (
   <div className='flex  fw-row' style={{justifyContent:'space-around',alignItems:'center'}}>
   {data.episodes.map(boxData=>{
    if(dateNow >(new Date(boxData.air_date).getTime())){
      return <EpsoideBox boxStyle={'small-movie'} key={boxData.id} data={boxData} tvId={tvId} season={season} imageUrl={imageUrl} />
    }
    return null
  })} 

 </div> 
)
 }
  
}

export default Epsoides