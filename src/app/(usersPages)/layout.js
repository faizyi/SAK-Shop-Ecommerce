"use client";
import Footer from "./components/user/HomeComponents/Footer/Footer";
import Header from "./components/user/HomeComponents/header/header";
import Header2 from "./components/user/HomeComponents/header/header2";
import { Provider } from 'react-redux'
import { store } from "../../../src/app/redux/configStore"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function layout({ children }) {
  const router = useRouter();
  useEffect(()=>{
    const admin = JSON.parse(localStorage.getItem('admin'));
    if(admin){
      router.push('/admin')
    }
  },[router])
  return (
    <Provider store={store}>
    <div>
        <Header2/>
        <Header/>
        <div>
        {children}
        </div>
        <Footer/>
    </div>
    </Provider>
  )
}
