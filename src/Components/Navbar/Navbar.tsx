import './Navbar.scss'
import { Link } from 'react-router-dom' 
import { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import { Cart } from '../Cart/Cart'



const Navbar = () => {

    // const {  } = useContext(CartContext)
    const [displayCart, setDisplayCart] = useState(false)

    const handleCartStateChange = () => {
        setDisplayCart(!displayCart)
    }

    return (
        <div className="navbar">
            <div className="navbar-container">  
                <div className="logo-container">
                    <img src="/assets/shared/desktop/logo.svg" alt="" />
                </div>
                
                <div className="navlinks-container">
                    <Link to='/'>HOME</Link>
                    <Link to='/headphones'>HEADPHONES</Link>
                    <Link to='/speakers'>SPEAKERS</Link>
                    <Link to='/earphones'>EARPHONES</Link>
                </div>

                <div className="cart-container" onClick={handleCartStateChange} >
                    <img src="/assets/shared/desktop/icon-cart.svg" alt="" />
                    <div className="cart-count"><span>0</span></div>
                </div>

                {displayCart && <div className="cart-shadow" onClick={handleCartStateChange} ></div>}

                <Cart cartState={displayCart} />
            </div>
        </div>
    )
}

export default Navbar
