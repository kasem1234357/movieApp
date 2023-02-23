import React, { useContext, useState } from 'react'

import Feed from '../components/Feed/Feed';
// import PopUp from '../components/PopUp/PopUp';
import RightBar from '../components/RightBar/RightBar';
// import { contextData } from '../dataBase/context';
import '../index.css';
function Home() {
  const[active,setActive]= useState(false);
  
  return (

    <div className='root bg-dark'>
      <div className="flex  hidden">
      
      <Feed active={active} setActive={setActive}/>
      <RightBar active={active} setActive={setActive}/>
     
    </div>
    </div>
    
  );
}

export default Home