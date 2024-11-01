"use client"

import { createSlice } from "@reduxjs/toolkit";

// Retrieve initial theme from localStorage if available, otherwise use default
const getInitialTheme = () => {
  const savedTheme = JSON.parse(localStorage.getItem('mode'));
  return savedTheme !== null ? savedTheme : false;
};

const initialState = {
  isDarkMode: getInitialTheme(),    // Set based on saved theme
  theme: getInitialTheme() ? "light" : "dark",
  bg: getInitialTheme() ? "slate-950" : "slate-900",
  bgP: getInitialTheme() ? "slate-950" : "white",
  color: getInitialTheme() ? "white" : "black",
  loaderColor: getInitialTheme() ? "white" : "#183153",
};

export const modeSlice = createSlice({
  name: "Mode",
  initialState,
  reducers: {
    toogleMode: (state) => {
      // Toggle dark mode and save it to localStorage
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem('mode', JSON.stringify(state.isDarkMode));

      // Update theme related properties based on the current mode
      state.theme = state.isDarkMode ? "light" : "dark";
      state.bg = state.isDarkMode ? "slate-950" : "slate-900";
      state.bgP = state.isDarkMode ? "slate-950" : "white";
      state.color = state.isDarkMode ? "white" : "black";
      state.loaderColor = state.isDarkMode ? "white" : "#183153";
    },
  },
});

export const { toogleMode } = modeSlice.actions;
export default modeSlice.reducer;
