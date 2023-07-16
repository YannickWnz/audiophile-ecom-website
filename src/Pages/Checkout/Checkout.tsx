import { useContext } from 'react'
import { CartContext } from '../../Components/Context/CartContext'
import { GoBack } from '../../Components/GoBack/GoBack'
import { formatCurrency } from '../../Components/Utilities/formatCurrency';


import './Checkout.scss'

export const Checkout = () => {

    let img4 = 'assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'

    let shipping: number = 120

    const { cartItems } = useContext(CartContext)

    const getTotalAmount = (): number => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    return (
        <div className="checkout">
            <div className="checkout-container">
                <GoBack />
                <div className="checkout-contents">
                    <div className="checkout-form-wrapper checkout-div">
                        <div className="form-wrapper-content">
                            <h1>CHECKOUT</h1>
                            <form action="" className='checkout-form'>

                                <div className="billing-details-wrapper">
                                    <h5>BILLING DETAILS</h5>
                                    
                                    <div className="name-email">
                                        <div className="name">
                                            <label htmlFor="">
                                                Name
                                                <input type="text" placeholder='Johnny Wenz' />
                                            </label>
                                        </div>
                                        <div className="email">
                                            <label htmlFor="">
                                                Email Address
                                                <input type="text" placeholder='johnnywnz@gmail.com' />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="phone">
                                        <label htmlFor="">
                                            Phone Number:
                                            <input type="text" placeholder='+1202-505-0232' />
                                        </label>
                                    </div>
                                </div>

                                <div className="shipping-info-wrapper">
                                    <h5>SHIPPING INFO</h5>

                                    <div className="shipping-info-address">
                                        <label htmlFor="">
                                            Address
                                            <input type="text" placeholder='1137 Williams Avenue' />
                                        </label>
                                    </div>

                                    <div className="zip-code-city">
                                        <div className="zip-code">
                                            <label htmlFor="">
                                                ZIP Code
                                                <input type="text" placeholder='10001' />
                                            </label>
                                        </div>
                                        <div className="city">
                                            <label htmlFor="">
                                                City
                                                <input type="text" placeholder='Bangui' />
                                            </label>
                                        </div>
                                    </div>

                                    <div className="shipping-info-country">
                                        <label htmlFor="">
                                            Country
                                            <input type="text" placeholder='Central Africa Republic' />
                                        </label>
                                    </div>

                                </div>

                                <div className="payment-details-wrapper">
                                    <h5>SHIPPING INFO</h5>
                                    
                                    <div className="payment-method">
                                        <p>Payment Method</p>
                                        <div className="payment-method-options">
                                            <div className="card-option">
                                                <input type="radio" name="card" id="card" />
                                                <label htmlFor="card">Card / Debit Card</label>
                                            </div>
                                            <div className="cash-option">
                                                <input type="radio" name="card" id="cash" />
                                                <label htmlFor="cash">Cash on Delivery</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="checkout-summary checkout-div">
                        <div className="checkout-summary-content">
                            <h4>SUMMARY</h4>
                            <div className="checkout-items-container">
                                {cartItems.length > 0 && cartItems.map(item => {
                                    return (
                                        <div className="checkout-items">
                                            <div className="item-details">
                                                <div 
                                                className="item-img"
                                                style={{backgroundImage: `url(/${item.itemImage})`}}
                                                ></div>
                                                <div className="name-price">
                                                    <div className="name">
                                                        {/* <p>XX9 MARK I</p> */}
                                                        <p>{item.name}</p>
                                                    </div>
                                                    <div className="price">
                                                        <p>{`${formatCurrency(item.price)}`}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-quantity">
                                                <div className="product-number">
                                                    <p>x {item.quantity}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) }
                                {/* <div className="checkout-items">
                                    <div className="item-details">
                                        <div 
                                        className="item-img"
                                        style={{backgroundImage: `url(${img4})`}}
                                        ></div>
                                        <div className="name-price">
                                            <div className="name">
                                                <p>XX9 MARK I</p>
                                            </div>
                                            <div className="price">
                                                <p>$ 399</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-quantity">
                                        <div className="product-number">
                                            <p>x 2</p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>

                            <div className="checkout-total-price">
                                <div className="total">
                                    <p>TOTAL</p>
                                    {/* <p>$ 5,943</p> */}
                                    <p>{formatCurrency(getTotalAmount())}</p>
                                </div>
                                <div className="shipping">
                                    <p>SHIPPING</p>
                                    {/* <p>$ 40</p> */}
                                    <p>$ {shipping}</p>
                                </div>
                                <div className="grand-total">
                                    <p>GRAND TOTAL</p>
                                    {/* <p>$ 5,983</p> */}
                                    <p>{formatCurrency(getTotalAmount() + shipping) }</p>
                                </div>
                            </div>

                            <div className="finalize-payment-btn">
                                <button>CONTINUE & PAY</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}