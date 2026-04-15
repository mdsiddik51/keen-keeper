import { Outlet } from "react-router";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";



const Root = () => {
    return (
        <div>
           <Navbar/>
           <Outlet/>
           <Footer/>
        </div>
    )
}

export default Root;