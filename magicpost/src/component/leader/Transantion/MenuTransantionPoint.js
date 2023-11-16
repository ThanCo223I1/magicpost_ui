import React from 'react';
import {Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import {Outlet} from "react-router";

const MenuConsolidationPoint = () => {
    return (
        <>
            <div style={{display: "flex", maxHeight: "100%", minHeight: "100vh"}} className="warpper">
                <div className="col-2" style={{width: "240px", padding: 0, boxShadow: "4px 0 10px rgba(0,0,0,0.05)"}}>
                    <div style={{padding: 0, color: '#fff', background: 'lavender', height: '100%'}}>
                        <ul id="" style={{zIndex: '1020'}}>
                            <li className="mm-active">
                                <div style={{padding: "30px"}} className="has-arrow" aria-expanded="false">
                                    <div className="nav_icon_small">
                                    </div>
                                    <Link to={"/leader/employeeTran"}>Tạo tài khoản nhân viên </Link>
                                </div>
                            </li>
                            <li className="mm-active">
                                <div style={{padding: "30px"}} className="has-arrow" aria-expanded="false">
                                    <div className="nav_icon_small">
                                    </div>
                                    <Link to={"/leader/showEmployeeTran"}>Tài khoản nhân viên</Link>
                                </div>
                            </li>
                            <li className="mm-active">
                                <div style={{padding: "30px"}} className="has-arrow" aria-expanded="false">
                                    <div className="nav_icon_small">
                                    </div>
                                    <Link to={"/leader/showEmployeeTranBlock"}>Tài khoản bị khoá</Link>
                                </div>
                            </li>
                            <li className="mm-active">
                                <div style={{padding: "30px"}} className="has-arrow" aria-expanded="false">
                                    <div className="nav_icon_small">
                                    </div>
                                    <Dropdown>
                                        <Dropdown.Toggle className="btn-primary-page btn btn-header active"
                                                         id="dropdown-basic">
                                            <span style={{color : "white"}}> Thống Kê </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>
                                                <Link to={"/leader/orderStatisticsTransactionPoint_shipped"}>Đơn đã giao</Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <Link to={"/leader/orderStatisticsTransactionPoint_received"}>Đơn chưa giao tới khách</Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <Link to={"/leader/orderStatisticsTransactionPoint_sent"}>Đơn đã gửi đi</Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <Link to={"/leader/orderStatisticsTransactionPoint_unsent"}>Đơn đã tạo nhưng chưa gửi</Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
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