import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './Home.scss'
import CSS from 'csstype';
import { types } from "sass";


interface HeroImage {
    headphone: string
    zx9Speaker: string
    zx7Speaker: string
    yx1Earphone: string
    listener: string
}

interface productDescriptionType {
    id: number
    name: string
    img: string
}

const Home = () => {

    const HomeProduct: productDescriptionType[] = [
        { 
            id: Math.floor(Math.random() * 10000),
            name: 'XX99 MARK II HEADPHONES',
            img: 'assets/home/desktop/image-hero.jpg'
        },
        { 
            id: Math.floor(Math.random() * 10000),
            name: 'ZX9 SPEAKER',
            img: 'assets/home/desktop/image-speaker-zx9.png'
        },
        { 
            id: Math.floor(Math.random() * 10000),
            name: 'ZX7 SPEAKER',
            img: 'assets/home/desktop/image-speaker-zx7.jpg'
        },
        { 
            id: Math.floor(Math.random() * 10000),
            name: 'YX1 EARPHONES',
            img: 'assets/home/desktop/image-earphones-yx1.jpg'
        }
    ]

    const [products, setProducts] = useState(HomeProduct)

    let heroProductName: string

    heroProductName = products[0].name

    // const filteredProducts = products.filter()

    // console.log(products[0].img)


    return (
        <div className="home">

            <div className="home-container">
                <div className="hero-section-wrapper">
                    <div className="hero-section-product-desc">
                    
                        <div className="descriptions-wrapper">
                            <p>NEW PRODUCT</p>
                            {/* <h1>XX99 MARK II HEADPHONES</h1> */}
                            <h1>{products[0].name}</h1>
                            <p>Experience natural, lifelike audio and exceptional build quality made for the passionals music enthusiast.</p>
                            {/* <Link to='/product/2'>SEE PRODUCT</Link> */}
                            <Link to={`/product/${products[0].id}`}>SEE PRODUCT</Link>
                        </div>
                    </div>
                    {/* <div className="hero-section-product-desc"></div> */}
                    <div
                    className="hero-section-product-img"
                    style={products.length > 0 ?  { backgroundImage: `url(${products[0].img})` } : {}}
                    ></div>
                </div>

                {/* <div className="product-pages">

                </div> */}

            </div>

        </div>
    )
}

export default Home