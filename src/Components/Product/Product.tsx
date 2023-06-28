import { useState } from 'react';
import { Button } from '../Button/Button';
import './Product.scss'



export const Product = () => {

    let img = 'assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'
    let img2 = '/assets/product-xx59-headphones/desktop/image-product.jpg'
    let img3 = '/assets/shared/desktop/image-best-gear.jpg'
    let img4 = 'assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'

    const [productCount, setProductCount] = useState(0);

    const increaseProductCount = () => {
        setProductCount(prevCount => prevCount + 1);
    };

    const decreaseProductCount = () => {
        if (productCount > 0) {
            setProductCount(prevCount => prevCount - 1);
        }
    };


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
                            <h1>XX59 HEAPHONES</h1>
                            <p className='desc-texts'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat possimus libero incidunt, et suscipit eos omnis, distinctio ipsam quaerat laboriosam maiores quis consectetur rerum eaque nemo ut aut itaque atque?</p>
                            <p className='price'>$ 899</p>
                            <div className="add-to-cart">
                                <div className="product-number">
                                    <i className="fa-solid fa-minus" onClick={decreaseProductCount}></i>
                                    <span>{productCount}</span>
                                    <i className="fa-solid fa-plus" onClick={increaseProductCount}></i>
                                </div>
                                <Button buttonText='ADD TO CART' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}