"use client"
import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loader/loaderSlice";
import productReducer from "./product/productSlice";
import editProductReducer from "./product/editProductSlice";
import sidebarReducer from "./openSidebar/OSSlice";
// import modeReducer from "./mode/modeSlice";

export const store = configureStore({
    reducer: {
        loader : loaderReducer,
        product : productReducer,
        editProduct : editProductReducer,
        sidebar : sidebarReducer,
        // mode : modeReducer
    },
})