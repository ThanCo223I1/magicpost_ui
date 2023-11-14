import React from 'react';
import {Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";

const MenuConsolidationPoint = () => {
    return (
        <>
            <div style={{position: 'fixed', marginTop: '68px'}} className="warpper">
                <div style={{width: "250px"}}>
                    <div style={{padding: 0, color: '#fff', background: 'honeydew', height: '770px'}}>
                        <ul id="" style={{zIndex: '1020'}}>
                            <li className="">
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
                                                <Link to={"/leader/incoming"}>Thống kê hàng nhận từ khách gửi </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <Link to={"/leader/outgoing"}>Thống kê hàng gửi đi điểm tập kết</Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    );
};

export default MenuConsolidationPoint;