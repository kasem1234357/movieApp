import React from 'react'

import { Link, Outlet,  } from 'react-router-dom';
import { Apps, BookMark, Home,Notifications } from '../../icons/svgIcon';
import './feed.css'
function Feed({active,setActive}) {
  // setactive function to open and close  rightbar
  return (
    <div className="flex-box-3 bg-dark grid feed hidden-x feed-box">
        <nav className="flex flex-between feed-nav" >
{/*============= url to the the mian pages==============================*/ }
             <div>
                 <ul className="flex primary-navigation ">
                  <Link to='' className="text-white "><Home width={'20px'}/></Link>
                 <Link to='/explore/movie' state={{ dataType: 'explore' }} className="text-gray">movies</Link>
                 <Link to='/explore/tv' state={{ dataType: 'explore' }}     className="text-gray">tv show</Link>
                 </ul>
             </div>
{/*============= url to the the another pages============================*/ }
             <div>
                 <ul className="flex primary-navigation">
                 <Link to='notification' className="svg-icon">
                    <Notifications width={'20px'} />
                 </Link>
                 <Link to='fav' className="svg-icon">
                    <BookMark/>
                 </Link>
                 <li id="nav-block" className="svg-icon" onClick={()=>setActive(!active)}>
                    <Apps />
                 </li>
                 </ul>
             </div>
  
        </nav>
   <Outlet/>
  </div>
  )
}

export default Feed