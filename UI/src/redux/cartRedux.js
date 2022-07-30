import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import { userRequest } from '../requestMethods';

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

            // const userId = useSelector(state => state.user.currentUser._id);

            // const res = await userRequest(
            // useSelector(
            //     state => state.user.currentUser.accessToken)).post("/auth/login", {});
        },
        removeProducts: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        }
    }
})

export const { addProduct, removeProducts } = cartSlice.actions;
export default cartSlice.reducer;