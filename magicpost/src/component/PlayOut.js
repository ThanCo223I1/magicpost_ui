import Header from "./Header";
import {Outlet} from "react-router";
import Footer from "./Footer";

function PlayOut (){
    return(
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}
export default PlayOut;