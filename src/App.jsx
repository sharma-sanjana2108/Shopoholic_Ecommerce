import React from 'react'
import Navbar from './Components/Navbar'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import { ProductProvider } from './Context/ProductContext'
import MensWear from './Pages/MensWear'
import WomensWear from './Pages/WomensWear'
import Jewellery from './Pages/Jewellery'
import Electronics from './Pages/Electronics'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Register from './Pages/Register'

const App = () => {
  return (
    <Router>
   <ProductProvider>
   <Navbar/>
  
 <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/menswear' element={<MensWear/>}/>
 <Route path='/womenswear' element={<WomensWear/>}/>
 <Route path='/jewellery' element={<Jewellery/>}/>
 <Route path='/electronics' element={<Electronics/>}/>
 <Route path='/cart' element={<Cart/>}/>
 <Route path='/login' element={<Login/>}/>
 <Route path='/register' element={<Register/>}/>
 </Routes>

 <ToastContainer/>
  
  <Footer/>
   </ProductProvider>
      
    </Router>
  )
}

export default App
