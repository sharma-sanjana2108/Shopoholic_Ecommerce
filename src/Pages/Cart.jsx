import React, { useContext } from 'react'
import ProductContext from '../Context/ProductContext'
import emptycart from "../assets/emptycart.png"
import { Link } from 'react-router-dom'
import CartItem from '../Components/CartItem'

const Cart = () => {

  const {cartItems} = useContext(ProductContext)

  const total = cartItems.reduce((p, currentItem) => {
    return p + (currentItem.price * currentItem.itemQuantity);
  }, 0)


  if (cartItems.length === 0) {
    return (

      <>
      <div className="card empty-cart mx-auto mt-5">
  <img src={emptycart}/>
  <div className="card-body text-center">
    <p className="card-text cart-para">Your cart is feeling a bit lonely! Let's fill it up with fabulous finds.</p>
    <h6 className="card-title cart-title">Explore our collection and add some goodies to your bag. Happy shopping!</h6>
    <Link to={"/"}><button className="btn btn-primary mt-4 mb-5 continue-shop mr-2">Continue Shopping</button></Link>
  </div>
</div>
      
      </>
    );
  }


  return (
    <div className='cart-container'>


      <div className='cart-items added-product'>

       <CartItem/>

      </div>

     

      <div id='card-total' className='card'>
        <div className="bill-section">

        <h1>Shopping Cart Total</h1>
        <br />
        <br />
        <h3>
            Total Amount :
            ${total}
            
          </h3>
          <br />
          <button className="btn btn-danger btn-sm pay-btn w-100">Pay Now</button>
         
        </div>

      </div>
   
  </div>
  )
}

export default Cart;
