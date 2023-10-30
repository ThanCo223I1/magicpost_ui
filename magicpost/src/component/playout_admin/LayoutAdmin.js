import HeaderAdmin from "./HeaderAdmin";
import {Outlet} from "react-router";
import FooterAdmin from "./FooterAdmin";
import React from "react";

const LayoutAdmin =()=>{
    return (
        <>
            <HeaderAdmin></HeaderAdmin>
            <Outlet/>
            <FooterAdmin/>
        </>
    )
}
export default LayoutAdmin;