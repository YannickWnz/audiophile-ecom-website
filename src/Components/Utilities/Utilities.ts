
// empty cart item 
export const EmptyCart = (setCartItemFunction: ([]) => void) => {
    setCartItemFunction([])
    localStorage.removeItem('cartItems')
}