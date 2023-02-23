import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ScrollBox from '../controlls/ScrollBox';
import { Arrow } from '../icons/svgIcon';
import Loading from './Loading';
import {fetchUrl} from '../controlls/FetshingUrl'
function Main() {
  const [data3,setData]=useState({
    all:[],
    rated:[],
    series:[]
  });
  const fetchData = async () => {
    try {
      const result = await axios(fetchUrl.trending(),);
      const rated = await axios(fetchUrl.rated());
      const series= await axios(fetchUrl.tvShow())
      setData({rated:rated.data.results,all:result.data.results,series:series.data.results});
      setLoading(false)
     
    } catch (error) {
      console.log(error);
    }
   
  }
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
     fetchData(); 
  },[]);
  if(loading){
    return <Loading/>
  }
  return (
   <div className=" feed-list grid scroll-y padding hidden-x"  >
   <div className='flex flex-between ' style={{paddingTop:'10px',maxWidth:'98vw'}}>
     <h3 className='text-white'>Trending Movies</h3>
     <p className='text-gray flex center' >see All <Arrow/></p>
   </div>
   <ScrollBox style={{ minHeight: "270px",position:'relative'}} data={data3.all}type={'large-movie'}/>
    <div className='flex flex-between ' style={{paddingTop:'10px',maxWidth:'98vw'}}>
     <h3 className='text-white'>Top tv show </h3>
     <p className='text-gray flex center'>see All <Arrow/></p>
   </div>
   <ScrollBox style={{ minHeight: "270px",position:'relative'}} data={data3.series}type={'meduim-movie'} dataType={'tv'}/>
<div className='flex flex-between '  style={{paddingTop:'10px',maxWidth:'98vw'}}>
     <h3 className='text-white'>Top rating</h3>
     <p className='text-gray flex center'>see All <Arrow/></p>
   </div>
   <ScrollBox style={{ minHeight: "270px",position:'relative'}} data={data3.rated}type={'small-movie'}/>
</div>
  )
}

export default Main