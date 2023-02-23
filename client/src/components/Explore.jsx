import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams,useLocation } from 'react-router-dom';
import Loading from './Loading';
import MoviesBox from './sm-components/MoviesBox';
import {fetchUrl} from '../controlls/FetshingUrl'
import { useMemo } from 'react';
import { useCallback } from 'react';
function Explore() {
  const location = useLocation()
  const dataType = location.state?location.state.dataType:'explore'
  const filter = location.state?location.state.filter:''
  const year = location.state?location.state.years:null
  let {name}=useParams()
 const [data,setData]=useState([]);
 const[page,setPage]=useState(1)
const [loading,setLoading]=useState(true); 
const [update,setUpdate]=useState(true)
const containerRef=useRef(null)
const query = useSelector(state => state.movies.querry)

const callbackFunction=(entries)=>{
 const [entry] = entries
 if(entry.isIntersecting ){
   if(update){
    setPage(page +1);
    setUpdate(false)
    fetchData(page+1,data)
   }
 }
}
const opt = useMemo(()=>({root:null,
  rootMargin:'0px',
  threshold:0.8}),[])

const fetchData =useCallback( (pageNumber,dataStore) => {
  try {
       axios(fetchUrl[dataType](name,pageNumber,(query||year),filter)).then((responce)=>{
        setData([...dataStore,...responce.data.results]);
      setLoading(false)
      setUpdate(true)
       })
     
      
  } catch (error) {
    console.log(error);
  }
 
},[dataType,name,query,filter])
useEffect(()=>{
   setData([])
   setPage(1);
   fetchData(1,[]);
   
   
},[name,query,fetchData]);

useEffect(()=>{
  const refContent= containerRef.current
  const observer = new IntersectionObserver(callbackFunction,opt)
   if(refContent) observer.observe(refContent)
   return ()=>{
    if(refContent) observer.unobserve(refContent)
   }
},[callbackFunction,opt]);
if(loading){
  return <Loading/>
}
  return (
    <div className='flex  fw-row' style={{justifyContent:'space-around',alignItems:'center'}}>
     {data.map(boxData=>{
      return <MoviesBox boxStyle={'small-movie'} key={boxData.id} data={boxData} type={name}/>
     })}
     <div ref={containerRef}>
     <Loading height={'300px'}  />
     </div>
     
    </div>
  )
}

export default Explore