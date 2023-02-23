import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Rating, Success } from '../../icons/svgIcon'
function MoviesBox({boxStyle,data,type},props) {
  const [checkData,setCheck]=useState(false)
  const movies = useSelector(state =>state.movies.data)
  useEffect(()=>{
    setCheck(movies?.some(mv => mv.id === data.id))
  },[movies,data])
  return (
   <div {...props}  className={`flex-items bg-main movie-box ${boxStyle} `} 
    style={{margin:'6px'}}>
   <div className="content-box flex f-column">
     <div className="rating flex">
       <div className="rating-box flex center">
       <span> <Rating color={'#ffee03'}/>
</span><span>{parseInt(data.vote_average).toFixed(1)}</span>
       </div>
      
     </div>
     <div className="controll flex  flex-between text-white">
       <div className="info flow ">
         <h2>{data.title?data.title:data.name}</h2>
         <h5>{data.release_date?data.release_date:data.first_air_date}</h5>
         {boxStyle !=='large-movie'?<Link to={`/${data.id}&${type?type:'movie'}`} className='watch   text-white'>watch Now</Link>:
        <div className="imdb-rating-box" style={{fontSize:'12px',marginTop:'1em'}}>
        <span className='imdb' style={{fontWeight:'bold',padding:'4px'}}>IMDB</span><span>{data.vote_average} rating</span>
      </div>}
         
       </div>
       <div className='flex center' >{boxStyle === 'large-movie'?<Link to={`/${data.id}&${data.media_type||type?data.media_type||type:'movie'}`} className='watch text-white '>watch Now</Link>:null}
       {!checkData?null:<span  className={`add flex center ${!checkData?"":"checked"}`}>{!checkData?"+":<Success color="#fff" width="20px"/>}</span>}
       </div>
       
     </div>
   </div>
   <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path || data.poster_path}`} alt="" srcSet="" loading="lazy" />
 </div>
  )
}

export default MoviesBox