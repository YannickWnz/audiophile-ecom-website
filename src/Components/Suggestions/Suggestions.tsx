import { Button } from '../Button/Button'
import './Suggestion.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {headphonesProductDetails} from '../../Components/Interfaces'


interface ProductSuggestionID {
    id?: string
}


export const Suggestion = ({id}: ProductSuggestionID) => {

    const [suggestedProduct, setSuggestedProduct] = useState<headphonesProductDetails[]>([])

    let img: string = '/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'
    let img1: string = '/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'
    let img2: string = '/assets/product-xx59-headphones/desktop/image-product.jpg'


    const fetchYouMayAlsoLikeProducts = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_LINK}/productSuggestion/${id}`)
            setSuggestedProduct(response.data)
            // console.log(suggestedProduct, 'hey')
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchYouMayAlsoLikeProducts()
    }, [id])

    function getProductImage(index: number): string {
        const path: string[] = JSON.parse(suggestedProduct[index].imagePath)
        return path[0]
    }


    return (
        <div className="suggestions">
            <h1>YOU MAY ALSO LIKE</h1>
            <div className="product-suggestions">
                {suggestedProduct.length > 0 && suggestedProduct.map((product, index) => {
                    return  <div key={product.id} className="product-item">
                    <div 
                    className="item-img-bg"
                    style={{backgroundImage: `url(/${getProductImage(index)})`}}
                    ></div>
                    <div className="item-desc">
                        {/* <h2>XX99 MARK I</h2> */}
                        <h2>{product.name.toUpperCase()}</h2>
                        <Button id={product.id} />
                    </div>
                </div>})}
                {/* <div className="product-item">
                    <div 
                    className="item-img-bg"
                    style={{backgroundImage: `url(${img1})`}}
                    ></div>
                    <div className="item-desc">
                        <h2>ZX9 SPEAKER</h2>
                        <Button />
                    </div>
                </div>
                <div className="product-item">
                    <div 
                    className="item-img-bg"
                    style={{backgroundImage: `url(${img2})`}}
                    ></div>
                    <div className="item-desc">
                        <h2>XX59</h2>
                        <Button />
                    </div>
                </div> */}
            </div>
        </div>
    )
}