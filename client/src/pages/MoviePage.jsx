import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import {  Rating } from '../icons/svgIcon';
import {fetchUrl} from '../controlls/FetshingUrl'
import Details from '../components/Details';
import Embeded from '../controlls/Embeded';
import Similier from '../components/Similier';
import Epsoides from '../components/Epsoides';
import Actors from '../components/Actors';
function MoviePage() {
  const [tab,setTab]= useState(1);
  const [loading,setLoading]=useState(true);
  const [season,setSeason]=useState(1)
 const [data3,setData]=useState({
  all:[],
});
const target =(target)=>{
   window.open(`https://imdbembed.xyz/movie/imdb/${target}?server=1&ss=2`)
   }
const contentLoad =(n)=>{
  
  switch (n) {
    case 1:
      return <Details data3={data3} target={target} name={name}/>

      case 2:
        
        return <Embeded  id={data3.all.imdb_id || data3.all.id} name={name}/>
      case 3:
        return <Actors name={name} id={data3.all.imdb_id || data3.all.id}/>
     case 4:
       return <Details data3={data3} target={target} name={name}/>

    default:
      return 'hello'

  }
}
let { typeId,name } = useParams();

 useEffect(()=>{
   try {
    setLoading(true)
     axios(fetchUrl.singleMovie(name,typeId)).then((responce)=>{
      setData({all:responce.data})
      
      setLoading(false)

     })
   } catch (error) {
     console.log(error);
   }
     
},[typeId,name])

if(loading){
  return <Loading/>
}
  return (
    <>
    <div className='flex fill fw-row' >
     <div className='poster-img flex-items'>
      <img alt="" srcSet={`https://image.tmdb.org/t/p/original${data3?.all?.poster_path}`} loading="lazy"  />
     </div>
     <div className='details-movie flex-items-2 text-white padding flow'>
      <div className="title flex flex-between text-gray">
      <h1>{data3.all.title?data3.all.title:data3.all.name}</h1>
      <div className="rating-box flex center text-gray">
     <span className='text-gray' style={{fontSize:'22px',paddingRight:"10px"}}>{data3.all.vote_average}</span>
     <span> <Rating style={{width:'22px'}} color={'#ffee03'}/>
</span>
      </div>
       
      </div>
      <p style={{margin:0}}>{data3.all.release_date?data3.all.release_date.split('-')[0]:data3.all.first_air_date.split('-')[0]}</p>
      <div className="list-tab flex flex-between" style={{width:"100%"}}>
        <h2 className={`list-item ${tab === 1?'activeTab ':''} `} onClick={(e)=>setTab(1)}>overview</h2>
        <h2 className={`list-item ${tab === 2?'activeTab ':''} `} onClick={(e)=>setTab(2)}>trailer</h2>
        <h2 className={`list-item ${tab === 3?'activeTab ':''} `} onClick={(e)=>setTab(3)}>stars</h2>
      </div>
      {
         contentLoad(tab)
     }
     
     </div>
    </div>
    <div className='flex  fw-row' style={{justifyContent:'center',alignItems:'center'}}>
      
     {data3.all.seasons&&(
       <>
       <div className='select'>
          <select onChange={(e)=>setSeason(parseInt(e.target.value) )}>
            
        { data3.all.seasons.slice(0,data3.all.seasons.length).map((box,index)=>{
          return(
            <option key={index} value={index} >{box.name}</option>
          )
        })}
       </select>
       </div>
      <Epsoides tvId={typeId} season={season} imageUrl={data3.all.poster_path}/>
       </>
       
      
     )}
    </div>
     <Similier typeId={typeId}/>
   </>
  )
}

export default MoviePage