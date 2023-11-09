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
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAA/FBMVEUAAAAtc7v/+houdsA8OwZtagsveMMtc7xsaAAjWZAkXpceTn4WOV0rbrPTzRUoZ6YaQmsoZ6chVYkAMV08NwAMHzITMU8UNFRsZgCalg8UQnEAAEN9egzz7RgGEBoKGywIFSIOJTwdSncAHD4AJ06emQCtqi3q5Rnj3hrZ0xIOJDoECQ8QK0UGEx0aRG4FDBMAGS8AABUWUo8UUIsAAA4AHEgALV4AQXsRV5w1NAZQTgiCgA3//xqIhABiYAq+uimdmjEeHQMuKAAAETdhYDp6eTQaHEAQE0FDQj0ECUJqaTiOizE+Pj1LSjx+fDWYlS82Nj7BviVcWjmxrikZNU1qAAAEfUlEQVR4nO3YjV/TRhgH8KQ3L81b0wbbAHptqa7lpcKGA5lvoENA2IRt////sue5uzQpomx+lNjs91XhuCfF3PN5cnkSxwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqF47SZJ21SexKHzhiaDqk1gUvnBdJOtfSqWUftUnsTB2+v2qT+EO9TcHs/FwbXg9PFgbXJ8arnW3bv5dw82PPl8jO2FM15Eb9Gjc9Xkc+90iHCUuTYny/a4X8JTsjEy+QrobpiYy5Yhwg+ndnf6dylzan4mgfWdb2LEY2egwkZ6e8mRnx84F0hzliniNfy7uhr4UfLQnZD03/J5dOK+9U4xlqKNP4lI4Np8oHeWJoVO6Gyalg5OK1vNN2UWLYv1mLHTR6OULYeaETmA6N8VJypMVziJUXrParJGRWXLqz0rIT319YfLye5IGcUajtuvRHxoM9Qd4A8tiHnVnyeoLPmQ7P9jb+ex/vIg6VEux3s51xbiJ3rMTWqygdsC36XDM5Sp6Jrsy01MDz9MFZJPV5iMiHcmE54naPQHtSFsmRBfKph4OeN2ZnhJ5u9kxmQnoEuvYKd+EbbICynse6bg1bOrXKFnSXi+8ZruH6yyNnC05qxVdeSI1kdBObQudHpssSpBI81+85Wx9og9bXBlfVHYciqIy6DqklAw5WdMizNu5KErRiUx6bbLiUqSWok8kK9BVwsmSm0WYU1Iutmw+WV4RqaXrycq7o0Bfc31pNnUtNSkpV1b7o8qqYb9Q+Hyy5jLDO/u1nSmcS1andDeYRlGU3dkq7sgtyeLGwk49cc0NjiK632J8/yySlZYjQtTvrc0tyeLSEdt6JrHJ4k/Y0tKdWZGsjDtYfxYR/7fK6pr+Puq1zQMht04uP8skUS8yT4JFskyjlrR7EX2aWt1qVvQN3ZKs4kGQn2RMStrSPkGaqVKy+OaoI/xd9m78DxfZbckqXiQI2uDNi5g0f2kjgvlkUR69/HFc1rDjiiTtxHYcSiFnTSmN03yWNyB3OqIpk8s21w79i3rmbhjI/P3VNDYREdfx7d9PS8SOH9HwsR0/pvEjM/x5dfdgd2k+vPT0YHf1l7yD39vf39+zkb1nuwcHz/acOrrfJPeM5s1jHi03r4WXl5vNh/rZMHF+/ZGtrKzYL/RNzzyvenFf24uXjS81eaUfcFLndeNwPG41lBofrSs1OTqa8MT48EXVi/va3vzw393X3jq/cetF3dSrxvG78Umrcf5ufDpRZ5dHp+rw6H0Nk/UlslUSPu3wrY+7qVbj+O+Xx+PJ+0njfKzOLiZcXw9U42HVJ/o9SGX+np3ajqnzWqnz38/+mGycKPXhUqmLkwul1h8ohWQ5+ftn3Xu51HlSHVFZKaVOW42rPyd/UVVNkKycrSwh47DvvNlQii5DypU6vLr60FCX+us6LkMjCtmozW8Fn7c2WrmN0l/+8V7VJwoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA359/APOPUGmhGScqAAAAAElFTkSuQmCC"
                                            alt="login form" className="img-fluid"
                                            style={{borderRadius: '1rem 0 0 1rem', maxWidth:"110%", height:"100%"}}/>
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
                                                                navigate('/employee');
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
                                                        }}>Chào mừng đến với Magic Post</h5>
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