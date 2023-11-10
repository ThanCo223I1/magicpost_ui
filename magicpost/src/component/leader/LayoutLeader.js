import React from 'react';
import FooterAdmin from "../playout_admin/FooterAdmin";
import MenuTransantionPoint from "./Transantion/MenuTransantionPoint";
import MenuConsolidationPoint from "./Consolidation/MenuConsolidationPoint";
import HeaderLeader from "./HeaderLeader";

const LayoutLeader = () => {
    const account = JSON.parse(localStorage.getItem("account"))
    const leader = account.leaderDTO;
    const role = leader.role.id;

    return (
        <>
            <HeaderLeader></HeaderLeader>
            {role===4 && <MenuTransantionPoint></MenuTransantionPoint>}
            {role===5 && <MenuConsolidationPoint></MenuConsolidationPoint>}
            <FooterAdmin/>
        </>

    );
};

export default LayoutLeader;