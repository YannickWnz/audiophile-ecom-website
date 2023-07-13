import React, {  useEffect, useContext, createContext, ReactNode, useState } from 'react';

interface CartContextProviderProps {
    children: ReactNode
}

interface CartItem {
    id: number, 
    name: string,
    price: number,
    itemImage: string,
    quantity: number
}

interface CartContextType {
    cartItems: CartItem[],
    setCartItems: (cartItems: CartItem[]) => void
    addToCart: (item: CartItem) => void
}

// export const CartContext = createContext<CartItem[]>([])
export const CartContext = createContext<CartContextType>({
    cartItems: [],
    setCartItems: () => {},
    addToCart: () => {},
});


export const CartContextProvider = ({children}: CartContextProviderProps) => {

    const [cartItems, setCartItems] = useState<CartItem[]>([])


    const addToCart = (item: CartItem) => {
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id )

        if(existingItem) {
            const updatedItems = cartItems.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity} : cartItem )
            setCartItems(updatedItems)
        } else {
            setCartItems([...cartItems, item])
        }
        
    }

        useEffect(() => {
            const storedCartItems = localStorage.getItem("cartItems");
            if (storedCartItems) {
                setCartItems(JSON.parse(storedCartItems));
            }
        }, []);
    
        useEffect(() => {

            if(cartItems.length > 0) {
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
            }

        }, [cartItems]);

    const cartContextValue: CartContextType = {
        cartItems,
        setCartItems,
        addToCart
    }


    return (
        <CartContext.Provider value={cartContextValue} > {children} </CartContext.Provider>
    )
}



// export function useCart() {
//     return useContext(CartContext)
// } 

// export function CartContextProvider({ children }: CartContextProviderProps) {
//     return (
//         <CartContext.Provider value={{}} >{children}</CartContext.Provider>
//     )
// }