import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { formatCurrency } from '../Utilities/formatCurrency';
import { EmptyCart } from '../Utilities/Utilities';


import './Cart.scss'


interface CartInterface {
    cartState: boolean
}

export const Cart = ({cartState}: CartInterface) => {

    const navigate = useNavigate()

    const [quantity, setProductQuantity] = useState(1);

    const { cartItems, addToCart, setCartItems } = useContext(CartContext)


    let img4 = 'assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'


    // function increasing product quantity in cart
    const increaseProductCount = (index: number) => {

        const newItem = {
            id: cartItems[index].id,
            name: cartItems[index].name,
            price: cartItems[index].price,
            itemImage: cartItems[index].itemImage,
            quantity: 1
        }

        addToCart(newItem)

    };

    // function decreasing product quantity in cart
    const decreaseProductCount = (index: number) => {

        const newItem = {
            id: cartItems[index].id,
            name: cartItems[index].name,
            price: cartItems[index].price,
            itemImage: cartItems[index].itemImage,
            quantity: -1
        }

        if(cartItems[index].quantity > 0) {
            addToCart(newItem)
        }

    };

    useEffect(() => {
        
        cartItems.forEach((item) => {
            if(item.quantity === 0) {
                const filteredItems = cartItems.filter(item => {return item.quantity !== 0})
                setCartItems(filteredItems);
                localStorage.removeItem("cartItems");
            }
        })


    }, [cartItems, setCartItems])
    
    const getTotalAmount = (): number => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }
    // get total number of products in cart
    const getTotalCartItemsNumber = (): number => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    if(cartItems.length < 0) {

        return (
            <div className='empty-cart'>
                <h1>Your cart is empty</h1>
            </div>
        )

    }

    const redirectToCheckout = () => {

        navigate('/checkout')

    }

    return (
        <div className={` ${cartState ? 'cart' : 'hide-cart'}`}>
            <div className="cart-box">
                {cartItems.length > 0 && <div className="cart-section-one">
                    <div className="cart-item-number">
                        <h4>CART ( {getTotalCartItemsNumber()} )</h4>
                    </div>
                    <div className="remove-cart-items">
                        <p onClick={() => {EmptyCart(setCartItems)}} >Remove all</p>
                    </div>
                </div>}
                {cartItems.length < 1 && <div className="empty-cart">
                    <h1>Your cart is empty</h1>
                </div>}
                { cartItems.length > 0 && cartItems.map((item, index) => {
                    return (
                        <div key={item.id} className="cart-items-wrapper">
                            <div className="cart-items">
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
                                        <i className="fa-solid fa-minus" onClick={() => decreaseProductCount(index)}></i>
                                        <span>{item.quantity}</span>
                                        <i className="fa-solid fa-plus" onClick={() => increaseProductCount(index)}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }) }
                {cartItems.length > 0 && <div className="cart-total-price">
                    <p>TOTAL</p>
                    <p>{formatCurrency(getTotalAmount())}</p>
                </div>}
                {cartItems.length > 0 && <button onClick={redirectToCheckout} >CHECKOUT</button>}
            </div>
        </div>
    )
}