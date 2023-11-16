import HeaderAdmin from "./HeaderAdmin";
import {Outlet} from "react-router";
import FooterAdmin from "./FooterAdmin";
import React from "react";
import {Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";

const LayoutAdmin = () => {
    return (
        <>
            <HeaderAdmin></HeaderAdmin>
            <div style={{display: "flex", maxHeight: "100%", minHeight: "100vh"}} className="warpper">
                <div className="col-2" style={{width: "240px", padding: 0, boxShadow: "4px 0 10px rgba(0,0,0,0.05)"}}>
                    <div style={{padding: 0, color: '#fff', background: 'lavender', height: "100%"}}>
                        <ul id="" style={{fontSize: "16px"}}>
                            <li className="mm-active">
                                <div style={{padding: "30px"}} className="has-arrow" aria-expanded="false">
                                    <div className="nav_icon_small">
                                    </div>
                                    <Dropdown>
                                        <Dropdown.Toggle className="btn-primary-page btn btn-header active"
                                                         id="dropdown-basic">
                                            <span> Điểm Giao Dịch </span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item>
                                                <Link to={"/admin/tran"}>Tạo Điểm Giao Dịch</Link></Dropdown.Item>
                                            <Dropdown.Item>
                                                <Link to={"/admin/managerTran"}>Điểm Giao Dịch Đang Hoạt Động</Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <Link to={"/admin/managerTran/block"}>Điểm Giao Dịch Ngừng Hoạt Động</Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </li>
                            <li className="mm-active">
                                <div style={{padding: "30px"}} className="has-arrow" aria-expanded="false">
                                    <div className="nav_icon_small">
                                    </div>
                                    <Dropdown>
                                        <Dropdown.Toggle className="btn-primary-page btn btn-header active"
                                                         id="dropdown-basic">
                                            <span>&nbsp; Điểm Tập Kết &nbsp;</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item>
                                                <Link to={"/admin/con"}>Tạo Điểm Tập Kết</Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <Link to={"/admin/managerCon"}>Điểm Tập Kết Đang Hoạt Động</Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <Link to={"/admin/managerCon/block"}>Điểm Tập Kết Ngừng Hoạt Động</Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </li>
                            <li className="mm-active">
                                <div style={{padding: "30px"}} className="has-arrow" aria-expanded="false">
                                    <div className="nav_icon_small">
                                    </div>
                                    <Dropdown>
                                        <Dropdown.Toggle className="btn-primary-page btn btn-header active"
                                                         id="dropdown-basic">
                                            <span>&nbsp; Thống kê &nbsp;</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item>
                                                <Link to={"/admin/orderStatistics_TransactionPoint_admin"}>Đơn hàng các điểm giao dịch</Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <Link to={"/admin/orderStatistics_Consolidation_admin"}>Đơn hàng các điểm tập kết</Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <Link to={"/admin/orderStatistics_shipped"}>Đơn hàng đã giao(toàn quốc)</Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <Link to={"/admin/orderStatistics_inventory"}>Đơn hàng còn tồn(toàn quốc)</Link>
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

            <FooterAdmin/>
        </>
    )
}
export default LayoutAdmin;