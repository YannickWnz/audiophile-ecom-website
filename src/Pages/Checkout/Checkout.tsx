import { useContext, useState } from 'react'
import { Confirmation } from '../../Components/CheckoutConfirmation/Confirmation';
import { CartContext } from '../../Components/Context/CartContext'
import { GoBack } from '../../Components/GoBack/GoBack'
import { formatCurrency } from '../../Components/Utilities/formatCurrency';


import './Checkout.scss'

interface FormData {
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    zipCode: string;
    city: string;
    country: string;
    paymentMethod: string;
}

export const Checkout = () => {

    let img4 = 'assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'

    let shipping: number = 120

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        zipCode: '',
        city: '',
        country: '',
        paymentMethod: '',
    });

    const [formErrors, setFormErrors] = useState<Partial<FormData>>({})
    const [confirmationState, setConfirmationState] = useState(false)

    const { cartItems } = useContext(CartContext)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));

        setFormErrors((prevErr) => ({
            ...prevErr,
            [name]: ''
        }))
    };
    
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // Handle form submission or validation

        const errors: Partial<FormData> = {}

          // Perform validation
        if (!formData.name) {
            errors.name = 'Name is required';
        }
    
        if (!formData.email) {
            errors.email = 'Email is required';
        }
    
        if (!formData.phoneNumber) {
            errors.phoneNumber = 'Phone Number is required';
        }
    
        if (!formData.address) {
            errors.address = 'Address is required';
        }
    
        if (!formData.zipCode) {
            errors.zipCode = 'ZIP Code is required';
        }
    
        if (!formData.city) {
            errors.city = 'City is required';
        }
    
        if (!formData.country) {
            errors.country = 'Country is required';
        }
    
        if (!formData.paymentMethod) {
            errors.paymentMethod = 'Payment Method is required';
        }
    
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setConfirmationState(true)

    }

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
                            <form action="" className='checkout-form' >

                                <div className="billing-details-wrapper">
                                    <h5>BILLING DETAILS</h5>
                                    
                                    <div className="name-email">
                                        <div className="name">
                                            <label htmlFor="name">
                                                Name
                                                <input 
                                                type="text" 
                                                name='name'
                                                id='name'
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={formErrors.name ? 'error' : ''}
                                                placeholder='Johnny Wenz' 
                                                />
                                            </label>
                                        </div>
                                        <div className="email">
                                            <label htmlFor="email">
                                                Email Address
                                                <input 
                                                type="text" 
                                                name='email'
                                                id='email'
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={formErrors.email ? 'error' : ''}
                                                placeholder='johnnywnz@gmail.com' 
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="phone">
                                        <label htmlFor="phoneNumber">
                                            Phone Number:
                                            <input 
                                            type="text" 
                                            name='phoneNumber'
                                            id='phoneNumber'
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            className={formErrors.phoneNumber ? 'error' : ''}
                                            placeholder='+1202-505-0232' />
                                        </label>
                                    </div>
                                </div>

                                <div className="shipping-info-wrapper">
                                    <h5>SHIPPING INFO</h5>

                                    <div className="shipping-info-address">
                                        <label htmlFor="address">
                                            Address
                                            <input 
                                            type="text" 
                                            name='address'
                                            id='address'
                                            value={formData.address}
                                            onChange={handleChange}
                                            className={formErrors.address ? 'error' : ''}
                                            placeholder='1137 Williams Avenue' 
                                            />
                                        </label>
                                    </div>

                                    <div className="zip-code-city">
                                        <div className="zip-code">
                                            <label htmlFor="">
                                                ZIP Code
                                                <input
                                                type="text" 
                                                name='zipCode'
                                                id='zipCode'
                                                value={formData.zipCode}
                                                onChange={handleChange}
                                                className={formErrors.zipCode ? 'error' : ''}
                                                placeholder='10001' 
                                                />
                                            </label>
                                        </div>
                                        <div className="city">
                                            <label htmlFor="">
                                                City
                                                <input 
                                                type="text" 
                                                name='city'
                                                id='city'
                                                value={formData.city}
                                                onChange={handleChange}
                                                className={formErrors.city ? 'error' : ''}
                                                placeholder='Bangui' 
                                                />
                                            </label>
                                        </div>
                                    </div>

                                    <div className="shipping-info-country">
                                        <label htmlFor="">
                                            Country
                                            <input 
                                            type="text" 
                                            name='country'
                                            id='country'
                                            value={formData.country}
                                            onChange={handleChange}
                                            className={formErrors.country ? 'error' : ''}
                                            placeholder='Central Africa Republic' 
                                            />
                                        </label>
                                    </div>

                                </div>

                                <div className="payment-details-wrapper">
                                    <h5>SHIPPING INFO</h5>
                                    
                                    <div className="payment-method">
                                        <p>Payment Method</p>
                                        <div className="payment-method-options">
                                            <div className={`card-option ${formErrors.paymentMethod ? 'error' : ''}`}>
                                                <input 
                                                type="radio" 
                                                name="paymentMethod"
                                                value='Card / Debit Card' 
                                                id="card" 
                                                onChange={handleChange}
                                                className={formErrors.paymentMethod ? 'error' : ''}
                                                />
                                                <label htmlFor="card">Card / Debit Card</label>
                                            </div>
                                            <div className={`cash-option  ${formErrors.paymentMethod ? 'error' : ''}`}>
                                                <input 
                                                type="radio" 
                                                name="paymentMethod" 
                                                id="cash" 
                                                value='Cash on Delivery'
                                                onChange={handleChange}
                                                className={formErrors.paymentMethod ? 'error' : ''}
                                                />
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
                                        <div key={item.id} className="checkout-items">
                                            <div className="item-details">
                                                <div 
                                                className="item-img"
                                                style={{backgroundImage: `url(/${item.itemImage})`}}
                                                ></div>
                                                <div className="name-price">
                                                    <div className="name">
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
                            </div>

                            <div className="checkout-total-price">
                                <div className="total">
                                    <p>TOTAL</p>
                                    <p>{formatCurrency(getTotalAmount())}</p>
                                </div>
                                <div className="shipping">
                                    <p>SHIPPING</p>
                                    <p>$ {shipping}</p>
                                </div>
                                <div className="grand-total">
                                    <p>GRAND TOTAL</p>
                                    <p>{formatCurrency(getTotalAmount() + shipping) }</p>
                                </div>
                            </div>

                            <div className="finalize-payment-btn">
                                <button onClick={handleSubmit}>CONTINUE & PAY</button>
                            </div>

                        </div>
                    </div>
                </div>

                <Confirmation confirmationState={confirmationState} grandTotal={getTotalAmount() + shipping} />
            </div>
        </div>
    )
}