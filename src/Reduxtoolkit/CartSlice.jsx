import { createSlice } from "@reduxjs/toolkit";
const initialState= {
    Cart:[]
}
const cartSlice = createSlice({
    name: "namecart",
    initialState,
    reducers: {
        //Add to cart method
        addToCart: (state, action) => {
            const find = state.Cart.findIndex((item) => item.id === action.payload.id)
            console.log(find)
            if (find >=0) {
                state.Cart[find].quantity += 1;
            } else {
                const temp = { ...action.payload, quantity: 1 }
                state.Cart = [...state.Cart, temp]
            }
        },
        //remove to cart method
        removeToCart: (state, action) => {
            const data = state.Cart.filter((itemFilter) => itemFilter.id !== action.payload)
            state.Cart = data;
        },
        //clear all cart method
        clearAllCart: (state) => {
            state.Cart = []
        },
        //remove single item
        decrement: (state, action) => {
            const decreseSingleItem = state.Cart.findIndex((item) => item.id === action.payload.id)
            if (decreseSingleItem >= 0) {
                state.Cart[decreseSingleItem].quantity -= 1;
            }
        }

    }
})

export const { addToCart, removeToCart, clearAllCart, decrement } = cartSlice.actions;
export default cartSlice.reducer;