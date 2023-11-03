import '../../static/css/main.5a7f7282.chunk.css'
import '../../static/css/19.d911c1cb.chunk.css'
import '../../resources/raw/main.3e229f12.chunk.css'
import '../../w3css/4/w3.css'
import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {v4} from "uuid";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "./firebase";
import {Outlet} from "react-router";

function Order() {
    const initialData = {
        image: '',
        createOrder: new Date(),
        nameSender: '',
        nameReceiver: '',
        phoneSender: '',
        phoneReceiver: '',
        addressSender: '',
        addressReceiver: '',
        width: '',
        height: '',
        weight: '',
    };
    const [orders, setOrder] = useState(initialData);
    const [successMessage, setSuccessMessage] = useState('');
    const accountLogin = JSON.parse(localStorage.getItem("account"));
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setOrder({...orders, [name]: value});
    };
    const submit = () => {
        axios.post('http://localhost:8080/orders/createOrder/' + accountLogin.employeeDTO.id, orders)
            .then((response) => {
                setSuccessMessage('Đơn hàng đã được tạo thành công.');
                console.log('API Response:', response.data);
            })
            .catch((error) => {
                console.error('Lỗi khi gọi API:', error);
            });
    };

    const [tempImage, setTempImage] = useState(null);
    const uploadImage = (imageFile) => {
        const imageRef = ref(storage, `images/${imageFile.name}`);
        uploadBytes(imageRef, imageFile)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then((url) => {
                        const updatedOrders = {...orders, image: url};
                        setOrder(updatedOrders);
                        setTempImage(url);
                    })
                    .catch((error) => {
                        console.error('Lỗi khi lấy URL hình ảnh:', error);
                    });
            })
            .catch((error) => {
                console.error('Lỗi khi tải lên hình ảnh:', error);
            });
    };
    return (
        <>
            <div>
                <meta httpEquiv="origin-trial"
                      content="Az520Inasey3TAyqLyojQa8MnmCALSEU29yQFW8dePZ7xQTvSt73pHazLFTK5f7SyLUJSo2uKLesEtEa9aUYcgMAAACPeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZyIsImV4cGlyeSI6MTcyNTQwNzk5OSwiaXNTdWJkb21haW4iOnRydWUsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0="/>
                <meta httpEquiv="origin-trial"
                      content="Az520Inasey3TAyqLyojQa8MnmCALSEU29yQFW8dePZ7xQTvSt73pHazLFTK5f7SyLUJSo2uKLesEtEa9aUYcgMAAACPeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZyIsImV4cGlyeSI6MTcyNTQwNzk5OSwiaXNTdWJkb21haW4iOnRydWUsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0="/>
                <meta httpEquiv="origin-trial"
                      content="Az520Inasey3TAyqLyojQa8MnmCALSEU29yQFW8dePZ7xQTvSt73pHazLFTK5f7SyLUJSo2uKLesEtEa9aUYcgMAAACPeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZyIsImV4cGlyeSI6MTcyNTQwNzk5OSwiaXNTdWJkb21haW4iOnRydWUsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0="/>
                <meta httpEquiv="origin-trial"
                      content="Az520Inasey3TAyqLyojQa8MnmCALSEU29yQFW8dePZ7xQTvSt73pHazLFTK5f7SyLUJSo2uKLesEtEa9aUYcgMAAACPeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZyIsImV4cGlyeSI6MTcyNTQwNzk5OSwiaXNTdWJkb21haW4iOnRydWUsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0="/>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport"
                      content="width=device-width,initial-scale=1,shrink-to-fit=no,maximum-scale=1"/>
                <meta name="description" content="Hệ thống tạo đơn hàng GHN Express"/>
                <meta name="author" content="GHN - Express"/>
                <meta name="keyword" content/>
                <meta property="og:url" content="https://khachhang.ghn.vn"/>
                <meta property="og:title" content="GHN - Express"/>
                <meta property="og:type" content="article"/>
                <meta property="og:image"
                      content="http://theme.hstatic.net/1000376681/1000508169/14/banner-sv-chuyenphat.jpg?v=2693"/>
                <meta httpEquiv="cache-control" content="no-cache"/>
                <meta httpEquiv="expires" content={0}/>
                <meta httpEquiv="pragma" content="no-cache"/>
                <meta name="facebook-domain-verification" content="x1vmayh4diykzhg9cmf04lirf1p51s"/>
                <title>GHN - Express</title>
                <link rel="manifest" href="/manifest.json"/>
                <link rel="shortcut icon" href="/favicon.ico"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Google+Sans"/>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="/css/dropdownlist.css"/>
                <link href="/fontawesome/fontawesome-free-5.9.0-web/css/all.css" rel="stylesheet"/>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                <link href="/static/css/18.8b007c41.chunk.css" rel="stylesheet"/>
                <link href="/static/css/main.5a7f7282.chunk.css" rel="stylesheet"/>
                <style type="text/css" data-glamor dangerouslySetInnerHTML={{__html: ""}}/>
                <link rel="stylesheet" type="text/css" href="/static/css/4.2725afbd.chunk.css"/>
                <link rel="stylesheet" type="text/css" href="/static/css/17.f411d021.chunk.css"/>
                <meta httpEquiv="origin-trial"
                      content="A+xK4jmZTgh1KBVry/UZKUE3h6Dr9HPPioFS4KNCzify+KEoOii7z/goKS2zgbAOwhpZ1GZllpdz7XviivJM9gcAAACFeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiQXR0cmlidXRpb25SZXBvcnRpbmdDcm9zc0FwcFdlYiIsImV4cGlyeSI6MTcwNzI2Mzk5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="/>
                <link rel="stylesheet" type="text/css" href="/static/css/26.29fc7240.chunk.css"/>
                <link rel="stylesheet" type="text/css" href="/static/css/1.4f831c6e.chunk.css"/>
                <link rel="stylesheet" type="text/css" href="/static/css/5.31967c4c.chunk.css"/>
                <link rel="stylesheet" type="text/css" href="/static/css/29.f1a580b1.chunk.css"/>
                <link rel="stylesheet" type="text/css" href="/static/css/19.d911c1cb.chunk.css"/>
            </div>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <noscript>&lt;iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-56R7QHH"&gt;&lt;/iframe&gt;</noscript>
            <div id="root">
                {/*Thanh header tìm kiếm*/}
                <div >
                    <header className="app-header navbar" style={{
                        position: 'fixed',
                        background: 'rgb(255, 255, 255)',
                        padding: '70px, 12px, 12px',
                        width: '100%',
                        zIndex: '1000'
                    }}>
                        <a href="magicpost/src/page#" className="navbar-brand col-2" style={{marginLeft: '0px',}}>
                            <img src="https://assets.planetradio.co.uk/img/ConfigWebHeaderLogoSVGImageUrl/108.svg"
                                 style={{width: "80px", height: "auto"}} alt="<Magic Post>"
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
                                                         src="/images/icon-ghn/icon-shop.png" alt="logo"/></div>
                                                <div className="switch-shop-text module line-clamp-1"> 1708041 -
                                                    Vothan
                                                </div>
                                            </div>
                                            <div><i className="fas fa-chevron-down"/></div>
                                        </div>
                                        <i className="fas fa-question-circle" id="tooltip-shop"
                                           style={{marginLeft: '12px'}}/></div>
                                    <div className="dropdown-menu-custom switch-shop-list-item" aria-labelledby
                                         style={{
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
                            <div className="m-r-20">
                                <a className="btn-primary-page btn btn-header active" style={{marginRight: '0px'}}
                                   href="/order/create" aria-current="page">
                                    <i className="fas fa-pencil-alt"/> Lên đơn hàng</a>
                            </div>
                            <li className="d-md-down-none nav-item">
                                <Link aria-current="page" className="nav-link active " href="">
                                    <i className="fas fa-bell"/></Link>
                            </li>
                        </ul>
                        <div/>
                    </header>

                    {/*Thanh ben trai*/}
                    <div className='row'>
                        <div className='col-2'
                             style={{zIndex: '1000', marginTop: '64px', textAlign: 'center'}}>
                            <div style={{padding: 0, color: '#fff', background: '#00467f', height: '770px'}}>
                                <div className="sidebar-menu color-white">
                                    <div className="menu-body">
                                        <Link aria-current="page" className="active" to={`transactionPoint/orderPending/${accountLogin.id}`}>
                                            <div className="item-menu actived" style={{borderRadius: '30px'}}>
                                                <i className=" p-r-8 fz-18 fas fa-store"/>
                                                <span className="text-block">Đơn hàng đi - NV giao dịch</span>
                                            </div>
                                        </Link>
                                        <Link aria-current="page" className="active" to={`transactionPoint/orderShipping/${accountLogin.id}`}>
                                            <div className="item-menu actived" style={{borderRadius: '30px'}}>
                                                <i className=" p-r-8 fz-17 fas fa-money-check"/>
                                                <span className="text-block">Đơn hàng đang xử lý - NV giao dịch</span></div>
                                        </Link>
                                        <Link aria-current="page" className="active" to={`consolidationPoint/orderReceived/${accountLogin.id}`}>
                                            <div className="item-menu actived" style={{borderRadius: '30px'}}>
                                                <i className=" p-r-8 fz-21 fas fa-clipboard-list"/>
                                                <span className="text-block">Đơn hàng đợi duyệt - NV tập kết</span>
                                            </div>
                                        </Link>
                                        <Link aria-current="page" className="active" to={`consolidationPoint/orderShipping/${accountLogin.id}`}>
                                            <div className="item-menu actived" style={{borderRadius: '30px'}}>
                                                <i className=" p-r-8 fz-18 fas fa-file-import"/>
                                                <span className="text-block">Đơn hàng đi - NV tập kết</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link>
                                            <div className="item-menu actived logout"
                                                 style={{borderRadius: '30px'}}>
                                                <i className=" p-r-8 fz-20 fas fa-sign-out-alt"/>
                                                <span className="text-block">Đăng xuất</span></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Outlet/>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Order;