import React from 'react'
import './popup.css'
import {Close,Success, Warning} from '../../icons/svgIcon'
function PopUp({type,data}) {
  return (
    <div className={`popup-box ${type} `}>
     <div className="icon">
       <Success color='#22262a' width="15px"/>
     </div>
     <div className="text">
     <h3 className="title">{data?.title}</h3>
     <p className="desc">
        {data?.text} 
     </p>
     </div>
    
    </div>
  )
}

export default PopUp