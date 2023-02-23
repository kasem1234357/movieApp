import React from 'react'

export const Arrow=(props)=>{
  const {color,...otherProps} = props
  return<svg {...otherProps} className='svg-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill={color?color:'#fff'}><path d="M7.6 5.8c0 .4.1.7.4.9l4.6 4.3c.5.5.5 1.4 0 1.9L8 17.2c-.3.2-.4.6-.4.9 0 1.1 1.3 1.7 2.1.9l6.8-6.2c.6-.5.6-1.4 0-1.9l-6.8-6c-.8-.7-2.1-.1-2.1.9z"></path></g></svg>
}
export const Rating =(props)=>{
  const {color,...otherProps} = props
  return <svg {...otherProps}  className='svg-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill={color?color:'#fff'}><path d="M8.9 8.8H2.1c-1 0-1.4 1.2-.6 1.8l5.5 4-2.1 6.5c-.3.9.8 1.7 1.5 1.1l5.5-4 5.5 4c.8.6 1.8-.2 1.5-1.1L17 14.6l5.5-4c.8-.6.4-1.8-.6-1.8H15l-2-6.5c-.3-.9-1.6-.9-1.9 0L8.9 8.8z"></path></g></svg>
}
export const Download=(props)=>{
  const {color,...otherProps} = props
  return <svg  {...otherProps} 
   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill={color?color:'#fff'}><path d="M19 10c-.8-.8-2.1-.8-2.8 0L14 12.1V4c0-1.1-.9-2-2-2s-2 .9-2 2v8.2L7.8 10c-.7-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l5.6 5.6c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l5.5-5.5c.9-.8.9-2.1.1-2.9zM21 16c-.5 0-1 .5-1 1v3H4v-3c0-.5-.5-1-1-1s-1 .5-1 1v4c0 .5.5 1 1 1h18c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1z"></path></g></svg>
}
export const Home=(props)=>{
  const {color,...otherProps} = props
  return <svg {...otherProps}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g fill={color?color:'#fff'}>
   <g>
    <path d="M12,3l-9.5,9.5c-0.3,0.3-0.3,0.7,0,1l0,0c0.3,0.3,0.7,0.3,1,0L12,5c0,0,8.5,8.5,8.5,8.5c0.3,0.3,0.7,0.3,1,0v0   c0.3-0.3,0.3-0.7,0-1L12,3z"></path>
    <path d="M12,6l-7,7v8h5v-4c0-1.1,0.9-2,2-2s2,0.9,2,2v4h5v-8L12,6z"></path>
  </g>
  </g>
</svg>
  
}
export const BookMark =(props)=>{
  const {color,...otherProps} = props
  return <svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill={color?color:'#fff'}>
  <polygon points="18,22 12,16 6,22 6,2 18,2 "></polygon>
  </g></svg>
  
}
export const Close =(props)=>{
  const {color,...otherProps} = props
  return <svg  {...otherProps} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><g fill={color?color:'#fff'} data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>
}
export const Notifications =(props)=>{
  const {color,...otherProps}=props
  return <svg {...otherProps}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.146 3.248a2 2 0 0 1 3.708 0A7.003 7.003 0 0 1 19 10v4.697l1.832 2.748A1 1 0 0 1 20 19h-4.535a3.501 3.501 0 0 1-6.93 0H4a1 1 0 0 1-.832-1.555L5 14.697V10c0-3.224 2.18-5.94 5.146-6.752zM10.586 19a1.5 1.5 0 0 0 2.829 0h-2.83zM12 5a5 5 0 0 0-5 5v5a1 1 0 0 1-.168.555L5.869 17H18.13l-.963-1.445A1 1 0 0 1 17 15v-5a5 5 0 0 0-5-5z"fill={color?color:'#fff'}  /></svg>
}
export const Apps =(props)=>{
  const {color,...otherProps}=props
  return <svg {...otherProps}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 144 24"><path  d="M10,2H3C2.4,2,2,2.4,2,3v7c0,0.6,0.4,1,1,1h7c0.6,0,1-0.4,1-1V3C11,2.4,10.6,2,10,2z M10,13H3c-0.6,0-1,0.4-1,1v7c0,0.6,0.4,1,1,1h7c0.6,0,1-0.4,1-1v-7C11,13.4,10.6,13,10,13z M21,2h-7c-0.6,0-1,0.4-1,1v7c0,0.6,0.4,1,1,1h7c0.6,0,1-0.4,1-1V3C22,2.4,21.6,2,21,2z M21,13h-7c-0.6,0-1,0.4-1,1v7c0,0.6,0.4,1,1,1h7c0.6,0,1-0.4,1-1v-7C22,13.4,21.6,13,21,13z" fill={color?color:'#fff'}/></svg>
}
export const Plus =(props)=>{
  const {color,...otherProps}=props
  return <svg {...otherProps} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 455 455" enableBackground='new 0 0 455 455' width={'15px'} >
<polygon  fill={color?color:'#fff'} points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 
 455,242.5 "/></svg>
}
export const Success = (props)=>{
  const {color,...otherProps}=props
  return <svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill={color?color:'#fff'}><path d="M22.5 4.5c-.8-.8-2.2-.8-3 0L9 15l-4.5-4.5c-.8-.8-2.2-.8-3 0s-.8 2.2 0 3L9 21 22.5 7.5c.8-.8.8-2.2 0-3z"></path></g></svg>
}
export const Warning = (props)=>{
  const {color,...otherProps}=props
  return <svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill='#cedd45'><path fill='#22262a' d="M12 0L0 23h24L12 0zm0 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-5c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2s2 .9 2 2v6c0 1.1-.9 2-2 2z"></path></g></svg>
  
}