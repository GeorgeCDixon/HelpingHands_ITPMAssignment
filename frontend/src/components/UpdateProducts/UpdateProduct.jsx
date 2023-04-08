import React, { useState } from 'react';
import './UpdateProduct.css'
import Navbar from '../AddProducts/Navbar'
function ProductsForm() {
  const [userInput, setUserInput] = useState({
    ProductName: '',
    ProductCategory: '',
    Description:'',
    ExpectedMinPrice:'',
    Location:''
  });

  const handleChange = e => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Product Name: ', userInput.ProductName);
    console.log('Product Category: ', userInput.ProductCategory);
    console.log('Description: ', userInput.Description);
    console.log('Expected Minimum Price: ', userInput.ExpectedMinPrice);
    console.log('Location: ', userInput.Location);
  };

  return (
    <div>
      <Navbar/>
    <form className='products-update' onSubmit={handleSubmit}>
      <label>
        Product Name
        <br />
        <input
          type="email"
          name="email"
          value={userInput.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Product Category
        <br />
        <input
          type="password"
          name="password"
          value={userInput.password}
          onChange={handleChange}
        />
      </label>
      <label>
        Description
        <br />
        <input
          type="password"
          name="password"
          value={userInput.password}
          onChange={handleChange}
        />
      </label>
      <label>
       Expected Minimum Price
       <br />
        <input
          type="password"
          name="password"
          value={userInput.password}
          onChange={handleChange}
        />
      </label>
      <label>
        Location
        <br />
        <input
          type="password"
          name="password"
          value={userInput.password}
          onChange={handleChange}
        />
      </label>
      <button className='button submit' type="submit">Update Changes</button>
    </form>
    </div>
  );
}

export default ProductsForm;
