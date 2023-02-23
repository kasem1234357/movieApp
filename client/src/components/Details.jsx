import React, { useEffect, useState } from 'react'
import { Download, Success } from '../icons/svgIcon'
import {useDispatch,useSelector}from 'react-redux'
import { ToggleMovies } from '../utils/toggleMovies';
function Details({data3,target,name}) {
  const [checkData,setCheck]=useState(false)
  const user = useSelector(state => state.users.user)
  const movies = useSelector(state =>state.movies.data)
  const dispatch = useDispatch()
  // const ToggleMovies = ()=>{
  //   const check = movies?.some(movie => movie.imdb_id === data3.all.imdb_id)
  //   if(check){
  //     try {
  //       axios.put(`http://localhost:8800/api/users/${user._id}/deleteMovie`,{...data3.all,typeShow:name}).then(() =>{
  //         dispatch(deleteMovies({...data3.all,typeShow:name}))
  //       })
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }else{
  //     try {
  //       axios.put(`http://localhost:8800/api/users/${user._id}/addMovie`,{data:{...data3.all,typeShow:name}}).then((responce) =>{
  //         dispatch(addMovie({...data3.all,typeShow:name}))
  //         setCheck(true)
  //       })
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  
  // }
  useEffect(()=>{
    setCheck(movies?.some(mv => mv.imdb_id === data3.all.imdb_id))
  },[movies,data3])

  return (
    <div>
    <p style={{lineHeight:'1.7'}}>{data3.all.overview}</p>
    <div className="info-box flow " style={{marginTop:'20px'}}>
      <div className="genre  ">
        <span className='text-gray item-space' >Genre:</span><span>{data3.all.genres.map(genre=>{
          return ` ${genre.name}, `
        })}</span>
      </div>
      <div className="lang">
        <span className='text-gray item-space' >lang:</span><span>{data3.all.original_language}</span>
      </div>
      <div className="lang flex " style={{alignItems:"center"}}>
        <span className='text-gray item-space'>companies:</span><span className='flex flex-between'>{data3.all.production_companies.map(company=>{
          return(
            <div className="companyBox flex flex-between padding" style={{gap:"10px",padding:"0.5rem 1rem"}}>
              <div className="imgBoxLogo" style={{boxShadow:"0px 0px 16px rgba(0,0,0,0.6)"}} >
                <img src={`https://image.tmdb.org/t/p/original${company?.logo_path} `}alt="" srcset={`https://image.tmdb.org/t/p/original${company?.logo_path} `} loading="lazy"/>
              </div>
              
            </div>
            )
        })}</span>
      </div>
    </div>
    <div className='flex ' style={{alignItems:'center'}} >
      {name === 'tv'?null: <span className='watch ' onClick={()=>target(data3.all.imdb_id)} >watch Now</span>}
     <span className='add flex center' style={{marginRight:'7px'}}><Download width={'15px'}/></span>
      <span 
      onClick={()=>{
        user ?
        ToggleMovies({
          dispatch,
          user,
          data:data3.all,
          setCheck,
          name,
          movies
    }) 
        :console.warn("you are not logged")}} className={`add flex center ${!checkData?"":"checked"}`}>{!checkData?"+":<Success color="#fff" width="20px"/>}</span> 
      </div>
    </div>
  )
}

export default Details