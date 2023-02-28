import { createContext } from "react";
import { CartItemParams } from "../../pages/product";

interface CartContextParams {
    cartItems: CartItemParams[]
    setCartItems: (id: number, amount: number, item: CartItemParams) => void
    removeCartItem: (id: number, item: CartItemParams) => void
}

export const CartContext = createContext<CartContextParams>({cartItems:[], setCartItems: () => {}, removeCartItem: () => {}})