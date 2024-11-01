"use client"
import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../../src/redux/loader/loaderSlice"
import productReducer from "../../src/redux/product/productSlice"
import editProductReducer from "../../src/redux/product/editProductSlice"
import sidebarReducer from "../../src/redux/openSidebar/OSSlice"
import modeReducer from "../../src/redux/mode/modeSlice"
export const store = configureStore({
    reducer: {
        loader : loaderReducer,
        product : productReducer,
        editProduct : editProductReducer,
        sidebar : sidebarReducer,
        mode : modeReducer
    },
})