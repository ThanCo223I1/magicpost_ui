import {Link} from "react-router-dom";
import {Outlet} from "react-router";

function SidebarAdmin() {
    return (
        <>
            <link rel="stylesheet" href="/template_admin/css/css_sidebar_1.css"/>
            <div style={{position: 'fixed', marginTop: '68px'}}>
                <div className='row'>
                    <div style={{width:"250px"}}>
                        <div style={{padding: 0, color: '#fff', background: 'honeydew', height: '770px'}}>
                            <ul id="" style={{zIndex: '1020'}}>
                                <li className="">
                                    <Link  className="has-arrow" aria-expanded="false">
                                        <div className="nav_icon_small">
                                            <img src="/template_admin/img/menu-icon/9.svg" alt=""/>
                                        </div>
                                        <div className="nav_title">
                                            <span> Điểm Giao Dịch  </span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="mm-active">
                                    <Link className="has-arrow" aria-expanded="false">
                                        <div className="nav_icon_small">
                                            <img src="/template_admin/img/menu-icon/9   .svg" alt=""/>
                                        </div>
                                        <div className="nav_title">
                                            <span>Điểm Tập Kết </span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SidebarAdmin;