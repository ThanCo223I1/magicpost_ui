import {useState} from "react";
import '../../static/css/main.5a7f7282.chunk.css'
import '../../static/css/19.d911c1cb.chunk.css'
import '../../resources/raw/main.3e229f12.chunk.css'
import '../../w3css/4/w3.css'
import {Link} from "react-router-dom";
import axios from "axios";
import {v4} from "uuid";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "./firebase";
import Swal from "sweetalert2";

function Orders() {
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
        status: {
            id: 5
        }
    };
    const [orders, setOrders] = useState(initialData);
    const [successMessage, setSuccessMessage] = useState('');
    const accountLogin = JSON.parse(localStorage.getItem("account"));
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setOrders({...orders, [name]: value});
        setOrders({...orders, [name]: value});
    };
    const submit = () => {
        axios.post('http://localhost:8080/orders/createOrder/' + accountLogin.employeeDTO.id, orders)
            .then((response) => {
                Swal.fire({
                    icon: "success",
                    title: "Tạo đơn hàng thành công"
                });
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
                        setOrders(updatedOrders);
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

            {/*Thanh chủ - đơn nháp*/}
            <div className="create-form-left mt-15 step-rel" style={{marginLeft: '40px', marginTop: '10px'}}>
                <div className="step-static row" style={{marginLeft:'100px'}}>
                    <div className="row col-10" style={{width: '100%', marginLeft: '0px'}}>
                        <div className="col-md-4 offset-md-2">
                            <div className="deliver-info left">
                                <div className="info-titile"> | Bên Gửi</div>
                                <label className>Họ tên</label>
                                <div className="autocompleted-component">
                                <input
                                    name="nameSender"
                                    placeholder="Nhập họ tên"
                                    type="text"
                                    autoComplete="off"
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
                                </div>
                                <label className>Địa chỉ</label>
                                <div className="autocompleted-component">
                                    <input name="addressSender"
                                           className="form-control"
                                           placeholder="Nhập địa chỉ"
                                           type="text"
                                           autoComplete="off"
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
                                           autoComplete="off"
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
                    <div className="col-10 col-md-8 offset-md-2"
                         style={{marginLeft: '60px'}}>
                        <hr style={{width: '710px'}}/>
                    </div>
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
                                    autoComplete="off"
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
                                           autoComplete="off"
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
                    <div className="col-10 col-md-8 offset-md-2">
                        <hr style={{width: '710px'}}/>
                    </div>

                    <div className="width_100_percent m-l-0 row">
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
                                        height: '100px',
                                        width: '100px',
                                        position: 'relative',
                                        overflow: 'hidden',
                                    }}>
                                        <label htmlFor="fileInput" style={{padding: '17px', color: 'white'}}>
                                            Up ảnh
                                        </label>
                                        {tempImage && <img src={tempImage} alt="Selected Image" style={{
                                            borderRadius: '100px',
                                            height: '100px',
                                            width: '100px',
                                            position: 'absolute',
                                            top: 0,
                                            left: -1,
                                            objectFit: 'cover',
                                            color: 'white'
                                        }}/>}
                                        <input
                                            htmlFor="fileInput"
                                            type="file"
                                            id="fileInput"
                                            style={{display: 'none'}}
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
                                               autoComplete="off"
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
                            </div>

                            <div className="block-rate" style={{marginTop:'10px',marginLeft:'200px'}}>
                                <button type='submit'
                                        className="btn-primary-page rate-submit"
                                        onClick={submit}
                                        style={{color: 'rgb(228, 19, 44)',width:'100%'}}>Tạo đơn
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Thanh ben phai*/}
            {/*<div className="create-form-right">*/}
            {/*    <div className="c-header"/>*/}
            {/*    <div className="position-relative">*/}
            {/*        <input name="Promotion" placeholder="Mã khuyến mãi"*/}
            {/*               type="text"*/}
            {/*               className="input-voucher form-control form-control"/>*/}
            {/*        <button*/}
            {/*            className="btn btn-secondary-page btn-apply-voucher">Áp*/}
            {/*            dụng*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*    <p className="m-t-4" style={{*/}
            {/*        color: 'rgb(228, 19, 44)',*/}
            {/*        fontSize: '12px',*/}
            {/*        marginTop: '0px',*/}
            {/*        marginBottom: '0px',*/}
            {/*        fontWeight: 500,*/}
            {/*        lineHeight: '15px'*/}
            {/*    }}/>*/}

            {/*    <div className="c-footer c-footer-bottom">*/}
            {/*        <p style={{*/}
            {/*            fontSize: '15px',*/}
            {/*            color: 'rgb(75, 75, 75)',*/}
            {/*            marginBottom: '6px'*/}
            {/*        }}>Tuỳ chọn thanh toán: </p>*/}
            {/*        <div role="combobox" id="rw_3_input" aria-owns="rw_3_listbox"*/}
            {/*             aria-expanded="false" aria-haspopup="true" aria-busy="true"*/}
            {/*             aria-live="polite" aria-disabled="false"*/}
            {/*             aria-readonly="false"*/}
            {/*             className="rw-dropdown-list rw-widget">*/}
            {/*            <div*/}
            {/*                className="rw-widget-input rw-widget-picker rw-widget-container">*/}
            {/*                <div className="rw-input rw-dropdown-list-input">*/}
            {/*                    <select>*/}
            {/*                        <option value={1}>Bên Gửi Trả Phí</option>*/}
            {/*                        <option value={2}>Bên Nhận Trả Phí</option>*/}
            {/*                    </select>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <p className style={{*/}
            {/*            color: 'rgb(228, 19, 44)',*/}
            {/*            fontSize: '12px',*/}
            {/*            marginTop: '0px',*/}
            {/*            marginBottom: '0px',*/}
            {/*            fontWeight: 500,*/}
            {/*            lineHeight: '15px'*/}
            {/*        }}/>*/}
            {/*        <div className="info-cost">*/}
            {/*            <p className="color-bule-primary" style={{*/}
            {/*                fontSize: '12px',*/}
            {/*                marginBottom: '4px',*/}
            {/*                marginTop: '8px',*/}
            {/*                lineHeight: '13px'*/}
            {/*            }}>Tổng phí</p>*/}
            {/*            <p*/}
            {/*                className="color-bule-primary" style={{*/}
            {/*                fontSize: '22px',*/}
            {/*                marginBottom: '3px',*/}
            {/*                marginTop: '12px',*/}
            {/*                fontWeight: 600,*/}
            {/*                lineHeight: '13px'*/}
            {/*            }}>0 vnđ</p>*/}
            {/*            <span className="color-orange-primary"*/}
            {/*                  style={{fontSize: '12px'}}> Chưa tính tiền thu hộ</span>*/}
            {/*        </div>*/}
            {/*        <div style={{*/}
            {/*            margin: '12px 0px',*/}
            {/*            position: 'relative',*/}
            {/*            height: '40px'*/}
            {/*        }}>*/}
            {/*            <div className="block-rate ">*/}
            {/*                <button type='submit'*/}
            {/*                        className="btn-primary-page rate-submit"*/}
            {/*                        onClick={submit}*/}
            {/*                        style={{color: 'rgb(228, 19, 44)'}}>Tạo đơn*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

export default Orders;