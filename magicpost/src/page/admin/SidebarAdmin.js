import {Link} from "react-router-dom";

function SidebarAdmin() {
    return (
        <>
            <link rel="stylesheet" href="/template_admin/css/css_sidebar_1.css"/>
            <div>
                <div className="home-flex-category row">
                    <div className="sidebar_1 col-2">
                        <ul id="sidebar_1_menu">
                            <li className="">
                                <a className="has-arrow" href="magicpost/src/page/admin#" aria-expanded="false">
                                    <div className="nav_icon_small">
                                        <img src="/template_admin/img/menu-icon/7.svg" alt=""/>
                                    </div>
                                    <div className="nav_title">
                                        <span> Đơn hàng  </span>
                                    </div>
                                </a>

                                <ul className="mm-collapse">

                                    <li>
                                        <Link to={"/homeAdmin/allBills"}>
                                            <div href="" id={"id1-1"}>Tất cả các đơn</div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="mm-active">
                                <a className="has-arrow" href="magicpost/src/page/admin#" aria-expanded="false">
                                    <div className="nav_icon_small">
                                        <img src="/template_admin/img/menu-icon/5.svg" alt=""/>
                                    </div>
                                    <div className="nav_title">
                                        <span>Tài khoản người dùng </span>
                                    </div>
                                </a>
                                <ul className="mm-collapse mm-show">
                                    <li>
                                        <Link to={"/homeAdmin/NewUser"}>
                                            <a href="magicpost/src/page/admin" id={"id1-2"}>Người dùng mới nhất</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/homeAdmin/allUser"}>
                                            <a href="magicpost/src/page/admin" id={"id1-3"}>Danh sách người dùng</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="">
                                <a className="has-arrow" href="magicpost/src/page/admin#" aria-expanded="false">
                                    <div className="nav_icon_small">
                                        <img src="/template_admin/img/menu-icon/5.svg" alt=""/>
                                    </div>
                                    <div className="nav_title">
                                        <span>Tài khoản người CCDV</span>
                                    </div>
                                </a>
                                <ul className="mm-collapse">
                                    <li>
                                        <Link to={"/homeAdmin/newCCDv"}>
                                            <a href="magicpost/src/page/admin" id={"id1-4"}>Người CCDV mới nhất </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/homeAdmin/allCCDv"}>
                                            <a href="magicpost/src/page/admin" id={"id1-5"}>Danh sách người CCDV </a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="">
                                <a className="has-arrow" href="magicpost/src/page/admin#" aria-expanded="false">
                                    <div className="nav_icon_small">
                                        <img src="/template_adminimg/menu-icon/11.svg" alt=""/>
                                    </div>
                                    <div className="nav_title">
                                        <span>Tài khoản bị tố cáo</span>
                                    </div>
                                </a>
                                <ul className="mm-collapse">
                                    <li>
                                        <Link to={"/homeAdmin/allListReport"}>
                                            <a href="magicpost/src/page/admin" id={"id1-6"}>Tất cả các tố cáo</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className='col-10'>dfrgrgds</div>
                </div>
            </div>
        </>
    )
}

export default SidebarAdmin;