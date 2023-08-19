import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../Button/Button';
import { CartContext } from '../Context/CartContext';
import axios from 'axios'
import {headphonesProductDetails} from '../../Components/Interfaces'
import { formatCurrency } from '../Utilities/formatCurrency';
import { CartItem } from '../Context/CartContext';


// import {headphone}



import './Product.scss'
import { About } from '../About/About';
import { Categories } from '../Categories/Categories';
import { Suggestion } from '../Suggestions/Suggestions';
import { parse } from 'path/posix';
import { GoBack } from '../GoBack/GoBack';

interface boxItem {
    itemName: string,
    itemQuantity: number
}

interface ProductSuggestions {
    name: string,
    image: string,
    id: number
}




export const Product = () => {

    const { id } = useParams()

    // console.log(typeof id, parseInt(id))

    let img = 'assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'
    let img2 = '/assets/product-xx59-headphones/desktop/image-product.jpg'
    let img3 = '/assets/shared/desktop/image-best-gear.jpg'
    let img4 = 'assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'
    

    const [productDetails, setProductDetails] = useState<headphonesProductDetails[]>([])
    const [quantity, setProductQuantity] = useState(1);
    const [ boxItems, setBoxItems ] = useState<boxItem[]>([])
    const [productImages, setProductImages] = useState([])
    const [productSuggestion, setProductSuggestion] = useState<ProductSuggestions[]>([])
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

        // console.log(cartItems)

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
            // const res = await axios.get(`http://localhost:8800/product/${id}`);
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_LINK}/product/${id}`);
            setProductDetails(res.data)
            // console.log(JSON.parse(res.data[0].boxItems))
            setBoxItems(JSON.parse(res.data[0].boxItems))
            setProductImages(JSON.parse(res.data[0].imagePath))
            // const path: string[] = JSON.parse(productDetails[0].imagePath)
            // console.log(productDetails, 'hey', productDetails[0].imagePath)
            // let data = productDetails[0].boxItems
            // console.log(productImages[3])

        } catch(err) {
            console.log(err);
        }
    }


    useEffect(() => {
        fetchProductDetails()
    }, [id])

    // get main product image path function
    function getProductImage(): string {
        const path: string[] = JSON.parse(productDetails[0].imagePath)
        return path[0]
    }

    function createParagraph(text: string): string[] {

        let featuresText = text.split('<br />')


        return featuresText

    }




    return (
        <div className='product'>
            <div className="product-wrapper">

                <GoBack />
                
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
                                <button onClick={handleAddToCart} className='add-cart-btn' >add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-features">
                    <div className="features-text">
                        <h1>FEATURES</h1>
                        <p className='desc-texts'>{productDetails.length > 0 && productDetails[0].features}</p>
                    </div>
                    <div className="features-in-the-box">
                        <h1>IN THE BOX</h1>
                            {boxItems.length > 0 && boxItems.map((boxItem, index) => {
                                return (

                                        <p key={index}><span>{boxItem.itemQuantity}x</span> {boxItem.itemName}</p>

                                )
                            })}
                    </div>
                </div>

                <div className="product-images">
                    <div className="images-block-one">
                        <div 
                        className="img-one"
                        style={productImages.length > 0 ? {backgroundImage: `url(/${productImages[1]})`} : {}}
                        ></div>
                        <div 
                        className="img-two"
                        style={productImages.length > 0 ? {backgroundImage: `url(/${productImages[2]})`} : {}}
                        ></div>
                    </div>
                    <div 
                    className="images-block-two"
                    style={productImages.length > 0 ? {backgroundImage: `url(/${productImages[3]})`} : {}}
                    >
                        <div 
                        className="img-three"
                        ></div>
                    </div>
                </div>

                <Suggestion id={id} />

                <Categories />
                <About />
            </div>
        </div>
    )
}