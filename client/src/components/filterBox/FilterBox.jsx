import React from 'react'
import './filterBox.css'
import {Close} from '../../icons/svgIcon'
import { filterApi } from './FilterApi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function FilterBox({setActiveFilter}) {
  const [filterOptions,SetFilterOptions] = useState({
    years:[],
    age:[],
    dataType:[]
  })
  const navigate = useNavigate()
  return (
    <div className='filterBox bg-dark text-white '>
        <h2>Filter Box</h2>
        <span className='close'>
          <Close width={'30px'} color={'#52b788'} onClick={()=>setActiveFilter(false)}/> 
        </span>
        <div className='flex f-column popUpBox-filter '>
            <div>
                <div className="title">
                    <h3>Type</h3>
                </div>
                <div className="filter-item-box flex flex-between fw-row">
                    {filterApi.type.map(({id,name},index)=>(
                      <div className={`popUp-filter  
                           ${filterOptions.dataType.some(data => data === id) ? 'active-popUp':'bg-white'} `
                           } 
                          key={index} 
                          onClick={()=>{
                            filterOptions.dataType.some(data => data === id)?SetFilterOptions((prev)=>{
                              return {...prev,dataType:prev.dataType.filter(data => data !== id)}}): SetFilterOptions((prev)=>{
                               return {...prev,dataType:[...prev.dataType,id]}})
                              }
                          } >{name}</div>))}
                </div>
            </div>
            <div >
                  <div className="title">
                      <h3>Age</h3>
                  </div>
                  <div className="filter-item-box flex flex-between fw-row">
                  {filterApi.age.map((age,index)=>(
                       <div className={`popUp-filter  ${filterOptions.age.indexOf(age) !== -1 ? 'active-popUp':'bg-white'} `} 
                       onClick={(e)=>{filterOptions.age.indexOf(age) === -1 &&SetFilterOptions((prev)=>{
                          return {...prev,age:[...prev.age,age]}})
                       }}key={index}>
                           {age}
                  </div>
           ))}
          
                  </div>
            </div>
        <div >
         <div className="title">
          <h3>Section</h3>
         </div>
         <div className="filter-item-box flex flex-between fw-row">
         <div className="popUp-filter bg-white">hello</div>
          <div className="popUp-filter bg-white">hello</div>
          <div className="popUp-filter bg-white">hello</div>
          <div className="popUp-filter bg-white">hello</div>
          <div className="popUp-filter bg-white">hello</div>
          <div className="popUp-filter bg-white">hello</div>
          <div className="popUp-filter bg-white">hello</div>
          <div className="popUp-filter bg-white">hello</div>
         </div>
        </div>
        <div className='last-child' >
         <div className="title">
          <h3>Year</h3>
         </div>
         <div className="filter-item-box flex flex-between fw-row">
         {filterApi.years.map((year,index)=>(
             <div 
             className={`popUp-filter  ${filterOptions.years.indexOf(year) !== -1 ? 'active-popUp':'bg-white'} `} 
             onClick={()=>{
              filterOptions.years.indexOf(year) === -1 &&
             SetFilterOptions((prev)=>{
               return {
                 ...prev,
                 years:[...prev.years,year]
               }
             })
            }}
             key={index}>{year}</div>
           ))}
         </div>
        </div>
    </div>
      <div className='acceptedBox bg-dark'>
       <button onClick={()=>{
        setActiveFilter(false)
        console.log(filterOptions);
if(window.location.pathname === ('/explore/tv')){
  navigate("explore/tv",{ state: { dataType: 'filtershowsByType',years:filterOptions.years,filter:filterOptions.dataType } })
 }else{
  navigate("explore/movie",{ state: { dataType: 'filtershowsByType',years:filterOptions.years,filter:filterOptions.dataType } })
 }
       }}>done</button>
      </div>
      
    </div>
  )
}

export default FilterBox