
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AddProducts from './components/AddProducts/AddProduct';
import Delete from './components/DeleteProduct/Delete';
import Update from './components/UpdateProducts/UpdateProduct';
import ProductDetail from './components/ProductDetails/ProductDetails';

function  App(){
  return(
    <div classame="App">
     <BrowserRouter>
      
       <Routes>
               <Route path='/products' exact element={<AddProducts />} />
               <Route path='/delete' exact element={<Delete />} />
               <Route path='/update' exact element={<Update />} />
               <Route path='/productDetail' exact element={<ProductDetail />} />
      </Routes>
      
      </BrowserRouter>
      {/* <Navbar/>     
  <Details/>*/}
      
      
    </div>
  );
}   
export default  App;