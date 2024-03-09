import React, { useContext, useEffect } from 'react'
import ProductCard from '../Components/ProductCard';
import ProductContext from '../Context/ProductContext';
import { fetchCategoryProducts } from '../Context/ProductAction';

const Electronics = () => {

  const { products, dispatch } = useContext(ProductContext)

  const getElectronics = async (category) => {
    const data = await fetchCategoryProducts(category)

    dispatch({
      type: "GET_ITEMS",
      payload: data,
    })
  }

  useEffect(() => {
    getElectronics("electronics")
  }, [])

  if (!products) {
    return (
      <div className="container">
        <h1 className="all-products-title">Loading...</h1>
      </div>
    );
  }
  return (
    <div className='container jwlry-page'>
      <h1 className="all-products-title text-center p-4">Electronics</h1>
      <div className="stock">
        {
          products.map((product) => (<ProductCard key={product.id} product={product} />))
        }
      </div>

    </div>
  )
}

export default Electronics;

