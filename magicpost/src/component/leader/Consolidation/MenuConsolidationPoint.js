import {Link} from "react-router-dom";
import axios from "axios";
import React, {useEffect, useState} from 'react';
import {Dropdown} from "react-bootstrap";
import {Outlet} from "react-router";


const MenuConsolidationPoint = () => {
    return (
        <>
            <div style={{display: "flex", maxHeight: "100%", minHeight: "100vh"}} className="warpper">
                <div className="col-2" style={{width: "240px", padding: 0, boxShadow: "4px 0 10px rgba(0,0,0,0.05)"}}>
                    <div style={{padding: 0, color: '#fff', background: 'lavender', height: '100%'}}>
                        <ul id="" style={{zIndex: '1020'}}>
                            <li className="">
                                <div style={{padding: "30px"}} className="has-arrow" aria-expanded="false">
                                    <div className="nav_icon_small">
                                    </div>
                                    <Link to={"/leader/employeeCon"}>Tạo tài khoản nhân viên</Link>
                                </div>
                            </li>
                            <li>
                                <div>dsfdf</div>
                            </li>
                            <li className="mm-active">
                                <div style={{padding: "30px"}} className="has-arrow" aria-expanded="false">
                                    <div className="nav_icon_small">
                                    </div>
                                    <Link to={"/leader/orderStatisticsConsolidationPoint_complete"}>Thống kê đơn thành công</Link>
                                </div>
                            </li>
                            <li className="mm-active">
                                <div style={{padding: "30px"}} className="has-arrow" aria-expanded="false">
                                    <div className="nav_icon_small">
                                    </div>
                                    <Link to={"/leader/orderStatisticsConsolidationPoint_cancel"}>Thống kê đơn bị huỷ</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default MenuConsolidationPoint;