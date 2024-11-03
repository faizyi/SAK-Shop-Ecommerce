"use client"
import "./admin.css"
import React from 'react'
import AdminPage from './admin/page'
import { Provider } from 'react-redux'
import { useSelector } from "react-redux"
import { store } from "../../../src/app/redux/configStore"
export default function Pageslayout({ children }) {
  return (
    <Provider store={store}>
    <LayoutContent>
    <AdminPage />
      <div className="">{children}</div>
  </LayoutContent>
  </Provider>
  )
}

function LayoutContent({ children }) {
  const { bgP } = useSelector((state) => state.mode);
  return <div
  className={`${bgP === "slate-950" ? "bg-slate-950 min-h-screen" : "bg-gray-200 min-h-screen"}`}
  >{children}</div>;
}
