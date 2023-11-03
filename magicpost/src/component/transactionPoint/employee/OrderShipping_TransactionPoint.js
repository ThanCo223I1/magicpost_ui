import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import ReactPaginate from "react-paginate";
import {format} from "date-fns";
import Swal from "sweetalert2";

function OrderShipping_TransactionPoint() {
    const [orders, setOrders] = useState([]);
    const [orderDetail, setOrderDetail] = useState({});
    const {id} = useParams();

    // da sua
    const [pageNumber, setPageNumber] = useState(0); // Trang hiện tại
    const ordersPerPage = 10; // Số vendor hiển thị trên mỗi trang
    const pagesVisited = pageNumber * ordersPerPage;
    // end

    useEffect(() => {
        axios.get(`http://localhost:8080/orders/transactionPoint/account/` + id)
            .then(function (res) {
                setOrders(res.data)
            })
            .catch(function (err) {
                console.log(err)
            })
    }, []);

    const displayOrders = orders
        .slice(pagesVisited, pagesVisited + ordersPerPage)
        .map((order) => {
            const statusColor = order.order.status.nameStatus === "Shipping" ? "backgroundColorStatusShipping" : order.order.status.nameStatus === "Complete" ? "backgroundColorStatusComplete" : order.order.status.nameStatus === "Cancel" ? "backgroundColorStatusCanceled" : "";
            return (
                (order.order.status.id === 6 || order.order.status.id === 3 || order.order.status.id === 4) &&
                <tr key={order.order.id}>
                    <td>{order.order.id}</td>
                    <td>{order.order.createOrder == null ? <p className="text-danger">Not update</p> :
                        <p>{format(new Date(order.order.createOrder), "dd-MM-yyyy")}</p>}</td>
                    <td>{order.order.nameSender == null ? <p className="text-danger">Not update</p> :
                        <p>{order.order.nameSender}</p>}</td>
                    <td>{order.order.phoneSender == null ? <p className="text-danger">Not update</p> :
                        <p>{order.order.phoneSender}</p>}</td>
                    <td>{order.order.addressSender == null ? <p className="text-danger">Not update</p> :
                        <p>{order.order.addressSender.slice(0, 13)}{order.order.addressSender.length > 13 && "..."}</p>}</td>
                    <td>{order.order.nameReceiver == null ? <p className="text-danger">Not update</p> :
                        <p>{order.order.nameReceiver}</p>}</td>
                    <td>{order.order.phoneReceiver == null ? <p className="text-danger">Not update</p> :
                        <p>{order.order.phoneReceiver}</p>}</td>
                    <td>{order.order.addressReceiver == null ? <p className="text-danger">Not update</p> :
                        <p>{order.order.addressReceiver.slice(0, 13)}{order.order.addressReceiver.length > 13 && "..."}</p>}</td>
                    <td>{order.typeList && order.typeList.map((item) => (
                        <tr key={item.id}>
                            <td><p>{item.name}</p></td>
                        </tr>
                    ))
                    }</td>
                    <td>{order.order.weight == null ? <p className="text-danger">Not update</p> :
                        <p>{order.order.weight}</p>}</td>
                    <td>{order.order.status == null ? <p className="text-danger">Not update</p> :
                        <p className={statusColor}>{order.order.status.nameStatus}</p>}</td>
                    <td>
                        {order.order.status.id === 6 && (
                            <>
                                <button
                                    className="btn btn-success buttonShadow"
                                    onClick={() => handleClick(order.order?.id, "Complete")}
                                >
                                    Complete
                                </button>
                                <button style={{marginTop: "4px"}}
                                        className="btn btn-danger buttonShadow"
                                        onClick={() => handleClick(order.order?.id, "Cancel")}
                                >
                                    Cancel
                                </button>
                            </>
                        )}
                    </td>
                </tr>

            );
        });
    const pageCount = Math.ceil(orders.length / ordersPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    };
    // end

    const handleClick = (orderId, action) => {
        const updatedOrders = orders.map((order) => {
            if (order.order.id === orderId) {
                let newStatusId = order.order.status.id;
                let newStatusName = order.order.status.nameStatus;
                if (action === "Complete") {
                    newStatusId = 3;
                    newStatusName = "Complete";
                } else if (action === "Cancel") {
                    newStatusId = 4;
                    newStatusName = "Cancel";
                }

                return {
                    ...order,
                    order: {
                        ...order.order,
                        status: {
                            ...order.order.status,
                            id: newStatusId,
                            nameStatus: newStatusName
                        }
                    }
                };
            }
            return order;
        });
        setOrders(updatedOrders);
        updateStatusOrder(orderId, action);
    };

    const updateStatusOrder = (orderId, action) => {
        const updateStatus_Order = orders.find((order) => order.order.id === orderId).order;
        let newStatusId = updateStatus_Order.status.id;

        if (action === "Complete") {
            newStatusId = 3;
        } else if (action === "Cancel") {
            newStatusId = 4;
        }
        updateStatus_Order.status.id = newStatusId;

        axios.post(`http://localhost:8080/orders/save`, updateStatus_Order)
            .then((res) => {
                if (action === "Complete") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Order have complete!',
                        showConfirmButton: true, // Ẩn nút "OK"
                    });
                    console.log("success!!")
                }
                if (action === "Cancel") {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Order have cancel!',
                        showConfirmButton: true, // Ẩn nút "OK"
                    });
                    console.log("Cancel!!")
                }
            })
            .catch((err) => {
                console.log("Error updating vendor status:", err);
            });
    };

    return (
        <>
            <div className="container distanceBody">
                <h4 className='text-center pb-20 mt-20 headerInBody'>Đơn hàng đi (Shipping)</h4>

                <table className="table">
                    <thead>
                    <tr>
                        <th className={"col-1"}>Mã đơn hàng</th>
                        <th className={"col-1"}>Ngày tạo</th>
                        <th className={"col-1"}>Người gửi</th>
                        <th className={"col-1"}>SĐT người gửi</th>
                        <th className={"col-1"}>Địa chỉ người gửi</th>
                        <th className={"col-1"}>Người nhận</th>
                        <th className={"col-1"}>SĐT người nhận</th>
                        <th className={"col-1"}>Địa chỉ người nhận</th>
                        <th className={"col-1"}>Loại hàng</th>
                        <th className={"col-1"}>Cân nặng</th>
                        <th className={"col-1"}>Trạng thái</th>
                        <th className={"col-1"}>Hoạt động</th>
                    </tr>
                    </thead>
                    <tbody>
                    {displayOrders}
                    </tbody>
                </table>
                {/* Phân trang */}
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                    pageLinkClassName={"pagination__link--number"}
                    pageClassName={"pagination__item"}
                />
            </div>
        </>
    )

}

export default OrderShipping_TransactionPoint;