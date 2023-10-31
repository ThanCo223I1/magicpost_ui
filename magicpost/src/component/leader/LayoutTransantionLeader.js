import React from 'react';
import HeaderAdmin from "../playout_admin/HeaderAdmin";
import {Dropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Outlet} from "react-router";
import FooterAdmin from "../playout_admin/FooterAdmin";

const LayoutTransantionLeader = () => {
    return (
        <>
            <HeaderAdmin></HeaderAdmin>
            <div style={{position: 'fixed', marginTop: '68px'}} className="warpper">
                <div style={{width: "250px"}}>
                    <div style={{padding: 0, color: '#fff', background: 'honeydew', height: '770px'}}>
                        <ul id="" style={{zIndex: '1020'}}>
                            <li className="">
                                <div style={{padding: "30px"}} className="has-arrow" aria-expanded="false">
                                    <div className="nav_icon_small">
                                    </div>
                                   <Link to={""}>Tạo tài khoản nhân viên</Link>
                                </div>
                            </li>
                            <li className="mm-active">
                                <div style={{padding: "30px"}} className="has-arrow" aria-expanded="false">
                                    <div className="nav_icon_small">
                                    </div>
                                    <Dropdown>
                                        <Dropdown.Toggle className="btn-primary-page btn btn-header active"
                                                         id="dropdown-basic">
                                            <p>&nbsp; Điểm Tập Kết &nbsp;</p>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item>
                                                <Link to={"/admin/con"}>Tạo Điểm Tập Kết</Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>


                            </li>
                        </ul>
                    </div>
                </div>

            </div>
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

export default LayoutTransantionLeader;