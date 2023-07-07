import './Cart.scss'

interface CartInterface {
    cartState: boolean
}

export const Cart = ({cartState}: CartInterface) => {

    // console.log(cartState)

    let img4 = 'assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'


    return (
        <div className={` ${cartState ? 'cart' : 'hide-cart'}`}>
            <div className="cart-box">
                <div className="cart-section-one">
                    <div className="cart-item-number">
                        <h4>CART ( 3 )</h4>
                    </div>
                    <div className="remove-cart-items">
                        <p>Remove all</p>
                    </div>
                </div>
                <div className="cart-items-wrapper">
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
                        <div className="item-quantity"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}