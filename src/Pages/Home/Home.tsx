import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './Home.scss'
import { Categories } from "../../Components/Categories/Categories";
import { About } from "../../Components/About/About";
import axios from 'axios'


interface productDescriptionType {
    id: number
    name: string
    img: string
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
    

    const fetchAllProducts = async () => {
        try{
            const res = await axios.get('http://localhost:8800/homeproducts');
            setProducts(res.data)
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
                                <h1>{products.length > 0 && products[0].name.toUpperCase()}</h1>
                                <p>{products.length > 0 && products[0].description}</p>
                                <Link className="see-product-link" to={`/product/${products.length > 0 && products[0].productID}`}>SEE PRODUCT</Link>
                            </div>
                        </div>
                        <div
                        className="hero-section-product-img"
                        style={products.length > 0 ?  { backgroundImage: `url(${products[0].imagePath})` } : {}}
                        ></div>
                    </div>
                </div>
                
                <div className="home-contents-wrapper">
                    <Categories />

                    <div className="home-featured-products">
                        <div className="product-one">
                            <div className="product-img-wrapper">
                                {products.length > 0 && <img src={products[1].imagePath} alt="" />}
                            </div>

                            <div className="product-one-description">
                                <h1>{products.length > 0 && products[1].name.toUpperCase()}</h1>
                                <p>{products.length > 0 && products[1].description}</p>
                                <Link className="see-product-link" to={`/product/${products.length > 0 && products[1].productID}`}>SEE PRODUCT</Link>
                            </div>

                        </div>
                        <div 
                        className="product-two" 
                        style={products.length > 0 ?  { backgroundImage: `url(${products[2].imagePath})` } : {}}
                        >
                            <div className="product-description">
                                <h1>{products.length > 0 && products[2].name.toUpperCase()}</h1>
                                <Link className="see-product-link" to={`/product/${products.length > 0 && products[2].productID}`}>SEE PRODUCT</Link>
                            </div>

                        </div>
                        <div className="product-three">
                            <div 
                            className="product-img" 
                            style={products.length > 0 ?  { backgroundImage: `url(${products[3].imagePath})` } : {}}
                            ></div>
                            <div className="product-description">
                                    <h1>{products.length > 0 && products[3].name.toUpperCase()}</h1>
                                    <Link className="see-product-link" to={`/product/${products.length > 0 && products[3].productID}`}>SEE PRODUCT</Link>
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