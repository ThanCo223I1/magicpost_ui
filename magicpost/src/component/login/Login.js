import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";

function Login() {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"/>
            </div>
            <section className="vh-100" style={{backgroundColor: 'white'}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{borderRadius: '1rem'}}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img
                                            src="https://sso.ghn.vn/images/banner/PXB_7050%201.png"
                                            alt="login form" className="img-fluid"
                                            style={{borderRadius: '1rem 0 0 1rem'}}/>
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">
                                            <Formik
                                                initialValues={{
                                                    username: '',
                                                    password: ''
                                                }}
                                                onSubmit={(values, {setSubmitting, resetForm}) => {
                                                    const account = {
                                                        username: values.username,
                                                        password: values.password
                                                    }
                                                    axios.post("http://localhost:8080/login", account)
                                                        .then(r => {
                                                            let roleID = +r.data.role.id;
                                                            localStorage.setItem("account", JSON.stringify(r.data));
                                                            if (roleID === 1) {
                                                                navigate("/admin");
                                                            } else if (roleID === 2) {
                                                                navigate('/leader');
                                                            } else if (roleID === 3) {
                                                                navigate('/emplyee');
                                                            }else {
                                                                alert("Lỗi đăng nhập. Tài khoản của bạn không thể đăng nhập")
                                                            }
                                                        })
                                                        .catch(err => {
                                                            console.log(err)
                                                        })

                                                    setSubmitting(false);
                                                    resetForm();
                                                }}
                                            >
                                                {({isSubmitting}) => (
                                                    <Form>
                                                        <div className="d-flex align-items-center mb-3 pb-1">
                                                            <i className="fas fa-cubes fa-2x me-3"
                                                               style={{color: '#ff6219'}}/>
                                                            <span className="h1 fw-bold mb-0"
                                                                  style={{textAlign: 'center'}}>Đăng Nhập</span>
                                                        </div>
                                                        <h5 className="fw-normal mb-3 pb-3" style={{
                                                            letterSpacing: '1px',
                                                            color: 'rgb(255, 99, 57)'
                                                        }}>Chào ngày mới! Cùng chốt đơn!</h5>
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="username">Tài
                                                                khoản</label>
                                                            <Field type="text" id="username" name="username"
                                                                   className="form-control form-control-lg"
                                                                   placeholder="Nhập số điện thoại/Email"/>
                                                        </div>
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="password">Mật
                                                                khẩu</label>
                                                            <Field type="password" id="password" name="password"
                                                                   className="form-control form-control-lg"
                                                                   placeholder="Nhập mật khẩu"/>
                                                        </div>
                                                        <div className="pt-1 mb-4">
                                                            <button className="btn btn-dark btn-lg btn-block"
                                                                    type="submit" disabled={isSubmitting}
                                                                    style={{backgroundColor: '#ff6219'}}>Đăng Nhập
                                                            </button>
                                                        </div>
                                                        <a className="small text-muted" href="magicpost/src/index#!">Quên
                                                            mật khẩu</a>
                                                    </Form>
                                                )}
                                            </Formik>
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

export default Login;