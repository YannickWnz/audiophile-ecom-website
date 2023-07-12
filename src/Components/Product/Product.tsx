import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../Button/Button';
import { CartContext } from '../Context/CartContext';
import axios from 'axios'
import {headphonesProductDetails} from '../../Components/Interfaces'
import { formatCurrency } from '../Utilities/formatCurrency';

// import {headphone}



import './Product.scss'




export const Product = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    // console.log(typeof id)

    let img = 'assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'
    let img2 = '/assets/product-xx59-headphones/desktop/image-product.jpg'
    let img3 = '/assets/shared/desktop/image-best-gear.jpg'
    let img4 = 'assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'
    

    const [productDetails, setProductDetails] = useState<headphonesProductDetails[]>([])
    const [quantity, setProductQuantity] = useState(1);
    const { addToCart, cartItems } = useContext(CartContext)

    const handleAddToCart = () => {

        const item = {
            id: productDetails[0].id, 
            name: productDetails[0].name,
            price: productDetails[0].price,
            itemImage: getProductImage(),
            quantity
        }
        addToCart(item)

        console.log(cartItems)

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
            // const path: string[] = JSON.parse(productDetails[0].imagePath)
            console.log(productDetails, 'hey', productDetails[0].price)
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchProductDetails()
    }, [id])

    // get main product image path function
    function getProductImage(): string {
        // if (productDetails.length > 0) {}
        const path: string[] = JSON.parse(productDetails[0].imagePath)
        return path[0]
    }

    // go to previous page function
    const goToPreviousPage = (): void => {
        navigate(-1)
    }


    return (
        <div className='product'>
            <div className="product-wrapper">
                <div className="go-back">
                    <p 
                    onClick={goToPreviousPage}
                    >Go back</p>
                </div>
                <div className="product-preview">
                    <div 
                    className="product-img-preview"
                    style={productDetails.length > 0 ? {backgroundImage: `url(/${getProductImage()})`} : {}}
                    // style={{backgroundImage: `url(/${img4})`}}
                    >
                    </div>
                    <div className="product-desc-preview">
                        <div className="description-wrapper">
                            {/* <h1>XX59 HEAPHONES</h1> */}
                            <h1>{productDetails.length > 0 && productDetails[0].name.toUpperCase()}</h1>
                            {/* <p className='desc-texts'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat possimus libero incidunt, et suscipit eos omnis, distinctio ipsam quaerat laboriosam maiores quis consectetur rerum eaque nemo ut aut itaque atque?</p> */}
                            <p className='desc-texts'>{productDetails.length > 0 && productDetails[0].description}</p>
                            {/* <p className='price'>$ 899</p> */}
                            <p className='price'>{productDetails.length > 0 && `${formatCurrency(productDetails[0].price)}`}</p>
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