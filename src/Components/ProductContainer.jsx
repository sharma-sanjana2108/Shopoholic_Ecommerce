import React, { useContext, useEffect } from 'react'
import ProductCard from './ProductCard'
import ProductContext from '../Context/ProductContext'
import { fetchItems } from '../Context/ProductAction'

const ProductContainer = () => {

const {products, dispatch} = useContext(ProductContext)

   const getDataProducts = async() => {
    const data = await fetchItems()
    dispatch({
      type: "GET_ITEMS",
      payload : data, 
    })
   
   }

   useEffect(() => {
    getDataProducts()
   }, [])

  if (products.length===0) {
    return(
      <h2 className='display-5'>Loading.....</h2>
    )
    
  }
   
  return (
    <div className='container-everything'>
      <div className="row">
        <h1 className='all-products-title mt-5 text-center'>All Products</h1>
        {
          products.map((product) => <ProductCard key={product.id} product={product}/>)
        }
      </div>
    </div>
  )
}

export default ProductContainer;
