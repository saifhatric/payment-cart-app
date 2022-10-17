
import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./features/cart/CartSlise"
import ModalReducer from "./features/modal/ModalSlice"

export const Store = configureStore({
  reducer: {
    cart: CartReducer,
    modal: ModalReducer,
  },
})