import { useState } from 'react';
import { About } from '../../Components/About/About';
import { Categories } from '../../Components/Categories/Categories';
import { Product } from '../../Components/Product/Product';
import './ProductCategory.scss'

interface ProductCategory {
    category: string;
}

interface details {
    id: string;
    productName: string;
    productDescription: string;
}

export const ProductCategory = ({category}: ProductCategory)  => {

    console.log(category)

    const bgImg = {
    }
    let img = 'assets/shared/desktop/image-best-gear.jpg'
    let img2 = 'assets/product-yx1-earphones/desktop/image-product.jpg'
    let img3 = 'assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'

    // const [isSet, setIsSet] = useState(true)

    // const ProductDetails


    return (
        <div className="product-category">
            <div className="category-name">
                <h1>{category.toUpperCase()}</h1>
            </div>
            <div className="contents">
                <Product productImage={img2} />
                <Product positionReverse={true} productImage={img3} />
                <Product productImage={img} />
                {/* <Product /> */}
                {/* <div className="product-one">
                    <div className="img-wrapper"></div>
                    <div className="product-desc"></div>
                </div>
                <div className="product-two">
                    <div className="product-desc"></div>
                    <div className="img-wrapper"></div>
                </div>
                <div className="product-three">
                    <div className="img-wrapper"></div>
                    <div className="product-desc"></div>
                </div> */}
                <Categories />
                <About />
            </div>
        </div>
    )
}