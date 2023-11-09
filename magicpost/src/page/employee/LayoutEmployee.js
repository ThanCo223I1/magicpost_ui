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
            <div className="wrapper" style={{display: "flex", maxHeight: "100%", minHeight: "100vh"}}>
                <div className="col-2" style={{width: "240px", padding: 0, boxShadow: "4px 0 10px rgba(0,0,0,0.05)"}}>
                    <div style={{padding: 0, color: '#fff', background: 'lavender', height: "100%"}}>
                        <ul id="" style={{fontSize: "16px"}}>
                            {
                                consolidationPoint && (
                                    <>
                                        <li className="mm-active">
                                            <Link to={`consolidationPoint/orderReceived/${account.id}`}
                                                  style={{textAlign: "center"}}>
                                                <div className="has-arrow" aria-expanded="false">
                                                    <div className="nav_icon_small">
                                                        NV tập kết -
                                                        Đơn
                                                        chờ
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mm-active">
                                            <Link to={`consolidationPoint/orderShipping/${account.id}`}
                                                  style={{textAlign: "center"}}>
                                                <div className="has-arrow" aria-expanded="false">
                                                    <div className="nav_icon_small">
                                                        NV tập kết -
                                                        Đơn đi
                                                        hàng
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </>
                                )
                            }

                            {
                                transactionPoint && (
                                    <>
                                        <li className="mm-active li-active">
                                            <Link to={`transactionPoint/orderPending/${account.id}`}
                                                  style={{textAlign: "center"}}>
                                                <div className="has-arrow" aria-expanded="false">
                                                    <div className="nav_icon_small">
                                                        NV giao dịch -
                                                        Đơn
                                                        chờ
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mm-active li-active">
                                            <Link to={`transactionPoint/orderShipping/${account.id}`}
                                                  style={{textAlign: "center"}}>
                                                <div className="has-arrow" aria-expanded="false">
                                                    <div className="nav_icon_small">
                                                        NV giao dịch -
                                                        Đơn đi
                                                        hàng
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                </div>

                <div className="col-10">
                    <Outlet>
                    </Outlet>
                </div>
            </div>
            <FooterEmployee></FooterEmployee>
        </>
    )
}

export default LayoutEmployee;