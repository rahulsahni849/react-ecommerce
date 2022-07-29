import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            console.log("PayLoad")
            console.log(action.payload)
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price ? action.payload.price * action.payload.quantity : 0;
        }
    }
})

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;