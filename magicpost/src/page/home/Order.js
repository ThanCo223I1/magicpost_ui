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
    const accountLogin=JSON.parse(localStorage.getItem("account"));
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOrder({ ...orders, [name]: value });
    };
    const submit = () => {
        axios.post('http://localhost:8080/orders/createOrder/'+accountLogin.employeeDTO.id, orders)
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
                        const updatedOrders = { ...orders, image: url };
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
                <div className="app">
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
                             style={{position: 'fixed', zIndex: '1000', marginTop: '64px', textAlign: 'center'}}>
                            <div style={{padding: 0, color: '#fff', background: '#00467f', height: '770px'}}>
                                <div className="sidebar-menu color-white">
                                    <div className="menu-body">
                                        <Link aria-current="page" className="active">
                                            <div className="item-menu actived" style={{borderRadius: '30px'}}>
                                                <i className=" p-r-8 fz-21 fas fa-clipboard-list"/>
                                                <span className="text-block">Quản lý đơn hàng</span>
                                            </div>
                                        </Link>
                                        <Link aria-current="page" className="active">
                                            <div className="item-menu actived" style={{borderRadius: '30px'}}>
                                                <i className=" p-r-8 fz-18 fas fa-file-import"/>
                                                <span className="text-block">Lên đơn Excel</span>
                                            </div>
                                        </Link>
                                        <Link aria-current="page" className="active">
                                            <div className="item-menu actived" style={{borderRadius: '30px'}}>
                                                <i className=" p-r-8 fz-18 fas fa-store"/>
                                                <span className="text-block">Quản lý cửa hàng</span>
                                            </div>
                                        </Link>
                                        <Link>
                                            <div className="item-menu actived" style={{borderRadius: '30px'}}>
                                                <i className=" p-r-8 fz-17 fas fa-money-check"/>
                                                <span className="text-block">COD &amp; đối soát</span></div>
                                        </Link>
                                        <Link>
                                            <div className="item-menu actived" style={{borderRadius: '30px'}}>
                                                <i className=" p-r-8 fz-18 fas fa-exclamation-triangle"/>
                                                <span className="text-block">Khiếu nại</span>
                                            </div>
                                        </Link>
                                        <Link href="/group-permission">
                                            <div className="item-menu actived" style={{borderRadius: '30px'}}>
                                                <i className=" p-r-8 fz-18 fas fa-user-cog"/>
                                                <span className="text-block">Phân quyền</span>
                                            </div>
                                        </Link>
                                        <Link>
                                            <div className="item-menu actived" style={{borderRadius: '30px'}}>
                                                <i className=" p-r-8 fz-21 fas fa-print"/>
                                                <span className="text-block">Vận đơn &amp; tiện ích</span>
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
                        <div className='col-1'></div>
                        <div className='col-8'>
                            <div className="app-body">
                                <main className="main" style={{background: 'rgb(255, 255, 255)'}}>
                                    <div className="banner-skinny"><a target="_blank" rel="noopener noreferrer"><img
                                        alt="banner"/></a><i className="fas fa-times closes" title="Đóng"/></div>
                                    <div className="container-fluid">
                                        <div className="order-gird row">
                                            {/*Thanh chủ - đơn nháp*/}
                                            <div className="create-form-left mt-15 step-rel">
                                                <div className="step-static row">
                                                    <div className='col-2'></div>
                                                    <div className="row col-10"
                                                         style={{width: '100%', marginLeft: '0px'}}>
                                                        <div className="col-md-4 offset-md-2">
                                                            <div className="deliver-info left">
                                                                <div className="info-titile"> | Bên Gửi</div>
                                                                <label className>Họ tên</label>
                                                                <input
                                                                    name="nameSender"
                                                                    placeholder="Nhập họ tên"
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={orders.nameSender}
                                                                    onChange={handleInputChange}/>
                                                                <p style={{
                                                                    color: 'rgb(228, 19, 44)', fontSize: '12px',
                                                                    marginTop: '0px',
                                                                    marginBottom: '0px',
                                                                    fontWeight: 500,
                                                                    lineHeight: '15px'
                                                                }}/>
                                                                <label className>Địa chỉ</label>
                                                                <div className="autocompleted-component">
                                                                    <input name="addressSender"
                                                                           className="form-control"
                                                                           placeholder="Nhập địa chỉ"
                                                                           type="text"
                                                                           value={orders.addressSender}
                                                                           onChange={handleInputChange}
                                                                           style={{width: '700px'}}
                                                                    />
                                                                    <div className="items-autocompleted-wrapper">
                                                                        <div
                                                                            className="items-autocompleted-container">
                                                                            <div className="items-autocompleted"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <p className style={{
                                                                    color: 'rgb(228, 19, 44)',
                                                                    fontSize: '12px',
                                                                    marginTop: '0px',
                                                                    marginBottom: '0px',
                                                                    fontWeight: 500,
                                                                    lineHeight: '15px',
                                                                }}/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 offset-md-2">
                                                            <div className="deliver-info right">
                                                                <div className="info-titile"/>
                                                                <label className>Số điện thoại</label>
                                                                <div className="position-relative">
                                                                    <input name="phoneSender"
                                                                           placeholder="Nhập số điện thoại"
                                                                           type="text"
                                                                           className="form-control"
                                                                           value={orders.phoneSender}
                                                                           onChange={handleInputChange}
                                                                    />
                                                                </div>
                                                                <p className style={{
                                                                    color: 'rgb(228, 19, 44)',
                                                                    fontSize: '12px',
                                                                    marginTop: '0px',
                                                                    marginBottom: '0px',
                                                                    fontWeight: 500,
                                                                    lineHeight: '15px'
                                                                }}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-2'></div>
                                                    <div className="col-10 col-md-8 offset-md-2"
                                                         style={{marginLeft: '220px'}}>
                                                        <hr style={{width: '710px'}}/>
                                                    </div>
                                                    <div className='col-2'></div>
                                                    <div className="row col-10"
                                                         style={{width: '100%', marginLeft: '0px'}}>
                                                        <div className="col-md-4 offset-md-2">
                                                            <div className="deliver-info left">
                                                                <div className="info-titile"> | Bên Nhận</div>
                                                                <label className>Họ tên</label>
                                                                <input
                                                                    name="nameReceiver"
                                                                    placeholder="Nhập họ tên"
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={orders.nameReceiver}
                                                                    onChange={handleInputChange}/>
                                                                <p style={{
                                                                    color: 'rgb(228, 19, 44)', fontSize: '12px',
                                                                    marginTop: '0px',
                                                                    marginBottom: '0px',
                                                                    fontWeight: 500,
                                                                    lineHeight: '15px'
                                                                }}/>
                                                                <label className>Địa chỉ</label>
                                                                <div className="autocompleted-component">
                                                                    <input name="addressReceiver"
                                                                           className="form-control"
                                                                           placeholder="Nhập địa chỉ"
                                                                           type="text"
                                                                           autoComplete="off"
                                                                           value={orders.addressReceiver}
                                                                           onChange={handleInputChange}
                                                                           style={{width: '700px'}}
                                                                    />
                                                                    <div className="items-autocompleted-wrapper">
                                                                        <div
                                                                            className="items-autocompleted-container">
                                                                            <div className="items-autocompleted"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <p className style={{
                                                                    color: 'rgb(228, 19, 44)',
                                                                    fontSize: '12px',
                                                                    marginTop: '0px',
                                                                    marginBottom: '0px',
                                                                    fontWeight: 500,
                                                                    lineHeight: '15px',
                                                                }}/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 offset-md-2">
                                                            <div className="deliver-info right">
                                                                <div className="info-titile"/>
                                                                <label className>Số điện thoại</label>
                                                                <div className="position-relative">
                                                                    <input name="phoneReceiver"
                                                                           placeholder="Nhập số điện thoại"
                                                                           type="text"
                                                                           className="form-control"
                                                                           value={orders.phoneReceiver}
                                                                           onChange={handleInputChange}
                                                                    />
                                                                </div>
                                                                <p className style={{
                                                                    color: 'rgb(228, 19, 44)',
                                                                    fontSize: '12px',
                                                                    marginTop: '0px',
                                                                    marginBottom: '0px',
                                                                    fontWeight: 500,
                                                                    lineHeight: '15px'
                                                                }}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-2'></div>
                                                    <div className="col-10 col-md-8 offset-md-2">
                                                        <hr style={{width: '710px'}}/>
                                                    </div>

                                                    <div className="width_100_percent m-l-0 row">
                                                        <div className='col-2'></div>
                                                        <div className=" row col-10"
                                                             style={{width: '100%', marginLeft: '0px'}}>
                                                            <div
                                                                className="info-titile color-orange-primary m-b-12 col-10"
                                                                style={{marginLeft: " 40px"}}>| Thông tin
                                                                gói hàng
                                                            </div>
                                                            <div className="package-border"
                                                                 style={{marginLeft: " 65px"}}>
                                                                <div className="package-item"
                                                                     style={{width: '700px'}}>
                                                                    <div style={{
                                                                        textAlign: 'center',
                                                                        display: 'block',
                                                                        backgroundColor: 'gray',
                                                                        color: '#fff',
                                                                        padding: '20px 10px',
                                                                        borderRadius: '100px',
                                                                        height:'100px',
                                                                        width:'100px',
                                                                        position: 'relative',
                                                                        overflow: 'hidden',
                                                                    }}>
                                                                        <label htmlFor="fileInput" style={{padding:'19px',color:'white'}}>
                                                                            Up ảnh
                                                                        </label>
                                                                        {tempImage && <img src={tempImage}  alt="Selected Image" style={{
                                                                            borderRadius: '100px',
                                                                            height:'100px',
                                                                            width:'100px',
                                                                            position: 'absolute',
                                                                            top: 0,
                                                                            left: -1,
                                                                            objectFit: 'cover',
                                                                            color:'white'
                                                                        }} />}
                                                                        <input
                                                                            htmlFor="fileInput"
                                                                            type="file"
                                                                            id="fileInput"
                                                                            style={{ display: 'none' }}
                                                                            onChange={(e) => uploadImage(e.target.files[0])}
                                                                        />
                                                                        {successMessage && <p>{successMessage}</p>}
                                                                    </div>
                                                                    <div className=" width_40_percent block-center">
                                                                        <div className="package-title">Tổng
                                                                            KL(gam)
                                                                        </div>
                                                                        <div
                                                                            className="display-flex text-align-items">
                                                                            <input name="weight" type="text"
                                                                                   placeholder='Tổng khối lượng'
                                                                                   className="custom-input mx-1 form-control"
                                                                                   value={orders.weight}
                                                                                   onChange={handleInputChange}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="block-center width_25_percent">
                                                                        <div className="package-title">Dài</div>
                                                                        <input name="width" type="text"
                                                                               placeholder='Chiều dài'
                                                                               className="custom-input mx-1 form-control"
                                                                               value={orders.width}
                                                                               onChange={handleInputChange}
                                                                        />
                                                                    </div>
                                                                    <div className="block-center width_25_percent">
                                                                        <div className="package-title">Cao</div>
                                                                        <input name="height" type="text"
                                                                               placeholder='Chiều cao'
                                                                               className="custom-input mx-1 form-control"
                                                                               value={orders.height}
                                                                               onChange={handleInputChange}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="width_80_percent text-right color-orange-primary text-13 m-t-5">Khối
                                                                    lượng quy đổi: 200g
                                                                </div>
                                                            </div>
                                                            <div className="block-center-between m-t-8 col-9"
                                                                 style={{marginLeft: " 45px"}}>
                                                                <div className="width_45_percent">
                                                                    <label className="block-center-between">
                                                                        <label className="checkbox-container"
                                                                               style={{width: 'auto'}}>
                                                                            <input type="checkbox"/>
                                                                            <div className="checkmark"/>
                                                                            <div className="check-name">
                                                                                <span>Giao thất bại - thu tiền
                                                                                    <i id="tooltip_cod_failed"
                                                                                       className="fas fa-question-circle"/>
                                                                                </span>
                                                                            </div>
                                                                        </label>
                                                                    </label>
                                                                    <input name="CODFailed"
                                                                           placeholder="Nhập tiền cần thu"
                                                                           type="text"
                                                                           className="border-actived form-control"/>
                                                                    <p style={{
                                                                        color: 'rgb(228, 19, 44)',
                                                                        fontSize: '12px',
                                                                        marginTop: '0px',
                                                                        marginBottom: '0px',
                                                                        fontWeight: 500,
                                                                        lineHeight: '15px'
                                                                    }}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/*Thanh ben phai*/}
                                            <div className="create-form-right">
                                                <div className="c-header"/>
                                                <div className="position-relative">
                                                    <input name="Promotion" placeholder="Mã khuyến mãi"
                                                           type="text"
                                                           className="input-voucher form-control form-control"/>
                                                    <button
                                                        className="btn btn-secondary-page btn-apply-voucher">Áp
                                                        dụng
                                                    </button>
                                                </div>
                                                <p className="m-t-4" style={{
                                                    color: 'rgb(228, 19, 44)',
                                                    fontSize: '12px',
                                                    marginTop: '0px',
                                                    marginBottom: '0px',
                                                    fontWeight: 500,
                                                    lineHeight: '15px'
                                                }}/>

                                                <div className="c-footer c-footer-bottom">
                                                    <p style={{
                                                        fontSize: '15px',
                                                        color: 'rgb(75, 75, 75)',
                                                        marginBottom: '6px'
                                                    }}>Tuỳ chọn thanh toán: </p>
                                                    <div role="combobox" id="rw_3_input" aria-owns="rw_3_listbox"
                                                         aria-expanded="false" aria-haspopup="true" aria-busy="true"
                                                         aria-live="polite" aria-disabled="false"
                                                         aria-readonly="false"
                                                         className="rw-dropdown-list rw-widget">
                                                        <div
                                                            className="rw-widget-input rw-widget-picker rw-widget-container">
                                                            <div className="rw-input rw-dropdown-list-input">
                                                                <select>
                                                                    <option value={1}>Bên Gửi Trả Phí</option>
                                                                    <option value={2}>Bên Nhận Trả Phí</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className style={{
                                                        color: 'rgb(228, 19, 44)',
                                                        fontSize: '12px',
                                                        marginTop: '0px',
                                                        marginBottom: '0px',
                                                        fontWeight: 500,
                                                        lineHeight: '15px'
                                                    }}/>
                                                    <div className="info-cost">
                                                        <p className="color-bule-primary" style={{
                                                            fontSize: '12px',
                                                            marginBottom: '4px',
                                                            marginTop: '8px',
                                                            lineHeight: '13px'
                                                        }}>Tổng phí</p>
                                                        <p
                                                            className="color-bule-primary" style={{
                                                            fontSize: '22px',
                                                            marginBottom: '3px',
                                                            marginTop: '12px',
                                                            fontWeight: 600,
                                                            lineHeight: '13px'
                                                        }}>0 vnđ</p>
                                                        <span className="color-orange-primary"
                                                              style={{fontSize: '12px'}}> Chưa tính tiền thu hộ</span>
                                                    </div>
                                                    <div style={{
                                                        margin: '12px 0px',
                                                        position: 'relative',
                                                        height: '40px'
                                                    }}>
                                                        <div className="block-rate ">
                                                            <button type='submit'
                                                                    className="btn-primary-page rate-submit"
                                                                    onClick={submit}
                                                                    style={{color: 'rgb(228, 19, 44)'}}>Tạo đơn
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </div>
                        <div className='col-1'></div>
                    </div>
                    <div/>
                    <div className="inventory pointer react-draggable" title="Nắm giữ để di chuyển"
                         style={{transform: 'translate(0px, 0px)'}}/>
                </div>
                <div className="Toastify"/>
            </div>
            <div id="overlay">
                <div id="content"/>
            </div>
            <iframe allow="join-ad-interest-group" data-tagging-id="AW-10973167971/user_login_khachhangghnvn"
                    data-load-time={1698283277498} height={0} width={0}
                    style={{display: 'none', visibility: 'hidden'}}
                    src="https://td.doubleclick.net/td/rul/10973167971?random=1698283277491&cv=11&fst=1698283277491&fmt=3&bg=ffffff&guid=ON&async=1&gtm=45He3an0v893300629&gcd=11l1l1l1l1&u_w=1440&u_h=900&url=https%3A%2F%2Fkhachhang.ghn.vn%2F&label=user_login_khachhangghnvn&hn=www.googleadservices.com&frm=0&tiba=GHN%20-%20Express&value=0&bttype=purchase&auid=1517164477.1698133086&fledge=1&capi=1&uaa=x86&uab=64&uafvl=Chromium%3B118.0.5993.88%7CGoogle%2520Chrome%3B118.0.5993.88%7CNot%253DA%253FBrand%3B99.0.0.0&uamb=0&uap=macOS&uapv=14.0.0&uaw=0"/>
            <noscript>&lt;img height="1" width="1" style="display:none"
                src="https://www.facebook.com/tr?id=1149251642334426&amp;amp;ev=PageView&amp;amp;noscript=1"&gt;</noscript>
            <iframe id="insider-worker" src="https://ghnvn.api.useinsider.com/worker-new.html"
                    style={{display: 'none'}}/>
            <div id="criteo-tags-div" style={{display: 'none'}}/>
            <style id="ins-free-style" innerhtml dangerouslySetInnerHTML={{__html: ""}}/>
            <div classname="ins-ghost textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox"
                 style={{
                     width: '1px !important',
                     height: '1px !important',
                     position: 'absolute !important',
                     left: 'calc(-100vw) !important',
                     top: 'calc(-100vh) !important'
                 }}/>
        </>
    )
}

export default Order;