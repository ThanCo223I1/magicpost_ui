import React, {useEffect, useState} from 'react';
import axios from "axios";

function GoodsIncoming() {
    const [receivedOrdersData, setReceivedOrdersData] = useState(null);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
    const account = JSON.parse(localStorage.getItem("account"));
    const leaderid = account.leaderDTO.id;
    useEffect(() => {
        fetchData();
    }, [selectedYear, selectedMonth]);

    const fetchData = async () => {
        console.log(receivedOrdersData)
        try {
            const response = await axios.get(`http://localhost:8080/orders/getAllOrder?year=${selectedYear}&month=${selectedMonth}`);
            setReceivedOrdersData(response.data);
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
            <div style={{padding:'10px'}}>
                <h2 style={{ textAlign: 'center' }}>Thống Kê Hàng gửi</h2>

                <label>Chọn Năm: </label>
                <select value={selectedYear} onChange={handleYearChange}>
                    {Array.from({ length: new Date().getFullYear() - 2000 }, (_, index) => (
                        <option key={index} value={new Date().getFullYear() - index}>
                            {new Date().getFullYear() - index}
                        </option>
                    ))}
                </select>

                <label>Chọn Tháng: </label>
                <select value={selectedMonth} onChange={handleMonthChange}>
                    {Array.from({ length: 12 }, (_, index) => (
                        <option key={index} value={index + 1}>
                            {index + 1}
                        </option>
                    ))}
                </select>
                <table border="1" style={{borderRadius:'2px'}}>
                    <thead border='1'>
                    <tr>
                        <th style={{ textAlign: 'center' }}>ID</th>
                        <th style={{ textAlign: 'center' }}>Ảnh</th>
                        <th style={{ textAlign: 'center' }}>Ngày Tạo</th>
                        <th style={{ textAlign: 'center' }}>Người Gửi</th>
                        <th style={{ textAlign: 'center' }}>Người Nhận</th>
                        <th style={{ textAlign: 'center' }}>Điện Thoại Người Gửi</th>
                        <th style={{ textAlign: 'center' }}>Điện Thoại Người Nhận</th>
                        <th style={{ textAlign: 'center' }}>Địa Chỉ Người Gửi</th>
                        <th style={{ textAlign: 'center' }}>Địa Chỉ Người Nhận</th>
                        <th style={{ textAlign: 'center' }}>Chiều Rộng</th>
                        <th style={{ textAlign: 'center' }}>Chiều Cao</th>
                        <th style={{ textAlign: 'center' }}>Cân Nặng</th>
                        <th style={{ textAlign: 'center' }}>Trạng Thái</th>
                    </tr>
                    </thead>
                    <tbody>
                    {receivedOrdersData && receivedOrdersData.map((data) => (
                        data.transactionPoint.leader.id == leaderid && (
                        <tr>
                            <td style={{ textAlign: 'center' }}>{data.id}</td>
                            <td style={{ textAlign: 'center' }}><img src={data.image} alt="Order Image" style={{ width: '100px' }} /></td>
                            <td style={{ textAlign: 'center' }}>{data.createOrder}</td>
                            <td style={{ textAlign: 'center' }}>{data.nameSender}</td>
                            <td style={{ textAlign: 'center' }}>{data.nameReceiver}</td>
                            <td style={{ textAlign: 'center' }}>{data.phoneSender}</td>
                            <td style={{ textAlign: 'center' }}>{data.phoneReceiver}</td>
                            <td style={{ textAlign: 'center' }}>{data.addressSender}</td>
                            <td style={{ textAlign: 'center' }}>{data.addressReceiver}</td>
                            <td style={{ textAlign: 'center' }}>{data.width}</td>
                            <td style={{ textAlign: 'center' }}>{data.height}</td>
                            <td style={{ textAlign: 'center' }}>{data.weight}</td>
                            <td style={{ textAlign: 'center' }}>{data.status.nameStatus}</td>
                        </tr>
                            )
                    ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default GoodsIncoming;