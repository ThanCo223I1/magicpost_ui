import React, {useEffect, useState} from 'react';
import axios from "axios";

const OrderStatistics_TransactionPoint_Received = () => {
    const account = JSON.parse(localStorage.getItem("account"))

    const [orderStatistic, setOrderStatistic] = useState([]);
    const [dateCreateOrder_Year, setDateCreateOrder_Year] = useState([]);
    const [selectedYear, setSelectedYear] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8080/orderStatistics/dateCreateOrder_Year`)
            .then(function (res) {
                setDateCreateOrder_Year(res.data)
            })
            .catch(function (err) {
                console.log(err)
            })
    }, []);

    const handleChangeYear = (event) => {
        const selectedYear = event.target.value;
        setSelectedYear(selectedYear);
    };

    useEffect(() => {
        if (selectedYear) {
            axios.get(`http://localhost:8080/orderStatistics/transactionPoint_Leader/received/${account.id}/year/${selectedYear}`)
                .then(function (res) {
                    setOrderStatistic(res.data);
                })
                .catch(function (err) {
                    console.log(err)
                })
        }
    }, [selectedYear]);

    const totalOrders = orderStatistic.reduce((total, os) => total + os.totalOrders_month, 0);

    return (
        <>
            <div className="distanceBody">
                <div>
                    <select onChange={handleChangeYear}>
                        <option value="select">Chọn năm</option>
                        {dateCreateOrder_Year.map((item) => (
                            <option key={item.id} value={item.year}>
                                {item.year}
                            </option>
                        ))}
                    </select>
                    {(selectedYear === "select" || !selectedYear) && (
                        <span style={{color: "orangered", marginLeft: "1%"}}>
                * Vui lòng chọn năm để xem thống kê
            </span>
                    )}
                </div>

                <div className="text-center">
                    <h2>Thống kê đơn điểm tập kết đã nhận nhưng chưa giao tới khách hàng</h2>
                </div>
                <div>
                    <table className="table m-auto" style={{width: "50%"}}>
                        <thead>
                        <tr>
                            <th className="text-center">Tháng</th>
                            <th className="text-center">Tổng hoá đơn tháng</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            orderStatistic.map((os) => (
                                <tr>
                                    <td className="text-center">{os.month}</td>
                                    <td className="text-center">{os.totalOrders_month}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
                <div style={{marginTop: "1%"}}>
                    <table className="table m-auto" style={{width: "50%"}}>
                        <tr>
                            <th className="text-center" style={{width: "26%"}}>Tổng hoá đơn chưa giao
                                năm {selectedYear !== "select" && selectedYear}</th>
                            <td className="text-center">{totalOrders}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
};

export default OrderStatistics_TransactionPoint_Received;