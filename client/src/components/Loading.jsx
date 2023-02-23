import React from 'react'
import './loading.css'
const Loading = props => {
  return  <div className="loader flex " style={{height:`${props.height}`}}>
  <div className="boxs flex center">
      <div className="s one"></div>
      <div className="s two"></div>
  </div>
      <div className='preloader flex center'>
          <div><h1>loading</h1></div>
          <div className='preloader-dots'>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
          </div>
        </div>
</div>
}

export default Loading