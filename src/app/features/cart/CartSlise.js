import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://course-api.com/react-useReducer-cart-project";


const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,

};

export const getCartItems = createAsyncThunk("cart/gteCartItems",
    async () => {
        try {
            const res = await fetch(url);
            return await res.json()
        } catch (err) {
            console.log(err)
        }
    }
)

const CartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            const data = state.cartItems.filter(item => item.id !== itemId)
            state.cartItems = data;
        },
        increace: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount += 1;
        },
        decreace: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount -= 1;
        },
        calcTotal: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach(item => {
                amount += item.amount;
                total += item.amount * item.price
            })
            state.amount = amount;
            state.total = total;
        }
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {

            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading = false;
        },
    }

})
export const { clearCart, removeItem, increace, decreace, calcTotal } = CartSlice.actions;

//console.log(CartSlice);

export default CartSlice.reducer;