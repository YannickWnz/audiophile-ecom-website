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
            // const response = await axios.get(`http://localhost:8800/getheadphones/`)
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_LINK}/getheadphones/`)
            setHeadphones(response.data)
            // console.log('new head',headphones)
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
                            ></div>
                            {/* <div className={"product-desc"}> */}
                            <div className={`product-desc ${index === 1 ? 'flex-end-class' : ''} `}>
                                <div className={`desc-wrapper  `}>
                                {/* <div className="desc-wrapper"> */}
                                    {index === 0 && <p className="intro">NEW PRODUCT</p>}
                                    <h1>{product.name.toUpperCase()}</h1>
                                    <p>{product.description}</p>
                                    <Button id={product.id} />
                                </div>
                            </div>
                        </div>
                    )
                })}
                <Categories />
                <About />
            </div>
        </div>
    )
}