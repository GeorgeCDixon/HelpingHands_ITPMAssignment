import React from 'react'
import './ProductDetails.css'
import spoon from '../../img/spoons.jpg'
import chef from '../../img/chef.jpg'
import Navbar from '../AddProducts/Navbar'
import cookingSet from '../../img/cookingSet.jpg'
const ProductDetails = () => {
  return (
    <div>
        <Navbar/>
        <div className='detail-body'>
        <div className='left'>
      <img className='Spoon' src={spoon} alt="" />
      <img className='Chef' src={chef} alt="" />
      <img className='CookingSet' src={cookingSet} alt="" />
    </div>
    <div className='right'>
        <span>Handcrafted cooking utensils</span>
        <span>Description</span>
        <div className='box2'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor velit cum voluptate ducimus, esse placeat libero numquam ullam incidunt! Autem accusamus vitae tempore facere fugit obcaecati sapiente! Soluta, quia assumenda.</p>
        </div>
        <span>Location : Colombo Sri Lanka
            <br />
            Contact Person : M.N.Perera
            <br />
            Contact Details : +94 71 1475235
        </span>
    </div>
    </div>   
    </div>
  )
}

export default ProductDetails
