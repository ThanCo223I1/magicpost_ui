import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";

const TransandsfdftionPointAdmin = () => {
    const account = JSON.parse(localStorage.getItem("account"))

    const [consolidationPoint, setConsolidationPoint] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/account/consolidation" ,{
            headers: {
                'Authorization': 'Bearer ' + account.token,
            },
        })
            .then(r => {
                setConsolidationPoint(r.data)
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
                nameTran: '',
                address: '',
                idCon: '',
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

                    if (!values.nameTran) {
                        errors.nameTran = 'Vui lòng nhập tên điểm giao dịch';
                    }

                    if (!values.address) {
                        errors.address = 'Vui lòng nhập địa chỉ';
                    }

                    if (!values.idCon) {
                        errors.idCon = 'Vui lòng chọn điểm tập kết';
                    }

                    return errors;
                }}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    const create = {
                        consolidationPoint: {
                            id: values.idCon,
                        },
                        account: {
                            username: values.username,
                            password: values.password,
                            role:{
                                id:2
                            },
                            status:{
                                id:1
                            }
                        },
                        leader: {
                            name: values.name,
                            phoneNumber: values.phone,
                            role: {
                                id: 4
                            }
                        },
                        transactionPoint: {
                            name: values.nameTran,
                            address: values.address
                        }
                    }
                    axios.post("http://localhost:8080/account/transaction/create",create ,{
                        headers: {
                            'Authorization': 'Bearer ' + account.token,
                        },
                    })
                        .then(r=>{
                            alert("ok")
                            resetForm();
                        })
                        .catch(err=>{
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
                                Tạo tài khoản trưởng điểm giao dịch
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
                                    <p style={{marginLeft: "11px"}}>Tên quản lý</p>

                                    <Field
                                        type="text"
                                        className="form-control"
                                        id="inputEmail4"
                                        placeholder="Tên quản lý"
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
                                <div className='col-12'>
                                    <br/>
                                    <li className='color-orange-primary'>
                                        Thông tin điểm giao dịch
                                    </li>
                                    <br/>
                                </div>
                                <div className="col-6">
                                    <p style={{marginLeft: "11px"}}>Tên điểm giao dịch</p>

                                    <Field
                                        type="text"
                                        className="form-control"
                                        id="inputEmail4"
                                        placeholder="Tên điểm giao dịch"
                                        required=""
                                        name="nameTran"
                                    />
                                    <ErrorMessage name="nameTran" component="div" className="error-message"/>
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
                                <div className="col-6">
                                    <p style={{marginLeft: "11px"}}>Điểm tập kết</p>

                                    <Field
                                        name="idCon"
                                        as="select"
                                        className="form-control"
                                    >
                                        <option value="" disabled></option>
                                        {consolidationPoint.map((c) => (
                                            <option key={c.id} value={c.id}>
                                                {c.name}
                                            </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="idCon" component="div" className="error-message"/>
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

export default TransandsfdftionPointAdmin;