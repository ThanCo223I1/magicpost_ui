import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";

const CreateEmployeeCon = () => {
    const account = JSON.parse(localStorage.getItem("account"))
    const leader = account.leaderDTO;
    const [point, setPoint] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8080/account/consolidation/leader/" + leader.id ,{
            headers: {
                'Authorization': 'Bearer ' + account.token,
            },
        })
            .then(r => {
                setPoint(r.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            {/* form */}
            <Formik
                const initialValues={{
                username: '',
                password: '',
                name: '',
                phone: '',
                address: '',
            }}
                validate={values => {
                    const errors = {};

                    if (!values.username) {
                        errors.username = 'Vui lòng nhập tài khoản';
                    } else if (values.username.length < 6) {
                        errors.username = 'Tài khoản ít nhất 6 ký tự'
                    }

                    if (!values.password) {
                        errors.password = 'Vui lòng nhập mật khẩu';
                    } else if (values.password.length < 6) {
                        errors.password = 'Mật khẩu ít nhất 6 ký tự'
                    }

                    if (!values.name) {
                        errors.name = 'Vui lòng nhập tên quản lý';
                    }

                    if (!values.phone) {
                        errors.phone = 'Vui lòng nhập số điện thoại';
                    }

                    if (!values.address) {
                        errors.address = 'Vui lòng nhập địa chỉ';
                    }

                    return errors;
                }}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    const create = {
                        account: {
                            username: values.username,
                            password: values.password,
                            role: {
                                id: 3
                            },
                            status: {
                                id: 1
                            }
                        },
                        employee: {
                            name: values.name,
                            phoneNumber: values.phone,
                            address: values.address,
                            role: {
                                id: 5
                            }
                        },
                        id: point.id
                    }
                    console.log(create)
                    axios.post("http://localhost:8080/account/employee/createCon", create, {
                        headers: {
                            'Authorization': 'Bearer ' + account.token,
                        },
                    }).then(r => {
                        alert("ok")
                        resetForm();
                    }).catch(err => {
                        console.log(err)
                    })


                    setSubmitting(false);
                }}
            >
                <Form>
                    <div className="row" style={{marginTop: "70px"}}>

                        <div className="col-2"></div>
                        <div className="col-8">
                            <li className='color-orange-primary'>
                                Tạo tài khoản nhân viên điểm tập kết
                            </li>
                            <br/>
                            <div className="row g-3">

                                <div className="col-6">
                                    <p style={{marginLeft: "11px"}}> Tài khoản</p>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        placeholder="Tài khoản"
                                        required=""
                                        name="username"
                                    />
                                    <ErrorMessage name="username" component="div" className="error-message"/>
                                </div>
                                <div className="col-6">
                                    <p style={{marginLeft: "11px"}}> Mật khẩu</p>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        placeholder="Mật khẩu"
                                        required=""
                                        name="password"
                                    />
                                    <ErrorMessage name="password" component="div" className="error-message"/>
                                </div>


                                <div className="col-6">
                                    <p style={{marginLeft: "11px"}}>Tên nhân viên</p>

                                    <Field
                                        type="text"
                                        className="form-control"
                                        id="inputEmail4"
                                        placeholder="Tên nhân viên"
                                        required=""
                                        name="name"
                                    />
                                    <ErrorMessage name="name" component="div" className="error-message"/>
                                </div>
                                <div className="col-6">
                                    <p style={{marginLeft: "11px"}}>Số điện thoại</p>

                                    <Field
                                        type="number"
                                        className="form-control"
                                        id="inputEmail4"
                                        placeholder="Số điện thoại"
                                        required=""
                                        name="phone"
                                    />
                                    <ErrorMessage name="phone" component="div" className="error-message"/>
                                </div>
                                <div className="col-6">
                                    <p style={{marginLeft: "11px"}}>Địa chỉ</p>

                                    <Field
                                        type="text"
                                        className="form-control"
                                        id="inputEmail4"
                                        placeholder="Địa chỉ"
                                        required=""
                                        name="address"
                                    />
                                    <ErrorMessage name="address" component="div" className="error-message"/>
                                </div>
                                <ErrorMessage name="status" component="div"/>
                                <div className="col-12 d-grid">
                                    <br/>
                                    <button type="submit" className="btn btn-primary">
                                        Đồng Ý
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ErrorMessage name="general" component="div" className="error-message"/>
                </Form>
            </Formik>

        </>
    );
};

export default CreateEmployeeCon;