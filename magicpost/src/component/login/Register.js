import './register.css'
import {Link} from "react-router-dom";

function Register() {
    return (
        <>
            <div>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"/>
            </div>
            <section className="h-100 bg-dark">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col" style={{marginTop: '40px', height: '713px'}}>
                            <div className="card card-registration my-4">
                                <div className="row g-0">
                                    <div className="col-xl-6 d-none d-xl-block">
                                        <img src="https://sso.ghn.vn/images/banner/PXB_7050%201.png" alt="Sample photo"
                                             className="img-fluid" style={{
                                            borderTopLeftRadius: '.25rem',
                                            borderBottomLeftRadius: '.25rem',
                                            height: '700px'
                                        }}/>
                                    </div>

                                    <div className="col-xl-6" style={{marginTop:'70px'}}>
                                        <div className="card-body p-md-5 text-black"
                                             style={{marginRight: '30px', fontSize: '15px'}}>
                                            <h1 className="mb-5 text-uppercase" style={{textAlign: 'center'}}>Tạo Tài
                                                Khoản Giao Hàng
                                                <h4 style={{color: '#ff6219', textAlign: 'center'}}>Magic luôn đồng hành
                                                    cùng bạn!</h4></h1>
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="form3Example1m">Tên Tài
                                                            Khoản</label>
                                                        <input type="text" id="form3Example1m"
                                                               className="form-control form-control-lg"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="form3Example1n">Mật
                                                            khẩu</label>
                                                        <input type="text" id="form3Example1n"
                                                               className="form-control form-control-lg"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="form3Example1m1">Nhập Lại
                                                            Mật Khẩu</label>
                                                        <input type="text" id="form3Example1m1"
                                                               className="form-control form-control-lg"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="form3Example1n1">Số Điện
                                                            Thoại</label>
                                                        <input type="text" id="form3Example1n1"
                                                               className="form-control form-control-lg"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example8">Email</label>
                                                <input type="text" id="form3Example8"
                                                       className="form-control form-control-lg"/>
                                            </div>
                                            <div
                                                className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                                                <label className="mb-0 me-4"> Giới Tính: </label>
                                                <div className="form-check form-check-inline mb-0 me-4">
                                                    <input className="form-check-input m-lg-2" type="radio"
                                                           name="inlineRadioOptions" id="femaleGender"
                                                           defaultValue="option1"/>
                                                    <label className="form-check-label"
                                                           htmlFor="femaleGender">Nam</label>
                                                </div>
                                                <div className="form-check form-check-inline mb-0 me-4">
                                                    <input className="form-check-input" type="radio"
                                                           name="inlineRadioOptions" id="maleGender"
                                                           defaultValue="option2"/>
                                                    <label className="form-check-label" htmlFor="maleGender">Nữ</label>
                                                </div>
                                                <div className="form-check form-check-inline mb-0">
                                                    <input className="form-check-input" type="radio"
                                                           name="inlineRadioOptions" id="otherGender"
                                                           defaultValue="option3"/>
                                                    <label className="form-check-label"
                                                           htmlFor="otherGender">Khác</label>
                                                </div>
                                            </div>
                                            <div className="row"
                                                 style={{fontSize: '13px', textAlign: 'center', marginRight: '30px'}}>
                                                <div className="col-md-6 mb-4">
                                                    <select className="select" style={{height: '30px'}}>
                                                        <option value={1}>Mục Đích Sử Dụng</option>
                                                        <option value={2}>Cá Nhân</option>
                                                        <option value={3}>Cửa Hàng/Doanh Nghiệp</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <select className="select" style={{height: '30px'}}>
                                                        <option value={1}>Quy Mô Vận Chuyển</option>
                                                        <option value={2}>Không Có Nhu Cầu Thường Xuyên</option>
                                                        <option value={3}>Dưới 150 ĐH Trong Tháng</option>
                                                        <option value={4}>Trên 500 ĐH Trong Tháng</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end pt-2 col-9">
                                                <button type="button" className="btn btn-warning btn-lg ms-6" style={{
                                                    backgroundColor: '#ff6219',
                                                    fontSize: '20px',
                                                    textAlign: 'center',
                                                    width: '200px',
                                                    color:'white'
                                                }}>Đăng Ký
                                                </button>
                                            </div>
                                            <div style={{width: '500px', marginLeft: '80px'}}>
                                                <label style={{marginTop: '10px', textAlign: 'center'}}>Bạn đã có tài
                                                    khoản?
                                                    <Link to={'/login'}>Đăng Nhập Ngay</Link></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register;