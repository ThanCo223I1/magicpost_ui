import React, {useEffect, useState} from 'react';
import axios from "axios";

function GoodsOutgoing() {
    const [receivedOrdersData, setReceivedOrdersData] = useState(null);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
    const account = JSON.parse(localStorage.getItem("account"));
    const leaderid = account.leaderDTO.id;
    useEffect(() => {
        fetchData();
    }, [selectedYear, selectedMonth]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/orders/getReceivedOrdersByConsolidationPoint?year=${selectedYear}&month=${selectedMonth}&id=${leaderid}`);
           if (response.data != "abc"){
               setReceivedOrdersData(response.data);
           }
            console.log(response.data)
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
            <div className="distanceBody">
                <h2 style={{textAlign: 'center'}}>Thống kê đơn hàng chuyển đến điểm tập kết</h2>

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
                <table className="table m-auto" style={{width: "50%"}}>
                    <colgroup>
                        <col style={{ width: "25%" }} />
                        <col style={{ width: "25%" }} />
                        <col style={{ width: "25%" }} />
                        <col style={{ width: "25%" }} />
                    </colgroup>
                    <thead>
                    <tr>
                        <th className="text-center">Stt</th>
                        <th className="text-center">Tháng</th>
                        <th className="text-center">Năm</th>
                        <th className="text-center">Đơn hàng(SL)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {receivedOrdersData &&
                        receivedOrdersData.map((data, index) => (
                            <tr key={index}>
                                <td className="text-center">{index + 1}</td>
                                <td className="text-center">{data[0]}</td>
                                <td className="text-center">{data[1]}</td>
                                <td className="text-center">{data[2]}</td>
                            </tr>
                        ))
                    }
                    {receivedOrdersData == null&&(
                        <p></p>
                    )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default GoodsOutgoing;