import React from 'react'
import './toast.css'
function ToastBox({type}) {
  return (
    <div className='toast flex fill text-gray padding' style={{justifyContent:'space-between'}}>
     
   <div className='toast-box flex ' style={{alignItems:'center'}}>
    <div className="toast-icon" style={{paddingRight:'10px'}}>
     <img src={`./images/${type}.png`} alt="" style={{width:'110px'}}/>
    </div>
    <div className="toast-content flow">
    <div className={`toast-type toast-${type} `} ><h3>{type}</h3></div>
     <div className="toast-title text-white">the version 1.7 out now!</div>
     <div className="toast-text"><p style={{fontSize:'14px'}}>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sapiente pariatur, temporibus at deserunt fuga aut error autem</p> </div>
    </div>
   
   </div>
   <div className={`toas-time sm-toast_time-${type}`}>24 Nov 2022 at 9.30 AM </div>
    </div>
  )
}

export default ToastBox