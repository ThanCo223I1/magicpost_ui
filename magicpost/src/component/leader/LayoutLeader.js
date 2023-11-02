import React, {useEffect} from 'react';
import HeaderAdmin from "../playout_admin/HeaderAdmin";
import {Dropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Outlet} from "react-router";
import FooterAdmin from "../playout_admin/FooterAdmin";
import MenuTransantionPoint from "./MenuTransantionPoint";
import MenuConsolidationPoint from "./MenuConsolidationPoint";
import axios from "axios";

const LayoutLeader = () => {
    const account = JSON.parse(localStorage.getItem("account"))
    const leader = account.leaderDTO;
    const role = leader.role.id;

    return (
        <>
            <HeaderAdmin></HeaderAdmin>
            {role===4 && <MenuTransantionPoint></MenuTransantionPoint>}
            {role===5 && <MenuConsolidationPoint></MenuConsolidationPoint>}
            <br/>
            <br/>
            <br/>
            <div style={{marginLeft: "250px"}}>
                <Outlet></Outlet>
            </div>
            <FooterAdmin/>
        </>

    );
};

export default LayoutLeader;