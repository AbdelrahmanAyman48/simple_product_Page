import React, { useState } from 'react' 
import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png'
import Skeleton from 'react-loading-skeleton';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';
import QuickViewModal from './quickViewModal'; // Import the QuickViewModal

const ProductCart = ({ data, loading }) => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

    const carts = useSelector(store => store.cart.items);

    const {id, name, price, image, slug, stockStatus, description } = data || {};

    const dispatch = useDispatch();

    
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    }

    const handleQuickViewClick = () => {
        setIsModalOpen(true); // Open modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close modal
    };

    if (loading) {
        return (
            <div className="bg-white p-5 rounded-xl shadow-sm">
                <Skeleton height={320} />
                <Skeleton height={30} width="60%" className="mt-3" />
                <Skeleton height={20} width="40%" className="mt-1" />
                <Skeleton height={40} width="80%" className="mt-3" />
            </div>
        );
    }


  
    return (
    <div className='bg-white p-2 rounded-xl shadow-sm'>
        <div className='relative'>
            
            <Link to={`/${slug}`}>
            <img src={image} alt='' className='w-full h-auto drop-shadow-[0_80px_30px_#0007]' />
            </Link>
            <span className={`absolute top-3 right-0 py-1 px-3 text-xs rounded-full ${stockStatus === "In Stock" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
            {stockStatus}
            </span>

             {/* Quick View Button */}
             <button
                    className="absolute top-3 left-0 py-1 px-2 text-xs bg-blue-500 text-white rounded-full"
                    onClick={handleQuickViewClick}
                >
                    View
                </button>
            
        </div>

        <h3 className='text-base py-3 text-center font-medium'>{name}</h3>

        <div className='flex justify-between items-center'>
            <p>
                $<span className='text-2xl font-medium'>{price}</span>
            </p>
            <button className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2' onClick={handleAddToCart}>
                <img src={iconCart} alt="" className='w-5'/>
                Add
            </button>
        </div>

          {/* Quick View Modal */}
        <QuickViewModal 
                productDetails={{ name, price, image, description }} 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                addCart={handleAddToCart}
            />
    </div>
  )
}

export default ProductCart


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import iconCart from "../assets/images/iconCart.png";
// import { useSelector, useDispatch } from "react-redux";
// import { addToCart } from "../stores/cart";
// import { products } from "../products"; // Assuming this is the path to your product array

// export const ProductCart = (props) => {
//   const { id, name, price, image, slug, stockStatus } = props.data;
//   const dispatch = useDispatch();
//   const carts = useSelector(store => store.cart.items);
//   const handleAddToCart = () => {
//     dispatch(addToCart({ productId: id, quantity: 1 }));
//   };

//   return (
//     <div className="bg-white p-5 rounded-xl shadow-sm">
//       <div className="relative">
//         <Link to={slug}>
//           <img
//             src={image}
//             alt=""
//             className="w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]"
//           />
//         </Link>
//         <span
//           className={`absolute top-3 right-3 py-1 px-3 text-xs rounded-full ${
//             stockStatus === "In Stock"
//               ? "bg-green-500 text-white"
//               : "bg-red-500 text-white"
//           }`}
//         >
//           {stockStatus}
//         </span>
//       </div>

//       <h3 className="text-2xl py-3 text-center font-medium">{name}</h3>

//       <div className="flex justify-between items-center">
//         <p>
//           $<span className="text-2xl font-medium">{price}</span>
//         </p>
//         <button
//           className="bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2"
//           onClick={handleAddToCart}
//         >
//           <img src={iconCart} alt="" className="w-5" />
//           Add To Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export const ProductList = () => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [productData, setProductData] = useState([]);

//   useEffect(() => {
//     // Simulating API call
//     const fetchProducts = () => {
//       setLoading(true);
//       setError(false);
//       setTimeout(() => {
//         // Simulate success or error
//         if (Math.random() > 0.8) {
//           setError(true);
//           setLoading(false);
//         } else {
//           setProductData(products);
//           setLoading(false);
//         }
//       }, 2000); // Simulate a 2-second API delay
//     };
//     fetchProducts();
//   }, []);

//   if (loading) {
//     return (
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {Array.from({ length: 3 }).map((_, index) => (
//           <div
//             key={index}
//             className="bg-gray-200 p-5 rounded-xl shadow-sm animate-pulse"
//           >
//             <div className="h-80 bg-gray-300 mb-4"></div>
//             <div className="h-6 bg-gray-300 mb-3 w-3/4 mx-auto"></div>
//             <div className="h-6 bg-gray-300 mb-3 w-1/2 mx-auto"></div>
//             <div className="h-10 bg-gray-300 w-1/2 mx-auto"></div>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center text-red-500">
//         Failed to load products. Please try again.
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//       {productData.map((product) => (
//         <ProductCart key={product.id} data={product} />
//       ))}
//     </div>
//   );
// };

// export default{ ProductList};
// // export { ProductList, ProductCart};
