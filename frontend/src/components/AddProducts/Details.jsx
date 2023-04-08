import React from 'react';
import './Details.css'
import ProductsForm from './ProductsForm';
function Details() {
  return (
    
    <div className='details'>
    <table style={{ borderCollapse: 'collapse' }} >
      <thead>
        <tr  className='titles'>
          <th style={{ border: '1px solid black' }}>Ref</th>
          <th style={{ border: '1px solid black' }}>Product</th>
          <th style={{ border: '1px solid black' }}>Location</th>
          <th style={{ border: '1px solid black' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: '1px solid black' }}>01</td>
          <td style={{ border: '1px solid black' }}>Handcrafted Cooking utensils</td>
          <td style={{ border: '1px solid black' }}>Colombo</td>
          <td style={{ border: '1px solid black' }}>
            <button className='button view'>VIEW</button>
            <br />
            <button className='button edit'>EDIT</button>
            <br />
            <button className='button delete'>DELETE</button>

          </td>
        </tr>
        <tr>
        <td>02</td>
          <td style={{ border: '1px solid black' }}>Clay Objects</td>
          <td style={{ border: '1px solid black' }}>Kandy</td>
          <td style={{ border: '1px solid black' }}>
            <button className='button view'>VIEW</button>
            <br />
            <button className='button edit'>EDIT</button>
            <br />
            <button className='button delete'>DELETE</button>
          </td>
        </tr>
      </tbody>
    </table>
    <ProductsForm/>
    </div>
  );
}

export default Details;
