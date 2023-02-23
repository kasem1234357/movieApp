import React from 'react'
import ToastBox from '../components/ToastBox'

function Notification() {
  return (
    <div className=' fill flow '>
    <ToastBox type={'account'}/>
    <ToastBox type={'update'}/>
    <ToastBox type={'security'}/>
    <ToastBox type={'account'}/>
    <ToastBox type={'update'}/>
    <ToastBox type={'security'}/>
    </div>
  )
}

export default Notification