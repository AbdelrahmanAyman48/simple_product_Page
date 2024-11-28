import React from 'react';
import ProductCart from '../components/productCart';
import { products } from '../products';

const Home = () => {
  return (
    <div className="px-2 mb-5">
      <h1 className="text-3xl mb-5 font-bold text-center sm:text-2xl md:text-left">List Products</h1>
      
      {/* Responsive grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {products.map((product, key) => (
          <ProductCart key={key} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
