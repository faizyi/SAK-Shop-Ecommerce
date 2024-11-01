import {createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        isProducts: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.isProducts = action.payload;
        },
    },
});
export const { setProducts } = productSlice.actions;
export default productSlice.reducer;