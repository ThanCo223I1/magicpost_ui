import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";

function Orders() {
    return (
        <>
            <Formik
                const initialValues={{
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
            }}
                validate={values => {
                    const errors = {};
                    if (!values.image) {
                        errors.image = 'Vui lòng chọn hình ảnh';
                    }
                    if (!values.nameSender) {
                        errors.nameSender = 'Vui lòng nhập tên người gửi';
                    }
                    if (!values.nameReceiver) {
                        errors.nameReceiver = 'Vui lòng nhập tên người nhận';
                    }
                    if (!values.phoneSender) {
                        errors.phoneSender = 'Vui lòng nhập số điện thoại người gửi';
                    }
                    if (!values.phoneReceiver) {
                        errors.phoneReceiver = 'Vui lòng nhập số điện thoại người nhận';
                    }
                    if (!values.addressSender) {
                        errors.addressSender = 'Vui lòng nhập địa chỉ người gửi';
                    }
                    if (!values.addressReceiver) {
                        errors.addressReceiver = 'Vui lòng nhập địa chỉ người nhận';
                    }
                    if (!values.weight) {
                        errors.weight = 'Vui lòng nhập cân nặng';
                    }
                    if (!values.width) {
                        errors.width = 'Vui lòng nhập chiều dài';
                    }
                    if (!values.height) {
                        errors.height = 'Vui lòng nhập chiều cao';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    const createOrders = {
                        order: {
                            image: values.image,
                            createOrder: new Date(),
                            nameSender: values.nameSender,
                            nameReceiver: values.nameReceiver,
                            phoneSender: values.phoneSender,
                            phoneReceiver: values.phoneReceiver,
                            addressSender: values.addressSender,
                            addressReceiver: values.addressReceiver,
                            width: values.width,
                            height: values.height,
                            weight: values.weight,
                        }
                    }
                    axios.post("http://localhost:8080", createOrders)
                        .then(r => {
                            alert("Tạo đơn thành công")
                            resetForm();
                        })
                        .catch(err => {
                            console.log(err)
                        })
                    setSubmitting(false);
                }}
            >
                <Form>

                </Form>
            </Formik>
        </>
    )
}

export default Orders;