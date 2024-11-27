import React from 'react'

import ProductCart from '../components/productCart'
// import ProductList from '../components/productCart'
import { products } from '../products'
const Home = () => {
  return (
    <div className='px-2 mb-5'>
      <h1 className='text-3xl mb-5'>List Products</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
            {products.map((product, key) => 
                <ProductCart key={key} data={product}/>
            )}
            {/* {ProductList.map((product) => (
              <ProductCart key={product.id} data={product} />
              ))} */}
      </div>
    </div>
  )
}

export default Home