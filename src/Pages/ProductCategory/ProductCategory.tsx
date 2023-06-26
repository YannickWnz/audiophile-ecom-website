import { useEffect, useState } from 'react';
import { About } from '../../Components/About/About';
import { Categories } from '../../Components/Categories/Categories';
import { Product } from '../../Components/Product/Product';
import './ProductCategory.scss'
import axios from 'axios'

interface ProductCategory {
    category: string;
}

interface details {
    id: string;
    productName: string;
    productDescription: string;
}

export const ProductCategory = ({category}: ProductCategory)  => {

    // console.log(category)

    let img = 'assets/shared/desktop/image-best-gear.jpg'
    let img2 = 'assets/product-yx1-earphones/desktop/image-product.jpg'
    let img3 = 'assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'

    const [products, setProducts] = useState([])

    const getProductCategory = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/productcategory/${category}`)
            setProducts(response.data)
            console.log(products)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getProductCategory()
    }, [category])


    return (
        <div className="product-category">
            <div className="category-name">
                <h1>{category.toUpperCase()}</h1>
            </div>
            <div className="contents">

                {/* {products.length > 0 && products.map(product => {
                    return (
                        <Product data={products} />
                        )
                    })} */}
                    {/* <Product data={products} /> */}
                
                {/* <Product productImage={img2}  /> */}
                {/* <Product positionReverse={true} productImage={img3} /> */}
                {/* <Product productImage={img} /> */}
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