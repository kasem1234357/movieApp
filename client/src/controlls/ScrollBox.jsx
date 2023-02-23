import React, { useEffect, useRef, useState } from 'react'
import MoviesBox from '../components/sm-components/MoviesBox'

function ScrollBox(props) {
 const [pressed, setPressed] = useState(false);
 const [stopPoint,setStopPoint]=useState(null)
  const [position, setPosition] = useState({x: 0,})
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      setStopPoint((ref.current.children[0].childElementCount * 420 +30) - window.innerWidth);
      ref.current.scrollLeft =-position.x;
      
    }
  }, [position,pressed])
  const onMouseMove = (event) => {
      
    if (pressed) {
      setPosition({
        x: (position.x + event.movementX)>(0)?0:(position.x + event.movementX)<-stopPoint?-stopPoint:(position.x + event.movementX) ,
      })
    }
  }
 
  return (
    <div className='main-scroll' ref={ref}>
      <div className='flex scroll-box '
   
   onMouseMove={(e)=> onMouseMove(e) }
   onMouseDown={() => setPressed(true)}
   onMouseLeave={() =>{
    return setPressed(false)}}
    onClick={()=> {
      setPressed(false)
    }}
   style={{...props.style,userSelect:'none',zIndex:10,minWidth:'100vh'}}>
    
   
    {props.data.map(boxData=>{
           
           return(
             <MoviesBox  boxStyle={props.type} key={boxData.id} type={props.dataType} data={boxData}/>
           )
         })}
    
   
   </div>
    </div>
   
  )
}

export default ScrollBox