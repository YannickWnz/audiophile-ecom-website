import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { formatCurrency } from '../Utilities/formatCurrency';


import './Cart.scss'


interface CartInterface {
    cartState: boolean
}

export const Cart = ({cartState}: CartInterface) => {

    // console.log(cartState)

    const [quantity, setProductQuantity] = useState(1);

    const { cartItems, addToCart } = useContext(CartContext)


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
    
    const getTotalAmount = (): number => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }
    // get total number of products in cart
    const getTotalCartItemsNumber = (): number => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <div className={` ${cartState ? 'cart' : 'hide-cart'}`}>
            <div className="cart-box">
                <div className="cart-section-one">
                    <div className="cart-item-number">
                        {/* <h4>CART ( {cartItems.length} )</h4> */}
                        <h4>CART ( {getTotalCartItemsNumber()} )</h4>
                    </div>
                    <div className="remove-cart-items">
                        <p>Remove all</p>
                    </div>
                </div>
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
                                        {/* <i className="fa-solid fa-plus" onClick={() => increaseProductCount(item.id, index)}></i> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }) }
                {/* <div className="cart-items-wrapper">
                    <div className="cart-items">
                        <div className="item-details">
                            <div 
                            className="item-img"
                            style={{backgroundImage: `url(/${img4})`}}
                            ></div>
                            <div className="name-price">
                                <div className="name">
                                    <p>XX99 MARK II</p>
                                </div>
                                <div className="price">
                                    <p>$ 2,999</p>
                                </div>
                            </div>
                        </div>
                        <div className="item-quantity">
                            <div className="product-number">
                                <i className="fa-solid fa-minus" onClick={decreaseProductCount}></i>
                                <span>{quantity}</span>
                                <i className="fa-solid fa-plus" onClick={increaseProductCount}></i>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="cart-total-price">
                    <p>TOTAL</p>
                    <p>{formatCurrency(getTotalAmount())}</p>
                    {/* <p>$ 4,598</p> */}
                </div>
                <button>CHECKOUT</button>
            </div>
        </div>
    )
}