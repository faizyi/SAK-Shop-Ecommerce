"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false, // Default mode
  theme: "dark",
  bg: "slate-900",
  bgP: "white",
  color: "black",
  loaderColor: "#183153",
};

export const modeSlice = createSlice({
  name: "Mode",
  initialState,
  reducers: {
    setMode: (state, action) => {
      const isDarkMode = action.payload;
      state.isDarkMode = isDarkMode;
      state.theme = isDarkMode ? "light" : "dark";
      state.bg = isDarkMode ? "slate-950" : "slate-900";
      state.bgP = isDarkMode ? "slate-950" : "white";
      state.color = isDarkMode ? "white" : "black";
      state.loaderColor = isDarkMode ? "white" : "#183153";
    },
    toggleMode: (state) => {
      const newMode = !state.isDarkMode;
      state.isDarkMode = newMode;
      if (typeof window !== 'undefined') {
        localStorage.setItem('mode', JSON.stringify(newMode));
      }
      state.theme = newMode ? "light" : "dark";
      state.bg = newMode ? "slate-950" : "slate-900";
      state.bgP = newMode ? "slate-950" : "white";
      state.color = newMode ? "white" : "black";
      state.loaderColor = newMode ? "white" : "#183153";
    },
  },
});

export const { setMode, toggleMode } = modeSlice.actions;
export default modeSlice.reducer;
