import {Link} from "react-router-dom";

function SidebarAdmin() {
    return (
        <>
            <link rel="stylesheet" href="/template_admin/css/css_sidebar_1.css"/>
            <div className='row'>
                <div className='col-2' style={{position: 'fixed', marginTop: '40px'}}>
                    <div  style={{padding: 0, color: '#fff', background: 'honeydew', height:'770px'}}>
                        <ul id="" style={{zIndex:'1020'}} >
                            <li className="">
                                <Link className="has-arrow"  aria-expanded="false">
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
                <div className='col-6'></div>
                <div className='col-1'></div>
                <div className='col-2'></div>
            </div>
        </>
    )
}

export default SidebarAdmin;