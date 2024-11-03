import { createSlice } from "@reduxjs/toolkit";
const editProductSlice = createSlice({
    name: "editProduct",
    initialState: {
        isEditProduct: [],
    },
    reducers: {
        setEditProduct: (state, action) => {
            state.isEditProduct = action.payload;
        },
    },
});
export const { setEditProduct } = editProductSlice.actions;
export default editProductSlice.reducer;