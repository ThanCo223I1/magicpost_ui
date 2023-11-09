import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
function HeaderEmployee(){
    const account = JSON.parse(localStorage.getItem("account"))
    const [transactionPoint, setTransactionPoint] = useState({});
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8080/transactionPoint/account/` + account.id)
            .then(function (res) {
                setTransactionPoint(res.data)
            })
            .catch(function (err) {
                console.log(err);
            })
    }, []);

    useEffect(() => {
        if (account != null)
            axios.get(`http://localhost:8080/employees/account/` + account.id)
            .then(function (res) {
                setEmployee(res.data)
            })
            .catch(function (err) {
                console.log(err);
            })
    }, []);

    return(
        <>
            <title></title>
            <meta name="description"
                  content="Giao Hàng Nhanh phủ sóng 63 tỉnh thành trên toàn quốc, đơn nội thành giao tốc hành chỉ trong 24h. Chuyển phát nhanh, đơn hàng thành công, hài lòng khách hàng."/>
            <link rel="canonical" href="https://ghn.vn"/>
            <link rel="alternate" href="https://ghn.vn" hrefLang="vi-vn"/>
            <meta name="keywords" content="GHN.VN Giao Hàng Nhanh"/>
            <meta name="google-verification" content="GooGhywoiu9839t543j0s7543uw1"/>
            <meta name="robots" content="index,follow,noodp"/>
            <meta httpEquiv="x-dns-prefetch-control" content="on"/>
            <link rel="dns-prefetch" href="https://ghn.vn"/>
            <link rel="dns-prefetch" href="//hstatic.net"/>
            <link rel="dns-prefetch" href="//theme.hstatic.net/"/>
            <link rel="dns-prefetch" href="//file.hstatic.net/"/>
            <meta name="facebook-domain-verification" content="ct67ncn3vrskp7teqc6oo0bbysp3ca"/>
            <meta name="google-site-verification" content="ycUVH0YSGJ-1w5Qh5TOixQI4oVVjeuy7-h5vTVw3ulo"/>
            <link rel="preload" as="image" href="//theme.hstatic.net/200000472237/1001083717/14/logo.png?v=550"
                  type="image/png"/>
            <link rel="preload" as="image"
                  href="https://file.hstatic.net/200000472237/file/767x970_da38c3c2c071431bb74fb753af48c0ca.jpg"
                  type="image/jpg" media="(max-width: 767px)"/>
            <link rel="preload" as="image"
                  href="https://file.hstatic.net/200000472237/file/1920x700_7758febddb294f58a4374ab63c67360c.jpg"
                  type="image/jpg" media="(min-width: 768px)"/>
            <link rel="preload" as="image"
                  href="//file.hstatic.net/200000472237/file/767x970_62bbb912688f4c2cb00be5d10142ee0d_grande.png"
                  type="image/jpg" media="(max-width: 767px)"/>
            <link rel="preload" as="image"
                  href="https://file.hstatic.net/200000472237/file/1920x700_ae8664dce1cf4fbc90e34490898e7a1c.png"
                  type="image/jpg" media="(min-width: 768px)"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Giao Hàng Nhanh: Vận Chuyển Siêu Nhanh, Giá Siêu Tốt"/>
            <meta property="og:image"
                  content="http://theme.hstatic.net/200000472237/1001083717/14/share_fb_home.png?v=550"/>
            <meta property="og:image:secure_url"
                  content="https://theme.hstatic.net/200000472237/1001083717/14/share_fb_home.png?v=550"/>
            <meta property="og:description"
                  content="Giao Hàng Nhanh phủ sóng 63 tỉnh thành trên toàn quốc, đơn nội thành giao tốc hành chỉ trong 24h. Chuyển phát nhanh, đơn hàng thành công, hài lòng khách hàng."/>
            <meta property="og:url" content="https://ghn.vn"/>
            <meta property="og:site_name" content="GHN.VN Giao Hàng Nhanh"/>
            <meta name="facebook-domain-verification" content="5za1m3hxi4bqjq22z1vkjo26hyjub2"/>
            <meta name="description"
                  content="Giao Hàng Nhanh phủ sóng 63 tỉnh thành trên toàn quốc, đơn nội thành giao tốc hành chỉ trong 24h. Chuyển phát nhanh, đơn hàng thành công, hài lòng khách hàng."/>
            <link
                href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap&subset=vietnamese"
                as="style" type="text/css" rel="preload"/>
            <link
                href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap&subset=vietnamese"
                as="style" type="text/css" rel="stylesheet"/>
            <link rel="preload stylesheet" href="//theme.hstatic.net/200000472237/1001083717/14/plugins.css?v=550"
                  type="text/css" as="style"/>
            <link rel="stylesheet" as="style"
                  data-href="//theme.hstatic.net/200000472237/1001083717/14/render-library.css?v=550"/>
            <link rel="preload stylesheet" href="//theme.hstatic.net/200000472237/1001083717/14/styles.css?v=550"
                  type="text/css" as="style"/>
            <link href="https://file.hstatic.net/200000525917/file/jquery-script_a06dbb9a942a4a2c8e459410c8a19bc1.js"
                  rel="preload prefetch" as="script" type="text/javascript"/>
            <style dangerouslySetInnerHTML={{__html: ".grecaptcha-badge{visibility:hidden;}"}}/>
            <header className="app-header navbar" style={{
                position: 'fixed',
                background: 'rgb(255, 255, 255)',
                padding: '70px, 12px, 12px',
                width: '100%',
                zIndex: '1000'
            }}>
                <a href="magicpost/src/page#" className="navbar-brand col-2" style={{marginLeft: '0px',}}>
                    <img src="https://assets.planetradio.co.uk/img/ConfigWebHeaderLogoSVGImageUrl/108.svg"
                         style={{width: "100px", height: "auto"}} alt="<Magic Post>"
                         className="navbar-brand-full"/>
                    <img src="https://assets.planetradio.co.uk/img/ConfigWebHeaderLogoSVGImageUrl/108.svg"
                         style={{width: "10px", height: "auto", marginLeft: '0px'}} alt="Magic Post"
                         className="navbar-brand-minimized"/>
                </a>
                <button className="sidebar-minimizer mt-auto" type="button"/>
                <div className="switch-shop">
                    <div className="dropdown-custom">
                        <div aria-haspopup="true" aria-expanded="false">
                            <div className="switch-shop-header">
                                <div className="switch-shop-selected">
                                    <div className="switch-shop-img-text">
                                        <div className="switch-shop-img">
                                            <img width="10.31" height="18.34"
                                                 src={employee.avatar && employee.avatar} alt="logo"/></div>
                                        <div className="switch-shop-text module line-clamp-1"> {employee.idCard} - {employee.name}
                                        </div>
                                    </div>
                                    <div><i className="fas fa-chevron-down"/></div>
                                </div>
                                <i className="fas fa-question-circle" id="tooltip-shop"
                                   style={{marginLeft: '12px'}}/></div>
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
                        <div>
                            <button type="button" className="btn-search">
                                <i className="fa fa-search"/></button>
                        </div>
                        <input placeholder="Nhập số điện thoại - Mã đơn hàng - Tên người nhận" type="text"
                               className="form-control"
                               style={{border: 'none', padding: '4px'}}/></div>
                    <span
                        className="fz-11 color-orange-primary text-i border-bottom-f26522 position-absolute pointer top-30-px left-27-px">Tìm kiếm nâng cao (Có xuất Excel)</span>
                </div>
                <ul className="ml-auto navbar-nav">
                    {
                        transactionPoint &&
                        <div className="m-r-20">
                            <Link className="btn-primary-page btn btn-header active" style={{marginRight: '0px'}}
                                  to={'/employee/orders'} aria-current="page">
                                <i className="fas fa-pencil-alt"/> Lên đơn hàng</Link>
                        </div>
                    }
                    <li className="d-md-down-none nav-item">
                        <Link to={'/login'} onClick={()=>{
                            localStorage.setItem("account",null);
                        }} aria-current="page" className="nav-link active"> Đăng xuất<i
                            className="fas fa-bell"/></Link>
                    </li>
                </ul>
                <div/>
            </header>
        </>
    )
}
export default HeaderEmployee;