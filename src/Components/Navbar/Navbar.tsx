import './Navbar.scss'
import { Link } from 'react-router-dom' 

const Navbar = () => {
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
                <div className="cart-container">
                    <img src="/assets/shared/desktop/icon-cart.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
