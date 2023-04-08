import React from 'react'
import  './Navbar.css'
import logo from '../../img/hh.png'

const Navbar = () => {
  return (
    <div className='navigation'>
       <img className='logo' src={logo} alt="" />
         
             <div className='n-list'>
             <ul>
                    <li>Organizations</li>
                    <li>Individual</li>
                    <li>Projects</li>
                    <li>Products</li>
                    <li>About us</li>
                  
                </ul>
              </div> 
             
            <div>
            <button className='button n-button'>Log in</button>
            </div>  

          
               
          
                     
     </div>
  )
}

export default Navbar
