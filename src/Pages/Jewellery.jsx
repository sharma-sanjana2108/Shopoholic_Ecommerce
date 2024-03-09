import React, { useContext, useEffect } from 'react'
import ProductCard from '../Components/ProductCard'
import ProductContext from '../Context/ProductContext'
import { fetchCategoryProducts } from '../Context/ProductAction'

const Jewellery = () => {

  const{products, dispatch} = useContext(ProductContext)

  const getElectronics = async(category) => {
    const data = await fetchCategoryProducts(category)

    dispatch({
      type : "GET_ELECTRONICS",
      payload : data,
    },)

    useEffect(() => {
      getElectronics("jewelery")
    }, [])

    if (!products) {
      return (
        <div className="container ">
          <h1 className="all-products-title">Loading...</h1>
        </div>
      );
    }


  }
  return (
    <div className='container jwlry-page'>
       <h1 className="all-products-title text-center p-4">Jewellery</h1>
       <div className="stock">
       {
        products.map((product) => ( <ProductCard key={product.id} product={product}/>))
       }
       </div>
  
  </div>
  )
}

export default Jewellery;
