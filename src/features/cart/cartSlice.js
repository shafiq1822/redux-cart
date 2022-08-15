import {createSlice} from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const initialState = {
    cartItems: cartItems,
    quantity: 4,
    total: 0,
}

const cartSlice = createSlice({ 
    name: 'cart',
    initialState,
    reducers: {
        clearCart: ( state ) => {
            state.cartItems = [];
        },

        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },

        increase: (state, {payload}) => {
            // const itemId = action.payload;
            const cartItem = state.cartItems.find((item) => item.id === payload);
            cartItem.quantity = cartItem.quantity + 1;
        },

        decrease: (state, {payload}) => {
            // const itemId = action.payload;
            const cartItem = state.cartItems.find((item) => item.id === payload);
            cartItem.quantity = cartItem.quantity - 1;
        },

        calculateTotals: (state, action) => {
            let quantity = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                quantity += item.quantity;
                total += item.quantity * Number(item.price);
            })

            state.quantity = quantity;
            state.total = total;
        }
    }
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;