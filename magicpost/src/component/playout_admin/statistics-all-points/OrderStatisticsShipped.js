import React, {useEffect, useState} from 'react';
import axios from "axios";

const OrderStatisticsShipped = () => {
    const [orderStatistic, setOrderStatistic] = useState([]);
    const [dateEndOrder_Year, setDateEndOrder_Year] = useState([]);
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8080/orderStatistics/dateEndOrder_Year`)
            .then(function (res) {
                setDateEndOrder_Year(res.data)
            })
            .catch(function (err) {
                console.log(err)
            })
    }, []);

    useEffect(() => {
        if (selectedYear && selectedStatus) {
            axios.get(`http://localhost:8080/orderStatistics/admin/shipped/year/${selectedYear}/status/${selectedStatus}`)
                .then(function (res) {
                    setOrderStatistic(res.data);
                })
                .catch(function (err) {
                    console.log(err)
                })
        }
    }, [selectedYear, selectedStatus]);

    const handleChangeYear = (event) => {
        const selectedYear = event.target.value;
        setSelectedYear(selectedYear);
    };

    const handleChangeStatus = (event) => {
        const selectedStatus = event.target.value;
        setSelectedStatus(selectedStatus);
    };

    const totalOrders = orderStatistic.reduce((total, os) => total + os.totalOrders_month, 0);

    return (
        <>
            <div className="distanceBody">
                <div>
                    <select onChange={handleChangeYear}>
                        <option value="select">Chọn năm</option>
                        {dateEndOrder_Year.map((item) => (
                            <option key={item.id} value={item.year}>
                                {item.year}
                            </option>
                        ))}
                    </select>
                    {(selectedYear === "select" || !selectedYear) && (
                        <span style={{color: "orangered", marginLeft: "1%"}}>
                * Vui lòng chọn năm
            </span>
                    )}
                </div>

                <div style={{marginTop: "1%"}}>
                    <select onChange={handleChangeStatus}>
                        <option value="select">Chọn trạng thái đơn</option>
                        <option key={3} value={3}>
                            Thành công
                        </option>
                        <option key={4} value={4}>
                            Đơn Huỷ
                        </option>
                    </select>
                    {(selectedStatus === "select" || !selectedStatus) && (
                        <span style={{color: "orangered", marginLeft: "1%"}}>
                * Vui lòng chọn trạng thái
            </span>
                    )}
                </div>

                <div className="text-center">
                    <h2>Thống kê đơn
                        hàng {selectedStatus !== "select" && (selectedStatus === "3" && "thành công" || selectedStatus === "4" && "huỷ")} tất cả khu vực
                        </h2>
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
                            <th className="text-center" style={{width: "26%"}}>Tổng hoá đơn
                                {selectedStatus !== "select" && (selectedStatus === "3" && " thành công " || selectedStatus === "4" && " huỷ ")}
                                năm {selectedYear !== "select" && selectedYear}</th>
                            <td className="text-center">{totalOrders}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
};

export default OrderStatisticsShipped;