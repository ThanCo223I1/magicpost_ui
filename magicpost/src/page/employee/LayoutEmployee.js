import React, {useEffect, useState} from "react";
import HeaderEmployee from "./HeaderEmployee";
import FooterEmployee from "./FooterEmployee";
import {Outlet} from "react-router";
import {Link} from "react-router-dom";
import axios from "axios";

function LayoutEmployee() {
    const account = JSON.parse(localStorage.getItem("account"))
    const [consolidationPoint, setConsolidationPoint] = useState({});
    const [transactionPoint, setTransactionPoint] = useState({});
    useEffect(() => {
        if (account != null)
            axios.get(`http://localhost:8080/consolidationPoint/account/` + account.id)
            .then(function (res) {
                setConsolidationPoint(res.data)
            })
            .catch(function (err) {
                console.log(err);
            })
    }, []);

    useEffect(() => {
        if (account != null)
            axios.get(`http://localhost:8080/transactionPoint/account/` + account.id)
            .then(function (res) {
                setTransactionPoint(res.data)
            })
            .catch(function (err) {
                console.log(err);
            })
    }, []);

    return (
        <>
            <HeaderEmployee></HeaderEmployee>
            <div style={{position: 'fixed', marginTop: '68px'}} className="warpper">
                <div style={{width: "240px"}}>
                    <div style={{padding: 0, color: '#fff', background: 'honeydew', height: '770px'}}>
                        <ul id="" style={{zIndex: '1020'}}>
                            {
                                consolidationPoint && (
                                    <>
                                        <li className="mm-active">
                                            <div style={{padding: "30px"}} className="has-arrow" aria-expanded="false">
                                                <div className="nav_icon_small">
                                                    <Link to={`consolidationPoint/orderReceived/${account.id}`}>NV tập kết -
                                                        Đơn
                                                        chờ</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mm-active">
                                            <div style={{padding: "30px"}} className="has-arrow" aria-expanded="false">
                                                <div className="nav_icon_small">
                                                    <Link to={`consolidationPoint/orderShipping/${account.id}`}>NV tập kết -
                                                        Đơn đi
                                                        hàng</Link>
                                                </div>
                                            </div>
                                        </li>
                                    </>
                                )
                            }

                            {
                                transactionPoint && (
                                    <>
                                        <li className="mm-active">
                                            <div style={{padding: "30px"}} className="has-arrow" aria-expanded="false">
                                                <div className="nav_icon_small">
                                                    <Link to={`transactionPoint/orderPending/${account.id}`}>NV giao dịch -
                                                        Đơn
                                                        chờ</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mm-active">
                                            <div style={{padding: "30px"}} className="has-arrow" aria-expanded="false">
                                                <div className="nav_icon_small">
                                                    <Link to={`transactionPoint/orderShipping/${account.id}`}>NV giao dịch -
                                                        Đơn đi
                                                        hàng</Link>
                                                </div>
                                            </div>
                                        </li>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                </div>

            </div>
            <br/>
            <br/>
            <br/>
            <div style={{marginLeft: "250px"}}>
                <Outlet>

                </Outlet>
            </div>
            <FooterEmployee></FooterEmployee>
        </>
    )
}

export default LayoutEmployee;