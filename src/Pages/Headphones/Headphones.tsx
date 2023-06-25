import { useState, useEffect } from 'react'
import { Button } from '../../Components/Button/Button'
import { ProductCategory } from '../ProductCategory/ProductCategory'
import './Headphone.scss'
import axios from 'axios'
import { Categories } from '../../Components/Categories/Categories'
import { About } from '../../Components/About/About'
import {headphonesProductDetails} from '../../Components/Interfaces'


interface headphonesImages {
    image: string[]
}

export const Headphones = () => {

    const [headphones, setHeadphones] = useState<headphonesProductDetails[]>([])
    // const [imagesPath, setImagesPath] = useState<headphonesImages[]>([])


    const getProductCategory = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/getheadphones/`)
            setHeadphones(response.data)
            console.log('new head',headphones)
        } catch (err) {
            console.log(err)
        }
    }

    function getProductImage(index: number): string {
        const path: string[] = JSON.parse(headphones[index].imagePath)
        return path[0]
    }


    useEffect(() => {
        getProductCategory()
    }, [])

    let productImage = 'assets/shared/desktop/image-best-gear.jpg'


    return (
        <div className="headphone">
            <div className="headphone-wrapper">
                {headphones.length > 0 && headphones.map((product, index) => {
                    return (
                        <div key={product.id} className={`contents-wrapper ${index === 1 ? 'row-reverse' : ''}`}>
                            <div
                            className="img-wrapper"
                            style={{ backgroundImage: `url(${getProductImage(index)})` }}
                            // style={{ backgroundImage: `url(${productImage})` }}
                            ></div>
                            <div className="product-desc">
                                {index === 0 && <p className="intro">NEW PRODUCT</p>}
                                {/* <p className="intro">NEW PRODUCT</p> */}
                                <h1>{product.name.toUpperCase()}</h1>
                                <p>{product.description}</p>
                                <Button id={product.id} />
                            </div>
                        </div>
                    )
                })}
                {/* <div className="contents-wrapper">
                    <div
                    className="img-wrapper"
                    style={{ backgroundImage: `url(${productImage})` }}
                    ></div>
                    <div className="product-desc">
                        <p className="intro">NEW PRODUCT</p>
                        <h1>XX99 MARK II HEADPHONES</h1>
                        <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                        <Button />
                    </div>
                </div> */}
                <Categories />
                <About />
            </div>
        </div>
        // <ProductCategory category='headphones' />
    )
}