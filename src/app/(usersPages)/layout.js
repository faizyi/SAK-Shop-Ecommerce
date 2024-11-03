import Footer from "./components/user/HomeComponents/Footer/Footer";
import Header from "./components/user/HomeComponents/header/header";
import Header2 from "./components/user/HomeComponents/header/header2";
export default function layout({ children }) {
  return (
    <div>
        <Header2/>
        {/* <Header/> */}
        <div>
        {children}
        </div>
        <Footer/>
    </div>
  )
}
