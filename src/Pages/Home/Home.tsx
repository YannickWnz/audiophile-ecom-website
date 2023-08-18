import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './Home.scss'
import CSS from 'csstype';
import { types } from "sass";
import { Categories } from "../../Components/Categories/Categories";
import { About } from "../../Components/About/About";
import axios from 'axios'



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

interface HeroSectionProductDetails {
    id: number,
    // boxItems: Array[],
    categories: string,
    description: string,
    features: string,
    // imagePath: 
}

interface productDetails {
    id: number,
    name: string,
    description: string,
    features: string,
    boxItems: string,
    imagePath: string,
    price: number,
    categories: string
}

interface homeProductDetails {
    id: number,
    name: string,
    description: string,
    imagePath: string,
    productID: number
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


    const [products, setProducts] = useState<homeProductDetails[]>([])
    const [heroProductImg, setHeroProductImg] = useState<string | null>(null)


    const updatedProducts = HomeProduct.slice(1);
    const filteredProduct = HomeProduct.filter((product, index) => index === 0)[0];
    // const filteredProducts = products.filter()
    

    const fetchAllProducts = async () => {
        try{
            // const res = await axios.get('http://localhost:8800/homeproducts');
            // const res = await axios.get('https://audiophile-website-backend-4c4718a8932e.herokuapp.com/homeproducts');
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_LINK}/homeproducts`);
            // console.log(res.data)
            setProducts(res.data)
            // console.log(products)
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchAllProducts();
    }, [])


    return (
        <div className="home">
            <div className="home-container">
                <div className="hero-section">
                    <div className="hero-section-wrapper">
                        <div className="hero-section-product-desc">
                            <div className="descriptions-wrapper">
                                <p>NEW PRODUCT</p>
                                {/* <h1>XX99 MARK II HEADPHONES</h1> */}
                                <h1>{products.length > 0 && products[0].name.toUpperCase()}</h1>
                                {/* <p>Experience natural, lifelike audio and exceptional build quality made for the passionals music enthusiast.</p> */}
                                <p>{products.length > 0 && products[0].description}</p>
                                {/* <Link to='/product/2'>SEE PRODUCT</Link> */}
                                <Link className="see-product-link" to={`/product/${products.length > 0 && products[0].productID}`}>SEE PRODUCT</Link>
                            </div>
                        </div>
                        {/* <div className="hero-section-product-desc"></div> */}
                        <div
                        className="hero-section-product-img"
                        // style={heroProductImg !== null ? { backgroundImage: `url(${heroProductImg})` } : {}}
                        // style={products.length > 0 ? { backgroundImage: `url(${JSON.parse(products[0].imagePath)})` } : {}}
                        style={products.length > 0 ?  { backgroundImage: `url(${products[0].imagePath})` } : {}}
                        ></div>
                    </div>
                </div>
                
                <div className="home-contents-wrapper">
                    <Categories />

                    <div className="home-featured-products">
                        <div className="product-one">
                            <div className="product-img-wrapper">
                                {/* <img src="/assets/home/desktop/image-speaker-zx9.png" alt="" /> */}
                                {products.length > 0 && <img src={products[1].imagePath} alt="" />}
                            </div>

                            <div className="product-one-description">
                                {/* <h1>ZX9 SPEAKER</h1> */}
                                <h1>{products.length > 0 && products[1].name.toUpperCase()}</h1>
                                {/* <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p> */}
                                <p>{products.length > 0 && products[1].description}</p>
                                <Link className="see-product-link" to={`/product/${products.length > 0 && products[1].productID}`}>SEE PRODUCT</Link>
                            </div>

                        </div>
                        <div 
                        className="product-two" 
                        // style={{backgroundImage: 'url(./assets/home/desktop/image-speaker-zx7.jpg)'}}
                        style={products.length > 0 ?  { backgroundImage: `url(${products[2].imagePath})` } : {}}
                        >
                            <div className="product-description">
                                <h1>{products.length > 0 && products[2].name.toUpperCase()}</h1>
                                {/* <h1>ZX7 SPEAKER</h1> */}
                                {/* <Link to='' className="see-product-link">SEE PRODUCT</Link> */}
                                <Link className="see-product-link" to={`/product/${products.length > 0 && products[2].productID}`}>SEE PRODUCT</Link>
                            </div>

                        </div>
                        <div className="product-three">
                            <div 
                            className="product-img" 
                            // style={{backgroundImage: 'url(./assets/product-yx1-earphones/desktop/image-gallery-2.jpg)'}} 
                            style={products.length > 0 ?  { backgroundImage: `url(${products[3].imagePath})` } : {}}
                            ></div>
                            <div className="product-description">
                                {/* <div className="wrapper"> */}
                                    <h1>{products.length > 0 && products[3].name.toUpperCase()}</h1>
                                    {/* <h1>YX1 EARPHONES</h1> */}
                                    {/* <Link to='' className="see-product-link">SEE PRODUCT</Link> */}
                                    <Link className="see-product-link" to={`/product/${products.length > 0 && products[3].productID}`}>SEE PRODUCT</Link>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>

                    <About />

                </div>
            </div>
        </div>
    )
}

export default Home