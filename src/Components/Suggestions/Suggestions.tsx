import { Button } from '../Button/Button'
import './Suggestion.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'


export const Suggestion = () => {

    let img: string = 'assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'
    let img1: string = 'assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'
    let img2: string = 'assets/product-xx59-headphones/desktop/image-product.jpg'

    


    return (
        <div className="suggestions">
            <h1>YOU MAY ALSO LIKE</h1>
            <div className="product-suggestions">
                <div className="product-item">
                    <div 
                    className="item-img-bg"
                    style={{backgroundImage: `url(${img})`}}
                    ></div>
                    <div className="item-desc">
                        <h2>XX99 MARK I</h2>
                        <Button />
                    </div>
                </div>
                <div className="product-item">
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
                </div>
            </div>
        </div>
    )
}