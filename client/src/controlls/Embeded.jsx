import React from 'react'
import './embed.css'
function Embeded({id,name}) {
console.log(id);
  return (
    <div className='embedBox'>
  
     <iframe width={100} height={100} title='youtube' style={{border:"none"}} SameSite="None"  src={`https://autoembed.to/trailer/${name}/${id}`}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      />
    </div>
  )
}

export default Embeded