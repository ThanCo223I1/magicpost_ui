import React, {useEffect, useState} from 'react';
import axios from "axios";

function GoodsOutgoing() {
    const [receivedOrdersData, setReceivedOrdersData] = useState(null);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

    useEffect(() => {
        fetchData();
    }, [selectedYear, selectedMonth]);

    const fetchData = async () => {

        try {
            const response = await axios.get(`http://localhost:8080/orders/getReceivedOrdersByConsolidationPoint?year=${selectedYear}&month=${selectedMonth}`);
            console.log(response)
            setReceivedOrdersData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handleYearChange = (e) => {
        const year = e.target.value;
        setSelectedYear(year);
    };

    const handleMonthChange = (e) => {
        const month = e.target.value;
        setSelectedMonth(month);
    };
    return (
        <>
            <div>
                <h2 style={{textAlign: 'center'}}>Thống Kê Hàng Gửi Đến Điểm Tập Kết</h2>

                <label>Chọn Năm: </label>
                <select value={selectedYear} onChange={handleYearChange}>
                    {Array.from({length: new Date().getFullYear() - 2000}, (_, index) => new Date().getFullYear() - index).map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>

                <label>Chọn Tháng: </label>
                <select value={selectedMonth} onChange={handleMonthChange}>
                    {Array.from({length: 12}, (_, index) => index + 1).map((month) => (
                        <option key={month} value={month}>
                            {month}
                        </option>
                    ))}
                </select>
                <table border="1">
                    <thead>
                    <tr>
                        <th>Stt</th>
                        <th>Tháng</th>
                        <th>Năm</th>
                        <th>Đơn hàng </th>
                    </tr>
                    </thead>
                    <tbody>
                    {receivedOrdersData &&
                        receivedOrdersData.map((data, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{data[0]}</td>
                                <td>{data[1]}</td>
                                <td>{data[2]}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default GoodsOutgoing;