
import { Rating } from '../../icons/svgIcon'
function MoviesBox({boxStyle,data,imageUrl,tvId,season}) {
  console.log(data,tvId,season);

  const target =()=>{
    window.open(`https://autoembed.to/tv/tmdb/${tvId}-${season}-${data.episode_number}`)
    }
  return (
   <div   className={`flex-items bg-main movie-box ${boxStyle} `} 
    style={{margin:'6px',minHeight:'250px'}}>
   <div className="content-box flex f-column" style={{minHeight:'250px'}}>
   <div className="rating flex">
       <div className="rating-box flex center">
       <span> <Rating color={'#ffee03'}/>
</span><span>{parseInt(data.vote_average).toFixed(1)}</span>
       </div>
      
     </div>
     <div className="controll flex  flex-between text-white">
       <div className="info flow ">
         <h2>Epsoide {data.episode_number}</h2>
         <div onClick={()=>target()}  className='watch   text-white'>watch Now</div>
       
         
       </div>
       <div className='flex center' ><span  className='add flex center'>+</span></div>
       
     </div>
   </div>
   <img src={`https://image.tmdb.org/t/p/original${ data.still_path ||imageUrl }`} alt="" srcSet="" />
 </div>
  )
}

export default MoviesBox