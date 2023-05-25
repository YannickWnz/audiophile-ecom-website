import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './Home.scss'
import CSS from 'csstype';
import { types } from "sass";
import { Categories } from "../../Components/Categories/Categories";


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
            <div className="hero-section">
                <div className="hero-section-wrapper">
                    <div className="hero-section-product-desc">
                        <div className="descriptions-wrapper">
                            <p>NEW PRODUCT</p>
                            {/* <h1>XX99 MARK II HEADPHONES</h1> */}
                            <h1>{products[0].name}</h1>
                            <p>Experience natural, lifelike audio and exceptional build quality made for the passionals music enthusiast.</p>
                            {/* <Link to='/product/2'>SEE PRODUCT</Link> */}
                            <Link className="see-product-link" to={`/product/${products[0].id}`}>SEE PRODUCT</Link>
                        </div>
                    </div>
                    {/* <div className="hero-section-product-desc"></div> */}
                    <div
                    className="hero-section-product-img"
                    style={products.length > 0 ?  { backgroundImage: `url(${products[0].img})` } : {}}
                    ></div>
                </div>
            </div>
            
            <div className="home-contents-wrapper">
                <Categories />

                <div className="home-featured-products">
                    <div className="product-one">
                        {/* <img src="/assets/home/desktop/pattern-circles.svg" alt="" /> */}
                        <div className="product-img-wrapper">
                            {/* <img src="/assets/product-zx9-speaker/desktop/image-product-no-bg.png" alt="" /> */}
                            <img src="/assets/home/desktop/image-speaker-zx9.png" alt="" />
                        </div>

                        <div className="product-one-description">
                            <h1>ZX9 SPEAKER</h1>
                            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                            <Link className="see-product-link" to={`/product/${products[0].id}`}>SEE PRODUCT</Link>
                        </div>

                    </div>
                    <div className="product-two" style={{backgroundImage: 'url(./assets/home/desktop/image-speaker-zx7.jpg)'}}>
                        <div className="product-description">
                            <h1>ZX7 SPEAKER</h1>
                            <Link to='' className="see-product-link">SEE PRODUCT</Link>
                        </div>

                    </div>
                    <div className="product-three">
                        <div className="product-img" style={{backgroundImage: 'url(./assets/product-yx1-earphones/desktop/image-gallery-2.jpg)'}} ></div>
                        <div className="product-description">
                            {/* <div className="wrapper"> */}
                                <h1>YX1 EARPHONES</h1>
                                <Link to='' className="see-product-link">SEE PRODUCT</Link>
                            {/* </div> */}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home