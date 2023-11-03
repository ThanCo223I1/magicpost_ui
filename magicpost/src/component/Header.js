import '../static/css/26.29fc7240.chunk.css'
import '../static/css/19.d911c1cb.chunk.css'
import '../static/css/main.5a7f7282.chunk.css'
import '../static/css/17.f411d021.chunk.css'
import '../static/css/5.31967c4c.chunk.css'

function Header() {
    return (
        <>
            <header className="app-header navbar"><a href="/order?tab=ORDER_CREATED" full="[object Object]"
                                                     minimized="[object Object]" className="navbar-brand"><img
                src="/images/logo-ghn/logo-ghn.png" width="auto" height="auto" alt="GHN Express Logo"
                className="navbar-brand-full"/><img src="/images/logo-ghn/logo-ghn-min.png" width={40} height={30}
                                                    alt="GHN Express Logo" className="navbar-brand-minimized"/></a>
                <button className="sidebar-minimizer mt-auto" type="button"/>
                <div className="switch-shop">
                    <div className="dropdown-custom">
                        <div aria-haspopup="true" aria-expanded="false">
                            <div className="switch-shop-header">
                                <div className="switch-shop-selected">
                                    <div className="switch-shop-img-text">
                                        <div className="switch-shop-img"><img width="10.31" height="18.34"
                                                                              src="/images/icon-ghn/icon-shop.png"
                                                                              alt="logo"/></div>
                                        <div className="switch-shop-text module line-clamp-1">1708041 - Vothan</div>
                                    </div>
                                    <div><i className="fas fa-chevron-down"/></div>
                                </div>
                                <i className="fas fa-question-circle" id="tooltip-shop" style={{marginLeft: '12px'}}/>
                            </div>
                            <div className="dropdown-menu-custom switch-shop-list-item" aria-labelledby style={{
                                position: 'absolute',
                                top: '0px',
                                left: '0px',
                                opacity: 0,
                                pointerEvents: 'none'
                            }}>
                                <div className="p-b-12 p-t-8 p-l-8 p-r-8 position-relative"><input
                                    id="input-search-shop" placeholder="Tìm kiếm cửa hàng" type="text"
                                    className="form-control" defaultValue/></div>
                                <div className="group-shop owner">
                                    <div>DS CỬA HÀNG BẠN LÀ CHỦ SỞ HỮU</div>
                                    <a href="/store/create/shop">
                                        <div><i className="fas fa-plus-circle"/></div>
                                    </a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="width_25_percent m-auto position-relative">
                    <div className="display-flex width_100_percent">
                        <div className="input-group-prepend">
                            <button type="button" className="btn-search"><i className="fa fa-search"/></button>
                        </div>
                        <input placeholder="Nhập số điện thoại - Mã đơn hàng - Tên người nhận" type="text"
                               className="form-control" maxLength={60} defaultValue
                               style={{border: 'none', padding: '4px'}}/></div>
                    <span
                        className="fz-11 color-orange-primary text-i border-bottom-f26522 position-absolute pointer top-30-px left-27-px">Tìm kiếm nâng cao (Có xuất Excel)</span>
                </div>
                <ul className="ml-auto navbar-nav">
                    <div className="m-r-20"><a className="btn-primary-page btn btn-header active" href="/order/create"
                                               aria-current="page"><i className="fas fa-pencil-alt"/> Lên đơn hàng</a>
                    </div>
                    <li className="d-md-down-none nav-item"><a aria-current="page" className="nav-link active"
                                                               href="/order/create"><i className="fas fa-bell"/></a>
                    </li>
                </ul>
                <div/>
            </header>
        </>
    )
}

export default Header;