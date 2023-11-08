import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import Swal from "sweetalert2";
import {map} from "react-bootstrap/ElementChildren";

const SearchForm = () => {
    const [order, setOrder] = useState(null);

    const initialValues = {
        code: ""
    };

    const validateForm = (values) => {
        const errors = {};
        if (!values.code.trim()) {
            errors.code = "Mã đơn hàng không được để trống!";
        }else if(isNaN(values.code)){
            errors.code = "Mã đơn hàng không phải một số!";
        }
        return errors;
    };

    const handleSubmit = (values, {setSubmitting}) => {
        axios.get("http://localhost:8080/orders/" + values.code)
            .then(r => {
                console.log(r.data)
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
                    confirmButtonText:'Đồng ý'
                })

            })

        setSubmitting(false);
    };
    return (
        <>{console.log(order)}
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
                    <div className="col-6">
                        <p> Mã đơn hàng : {order.id}</p>
                        <p> Trạng thái đơn hàng : {order.status.nameStatus}</p>
                        <p> Ngày gửi hàng : {order.createOrder}</p>
                        <p> Điểm gửi hàng : {order.transactionPoint.address}</p>
                        <p> Người gửi : {order.nameSender}</p>
                        <p> SĐT người gửi : {order.phoneSender}</p>
                        <p> Người nhận : {order.nameReceiver}</p>
                        <p> SĐT người nhận : {order.phoneReceiver}</p>
                    </div>
                    <div className="col-6">
                        {order.status.id !== 3&&(<>
                            <p> Các kho đã đi qua : {order.consolidationPoints.map((c)=>(
                                <span>  {order.consolidationPoints[order.consolidationPoints.length-1].address==c.address?<span> {c.address} </span> : <span>{c.address} ;</span> }  </span>
                            ))}</p>
                        <p> Đơn của bạn đang ở kho : {order.consolidationPoints[order.consolidationPoints.length-1].address} </p>
                        </>)}
                        <p> Ảnh đơn hàng : <img src={order.image} alt="Ảnh đơn hàng"></img></p>
                    </div>


                </div>
                <div className="col-2"></div>
            </div>)}
        </>
    );
};

export default SearchForm;