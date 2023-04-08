import React from 'react'
import './Delete.css'
import Navbar from '../AddProducts/Navbar'
const Delete = () => {
  return (
    <div>
    <Navbar/>
    <div className='box'>
        <span>Delete Product</span>
        <span>Are you sure you want to delete this ?</span>
        <button className='button cancel'>Cancel</button>
        <button className='button yes'>Yes,Confirm</button>
      
    </div>
    </div>
  )
}

export default Delete
