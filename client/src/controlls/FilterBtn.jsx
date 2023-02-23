import React from 'react'
import { Plus, Success } from '../icons/svgIcon'

function FilterBtn(props) {
  return (
   <div  {...props} className={`flex-items box ${props.active ==="true"?"bg-main":"bg-dark"} flex flex-between`}><p>{props.name}</p>
   {props.active === "true"?<Success width="20px"/>:<Plus/>}
   
   
   </div>
  )
}

export default FilterBtn