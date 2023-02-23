import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
function Account() {
 const [login,setLogin]=useState(true)
  return (
   <div className='flex center form-box f-column'>
    <div className="box2 bg-gray flow">
    <nav className='flex nav-form text-white'>
     <div className={login?'form-active uppercase':'uppercase'} onClick={()=>setLogin(true)}>Log in</div>
     <div className={!login?'form-active uppercase':'uppercase'} onClick={()=>setLogin(false)}>Sign up</div>
    </nav>
    {login?<Login/>:<Register/>}
    </div>
    
   
   
   
 </div>
  )
}

export default Account