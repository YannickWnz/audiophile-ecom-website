import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../Context/CartContext';
import { formatCurrency } from '../../Components/Utilities/formatCurrency';


import './Confirmation.scss'
import { EmptyCart } from '../Utilities/Utilities';

interface ConfirmationInterface {
    confirmationState: boolean;
    grandTotal: number;
}


export const Confirmation = ({confirmationState, grandTotal}: ConfirmationInterface) => {

    let confirmationIcon = '/public/assets/product-xx59-headphones/desktop/image-product.jpg'

    let item1: string = '/assets/product-xx59-headphones/desktop/image-product.jpg'

    const navigate = useNavigate()

    const { cartItems, setCartItems } = useContext(CartContext)
    
    const otherItems = cartItems.slice(1)

    return (
        <div className={`${confirmationState ? 'confirmation' : 'hide-order-confirmation'}`}>
            <div className="confirmation-content">
                <div className="content-wrapper">
                    <img src="/assets/checkout/icon-order-confirmation.svg" alt="" />
                    <h1>THANK YOU FOR YOUR ORDER</h1>
                    <p>You will receive an email confirmation shortly</p>
                    <div className="items-ordered">
                        <div className="items">
                            <div className="items-container">
                                {/* <img src="/assets/product-xx59-headphones/desktop/image-gallery-1.jpg" width={50} height='50' alt="" /> */}
                                <div 
                                    className="item-one-img"
                                    // style={{backgroundImage: `url(${item1})`}}
                                    style={{ backgroundImage: `url(/${cartItems.length > 0 && cartItems[0].itemImage})`}}
                                    // style={{backgroundImage: `/assets/product-xx59-headphones/desktop/image-gallery-1.jpg`}}
                                ></div>
                                <div className="item-one-desc">
                                    <div className="item-one-name">
                                        <p>{cartItems.length > 0 && cartItems[0].name}</p>
                                    </div>
                                    <div className="item-one-price">
                                        <p>{cartItems.length > 0 && formatCurrency(cartItems[0].price)}</p>
                                    </div>
                                </div>
                                <div className="item-one-qty">
                                    <p>x{cartItems.length > 0 && cartItems[0].quantity}</p>
                                </div>
                            </div>
                            {otherItems.length > 0 && <div className="other-items">
                                <p>and {otherItems.length} other item(s)</p>
                            </div>}
                        </div>
                        <div className="grand-total">
                            <p>GRAND TOTAL</p>
                            <p>{formatCurrency(grandTotal)}</p>
                        </div>
                    </div>
                    <div 
                    className="back-home"
                    onClick={() => {
                        navigate('/')
                        EmptyCart(setCartItems)
                    }}
                    >
                        <button 
                        className=''
                        >BACK TO HOME</button>
                    </div>
                </div>
            </div>
        </div>
    )
}