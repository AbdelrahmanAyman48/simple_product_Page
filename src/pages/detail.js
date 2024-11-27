import React, { useEffect, useState} from 'react' 
import { useParams } from 'react-router-dom' 
import { products } from '../products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';
import ProductCart from '../components/productCart';

const Detail = () => {
    const { slug } = useParams();
    const [detail, setDetail] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const findDetail = products.filter(product => product.slug === slug);
        if(findDetail.length > 0){
            setDetail(findDetail[0]);
        }else{
            window.location.href = '/';
        }
    }, [slug]);

    const handleMinusQuantity = () => {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }

    const handlePlusQuantity = () => {
        setQuantity(quantity + 1);
    }

    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: detail.id,
            quantity: quantity
        }));
    }

    if (!detail) {
        return <p>Loading...</p>;   
    }

  return (
    <div className='px-4 mb-8 max-w-2xl mx-auto'>
        <h2 className='text-3xl font-semibold text-center'>PRODUCT DETAIL</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
            <div>
                <img src={detail.image} alt="" className='w-full rounded-lg'/>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl uppercase font-medium'>{detail.name}</h1>
                <p className='font-semibold text-2xl'>
                    ${detail.price}
                </p>
                <div className='mt-4'>
                <span className={`py-1 px-3 text-base rounded-full font-medium ${detail.stockStatus === "In Stock" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                {detail.stockStatus}
                </span>
                </div>
                <div className='flex gap-5 items-center'>
                    <div className='flex gap-2 justify-center items-center'>
                        <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-lg flex justify-center items-center' onClick={handleMinusQuantity}>-</button>
                        <span className='bg-gray-200 h-full w-10 font-bold text-xl rounded-lg flex justify-center items-center'>{quantity}</span>
                        <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-lg flex justify-center items-center' onClick={handlePlusQuantity}>+</button>
                    </div>
                    <button className='bg-slate-900 text-white px-7 py-3 rounded-lg shadow-lg' onClick={handleAddToCart}>
                        Add To Cart
                    </button>
                </div>
                <p className='text-sm text-gray-600'>
                    {detail.description}
                </p>
            </div>
        </div>
        {/* <ProductCart/> */}
        <div className='px-2 mb-5'>
      <h1 className='text-3xl mb-5'>Similar Products</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {products.filter((product) => product.id !== detail.id) // Exclude the current product
                .slice(0, 3) // Show up to 3 recommended products
                .map((product, key) =>( 
                    <ProductCart key={key} data={product}/>
                ))}
        </div>
        </div>
    </div>
  )
}

export default Detail