import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import Swal from "sweetalert2";
import {format} from "date-fns";

const SearchForm = () => {
    const [order, setOrder] = useState(null);

    const initialValues = {
        code: ""
    };

    const validateForm = (values) => {
        const errors = {};
        if (!values.code.trim()) {
            errors.code = "Mã đơn hàng không được để trống!";
        } else if (isNaN(values.code)) {
            errors.code = "Mã đơn hàng không phải một số!";
        }
        return errors;
    };

    const handleSubmit = (values, {setSubmitting}) => {
        axios.get("http://localhost:8080/orders/" + values.code)
            .then(r => {
                if (r.data == "not found") {
                    Swal.fire({
                        icon: 'error',
                        title: 'Không tìm thấy đơn hàng',
                        text: 'Vui lòng kiểm tra lại',
                        confirmButtonText: 'Đồng ý'
                    })
                } else
                    setOrder(r.data)
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Có lỗi',
                    text: 'Vui lòng liên hệ admin để sử lý',
                    confirmButtonText: 'Đồng ý'
                })

            })

        setSubmitting(false);
    };
    return (
        <>
            <Formik
                initialValues={initialValues}
                validate={validateForm}
                onSubmit={handleSubmit}
            >
                {({isSubmitting}) => (
                    <Form action="/search">
                        <div className="wpo-search-inner">
                            <br/>
                            <Field
                                style={{
                                    marginLeft: "30%",
                                    border: "2px solid orange",
                                    borderRadius: "20px",
                                    padding: "10px"
                                }}
                                required
                                id="inputSearchAuto"
                                name="code"
                                maxLength={40}
                                autoComplete="off"
                                className="searchinput input-search search-input"
                                type="text"
                                size={20}
                                placeholder="Nhập mã đơn hàng bạn cần tra cứu..."
                            />
                            <button
                                style={{marginLeft: "10px"}}
                                type="submit"
                                className="btn-regis button"
                                title="Search"
                                disabled={isSubmitting}
                            >
                                Tìm kiếm
                            </button>
                        </div>
                        <ErrorMessage
                            style={{
                                marginLeft: "30%"
                            }}
                            name="code"
                            component="div"
                            className="error-message"
                        />
                    </Form>
                )}
            </Formik>
            {order && (<div className="row" style={{marginTop: "20px"}}>
                <div className="col-2"></div>
                <div className="col-8 row">
                    <div className="col-4">
                        <p> Ảnh đơn hàng : <img src={order.image} alt="Ảnh đơn hàng" width="100" height="100"></img>
                        </p>
                        <p> Mã đơn hàng : {order.id}</p>
                        <p> Trạng thái đơn hàng
                            : {order?.status.id === 3 ? "Thành công" : order?.status.id === 4 ? "Huỷ" :
                                order?.status.id === 5 ? "Đang giải quyết" : order?.status.id === 6 ? "Đang giao hàng" : ""}</p>
                        <p> Ngày gửi hàng : {format(new Date(order?.createOrder), "dd-MM-yyyy HH:mm:ss")}</p>
                        <p> Điểm gửi hàng : {order.transactionPoint.name}</p>
                    </div>
                    <div className="col-4">
                        <p> Người gửi : {order.nameSender}</p>
                        <p> SĐT người gửi : {order.phoneSender}</p>
                        <p> Địa chỉ gửi : {order.addressSender}</p>
                    </div>
                    <div className="col-4">
                        <p> Người nhận : {order.nameReceiver}</p>
                        <p> SĐT người nhận : {order.phoneReceiver}</p>
                        <p> Địa chỉ nhận : {order.addressReceiver}</p>
                    </div>
                </div>
                <div className="col-2"></div>
                <div style={{marginLeft:"17.7%", marginTop:"2%"}}>
                    <p> Các kho đã đi qua : {order.consolidationPoints.length === 0 ?
                        <span style={{color: "red"}}>Chưa đi</span> : order.consolidationPoints.map((c) => (
                            order.consolidationPoints[order.consolidationPoints.length - 1].id === c.id ?
                                <span> {c.name} </span> : <span>{c.name} -> </span>
                        ))}</p>
                    <p> Đơn của bạn đang ở tập kết : {order.consolidationPoints.length === 0 ?
                        <span style={{color: "red"}}>Chưa đi</span> :
                        <span>{order.consolidationPoints[order.consolidationPoints.length - 1].name} - {order.consolidationPoints[order.consolidationPoints.length - 1].address}</span>}</p>
                    <p> Thời gian đơn kết thúc : {order?.endOrder === null ?
                        <span className="text-danger">Chưa kết thúc</span> :
                        <span>{format(new Date(order?.endOrder), "dd-MM-yyyy HH:mm:ss")}</span>}</p>
                </div>
            </div>)}
        </>
    );
};

export default SearchForm;