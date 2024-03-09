import React, { useContext } from 'react'
import ProductContext from '../Context/ProductContext'

const CartItem = () => {

  const { dispatch, cartItems } = useContext(ProductContext)
   

  const increaseQuantity = (currentItem) => {
   dispatch({
    type: "INCREASE_PRODUCT",
    payload: currentItem
   })
  }

  const decreaseQuantity = (currentItem) => {
     dispatch({
      type: "DECREASE_PRODUCT",
      payload: currentItem
     })
  }

  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_CART",
      payload: id,
    })
  }

  return (
    <>

      {
        cartItems.map((currentItem, index) => (
    
          <div className='product all-items all-remove-item' key={index}>
            <div className="card product-card text-center ">
              <span className='bag-part'>
                <img id="product-img" src={currentItem.image} className='card-img-top mt-3 mx-3' alt="" />
              </span>

              <div className="card-body mx-3">
                <h5 className='card-title'>{currentItem.title}</h5>
                <span className='add-btn'>
                  <p className="card-text fs-5"><small className="text-dark">Price: ${currentItem.price}</small></p>
                  </span>
                  <span className='qty-btn'>
                    <button id='plus-btn' onClick={() => increaseQuantity(currentItem)}>+</button>
                    <h5>Qty: {currentItem.itemQuantity}</h5>
                  <button id='minus-btn' onClick={() => decreaseQuantity(currentItem)}>-</button> 
                  </span>
                  <button className="remove-btn btn btn-sm btn-danger w-100" onClick={() => handleRemove(currentItem.id)}>
                    Remove Item
                  </button>
                
              </div>

            </div>

          </div>
        ))
      }
    </>
  )
}

export default CartItem;


