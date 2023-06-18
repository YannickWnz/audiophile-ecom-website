import { Button } from '../Button/Button';
import './Product.scss'

interface ProductDetails {
    id?: number;
    intro?: string;
    productName?: string;
    productDescription?: string;
    productImage?: string;
    positionReverse?: boolean;
}

export const Product = ({ id, intro, productName, productDescription, productImage, positionReverse }: ProductDetails) => {
// export const Product = () => {

const boxItems = [
    { "id": 0, "name": "Available" },
    { "id": 1, "name": "Ready" },
    { "id": 2, "name": "Started" }
]

if(positionReverse) {console.log(positionReverse)}

    return (
        <div className={`product ${positionReverse ? 'row-reverse' : '' }`}>
            <div className="img-wrapper" style={{ backgroundImage: `url(${productImage})` }} ></div>
            <div className="product-desc">
                <p className='intro'>NEW PRODUCT</p>
                <h1>XX99 MARK II HEADPHONES</h1>
                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                <Button />
            </div>
        </div>
    )
}