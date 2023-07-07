import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../Button/Button';
import { CartContext } from '../Context/CartContext';
import axios from 'axios'
import {headphonesProductDetails} from '../../Components/Interfaces'
import { formatCurrent } from '../Utilities/formatCurrency';

// import {headphone}



import './Product.scss'




export const Product = () => {

    const { id } = useParams()

    // console.log(typeof id)

    let img = 'assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'
    let img2 = '/assets/product-xx59-headphones/desktop/image-product.jpg'
    let img3 = '/assets/shared/desktop/image-best-gear.jpg'
    let img4 = 'assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'
    

    const [productDetails, setProductDetails] = useState<headphonesProductDetails[]>([])
    const [quantity, setProductQuantity] = useState(1);
    const { addToCart } = useContext(CartContext)

    const handleAddToCart = () => {

        const item = {
            id: productDetails[0].id, 
            name: productDetails[0].name,
            price: productDetails[0].price,
            quantity
        }
        addToCart(item)

        console.log(item)
    }

    const increaseProductCount = () => {
        setProductQuantity(prevCount => prevCount + 1);
    };

    const decreaseProductCount = () => {
        if (quantity > 0) {
            setProductQuantity(prevCount => prevCount - 1);
        }
    };

    const fetchProductDetails = async () => {
        try{
            const res = await axios.get(`http://localhost:8800/product/${id}`);
            setProductDetails(res.data)
            console.log(productDetails)
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchProductDetails()
    }, [id])


    return (
        <div className='product'>
            <div className="product-wrapper">
                <div className="go-back">
                    <p>Go back</p>
                </div>
                <div className="product-preview">
                    <div 
                    className="product-img-preview"
                    style={{backgroundImage: `url(/${img4})`}}
                    >
                    </div>
                    <div className="product-desc-preview">
                        <div className="description-wrapper">
                            {/* <h1>XX59 HEAPHONES</h1> */}
                            <h1>{productDetails.length > 0 && productDetails[0].name.toUpperCase()}</h1>
                            {/* <p className='desc-texts'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat possimus libero incidunt, et suscipit eos omnis, distinctio ipsam quaerat laboriosam maiores quis consectetur rerum eaque nemo ut aut itaque atque?</p> */}
                            <p className='desc-texts'>{productDetails.length > 0 && productDetails[0].description}</p>
                            {/* <p className='price'>$ 899</p> */}
                            <p className='price'>{productDetails.length > 0 && `$ ${productDetails[0].price}`}</p>
                            <div className="add-to-cart">
                                <div className="product-number">
                                    <i className="fa-solid fa-minus" onClick={decreaseProductCount}></i>
                                    <span>{quantity}</span>
                                    <i className="fa-solid fa-plus" onClick={increaseProductCount}></i>
                                </div>
                                {/* <Button buttonText='ADD TO CART' /> */}
                                <button onClick={handleAddToCart} >add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}