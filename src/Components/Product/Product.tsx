import { useState } from 'react';
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

interface productDetails {
    id: number,
    name: string,
    description: string,
    features: string,
    boxItem: string,
    imagePath: string,
    price: number,
    categories: string
}

interface fetchedData {
    data: productDetails[]
}


export const Product = ({ data }: fetchedData) => {
// export const Product = () => {

    console.log(data)

    // console.log(JSON.parse(data[0].imagePath))

    let paths = JSON.parse(data[0].imagePath)

    console.log(paths[0])

    const boxItems = [
        { "id": 0, "name": "Available" },
        { "id": 1, "name": "Ready" },
        { "id": 2, "name": "Started" }
    ]

    let productImage = 'assets/shared/desktop/image-best-gear.jpg'



    // console.log(JSON.parse(data[0].imagePath[0]))

    const [positionReverse, setPositionReverse] = useState<boolean>(false)

// if(positionReverse) {console.log(positionReverse)}

    return (
        <div className='product'>
            {data.length > 0 && data.map((item, index) => {
                return (
                        <div className={`product-wrapper ${index === 1 ? 'row-reverse' : ''} `} key={item.id}>
                            <div 
                            className="img-wrapper" 
                            style={{ backgroundImage: `url(${productImage})` }} 
                            // style={{backgroundImage: `url(${paths[0]})` }}
                            ></div>
                            {/* <div className="img-wrapper" style={{ backgroundImage: `url(${productImage})` }} ></div> */}
                            <div className="product-desc">
                                {/* <p className='intro'>NEW PRODUCT</p> */}
                                {/* <h1>XX99 MARK II HEADPHONES</h1> */}
                                {/* <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p> */}
                                <Button />
                            </div>
                        </div>
                    )
                }) }
        </div>
    )
}