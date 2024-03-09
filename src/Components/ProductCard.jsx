import React, { useContext } from 'react'
import ProductContext from '../Context/ProductContext';

const ProductCard = ({ product }) => {
  

  const { dispatch } = useContext(ProductContext)

  const handleAdd = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {productItem: product, itemQuantity: 1  },
    })
  }


  return (
    <div className='card all-items-container'>
      <div className="product-card">
        <span>
          <img id='product-img' src={product.image} className="card-img-top" alt="..." />
        </span>
        <div className="card-body ">
          <h5 className="card-title">{product.title}</h5>
          <span className='add-btn'>
            <p className ="card-text"><small className="text-dark fs-5">Price: ${product.price}</small></p>
            <button className=" btn btn-sm btn-dark rounded-5 px-3 py-1 fs-6 bag-btn" onClick={() => handleAdd(product)}><i className="bi bi-bag me-1"></i> Add to Bag</button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
