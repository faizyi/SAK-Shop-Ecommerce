"use client";
import Footer from "./components/user/HomeComponents/Footer/Footer";
import Header from "./components/user/HomeComponents/header/header";
import Header2 from "./components/user/HomeComponents/header/header2";
import { Provider } from 'react-redux'
import { store } from "../../../src/app/redux/configStore"
export default function layout({ children }) {
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
