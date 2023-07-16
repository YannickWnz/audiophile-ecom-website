import { Link } from 'react-router-dom'
import './Categories.scss'

export const Categories = () => {
    return (
        <div className="categories">
            <div className="shop-headphones">
                <img src="/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview-nobg.png" alt="" />
                <h1>HEADPHONES</h1>
                <Link to={'/headphones'}>SHOP <i className="fa-solid fa-chevron-right"></i></Link>
            </div>
            <div className="shop-speakers">
                <img src="/assets/product-zx9-speaker/desktop/image-product-no-bg.png" alt="" />
                <h1>SPEAKERS</h1>
                <Link to="/speakers">SHOP <i className="fa-solid fa-chevron-right"></i></Link>
            </div>
            <div className="shop-earphones">
                <img src="/assets/product-yx1-earphones/desktop/image-product-no-bg.png" alt="" />
                <h1>EARPHONES</h1>
                <Link to="/earphones">SHOP <i className="fa-solid fa-chevron-right"></i></Link>
            </div>
        </div>
    )
}