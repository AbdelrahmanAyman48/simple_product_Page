import React from 'react' 
import { useSelector, useDispatch } from 'react-redux' 
import CartItem from './cartItem';
import { toggleStatusTab, clearCart  } from '../stores/cart';
import { products } from '../products';
import { Link } from 'react-router-dom';

const CartTab = () => {
    const carts = useSelector(store => store.cart.items);
    const statusTab = useSelector(store => store.cart.statusTab);
    const dispatch = useDispatch();

    const handleCloseTabCart = () => {
        dispatch(toggleStatusTab());
    }

    const handleClearCart = () => {
        dispatch(clearCart()); // Dispatch the action to clear the cart
      };
     // Calculate the total price of all items in the cart
    const calculateTotal = () => {
        return carts.reduce((total, item) => {
            const product = products.find(p => p.id === item.productId);
            if (product) {
                return total + (product.price * item.quantity);
            }
            return total;    
        }, 0);
    };

    // Format total price to 2 decimal places
    const totalPrice = calculateTotal().toFixed(2);

    const handleCheckout = () => {
        if (carts.length === 0) {
            alert("Your cart is empty. Please add items before checkout.");
        } else {
            alert(`Proceeding to checkout. Total: $${totalPrice}`);
        }
    };

    return (
    <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] 
    transform transition-transform duration-500
    ${statusTab === false ? "translate-x-full" : ""}
    `}>
        {/* <div>
        <Link to="/" className='text-xl font-semibold'>.Home.</Link>
        <h2 className='p-2 text-white text-2xl'>Shopping Cart</h2>
        </div> */}
        <div className="flex items-center justify-between bg-gray-800 p-4 rounded-md">
            <Link to="/" className="text-xl font-semibold text-blue-400 hover:text-blue-300 transition">
                .Home.
            </Link>
            <h2 className="text-white text-2xl font-bold">Shopping Cart</h2>
        </div>

        {/* <div className='p-5'>
            {carts.map((item, key) => 
                <CartItem key={key} data={item}/>
            )}
        </div> */}
        <div className='p-5 overflow-y-auto'>
                {/* Check if the cart is empty */}
                {carts.length === 0 ? (
                    <div className='text-center text-white'>
                        <p>Your cart is empty.</p>
                    </div>
                ) : (
                    carts.map((item, key) => (
                        <CartItem key={key} data={item} />
                    ))
                )}
            </div>

          {/* Cart Total and Action Buttons */}
        {/* <div className='p-5 flex justify-between items-center'>
            <h3 className='text-white text-xl bg-black'>Total: ${totalPrice}</h3>
        </div> */}
        {carts.length > 0 && (
        <div className='p-4 flex justify-between items-center bg-gray-800 border-t-2 border-gray-600'>
            <h3 className='text-white text-xl font-bold bg-sky-700 p-2 rounded-lg shadow-lg'>
            Total: ${totalPrice}
            </h3>

            <button className='text-white text-xl font-bold bg-red-500 p-2 rounded-lg shadow-lg' onClick={handleClearCart}>CLEAR CART</button> {/* New button to clear the cart */}
        </div>
        )}


        <div className='grid grid-cols-2'>
            <button className='bg-black text-xl font-bold p-2 text-white' onClick={handleCloseTabCart}>CLOSE</button>

            <button className='bg-amber-600 text-xl font-bold p-2 text-white' onClick={handleCheckout}>CHECKOUT</button>
        </div>
    </div>
  )
}

export default CartTab