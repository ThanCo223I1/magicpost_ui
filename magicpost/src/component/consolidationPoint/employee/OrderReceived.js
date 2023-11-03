import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import ReactPaginate from "react-paginate";
import {format} from "date-fns";
import Swal from "sweetalert2";

function OrderReceived() {
    const [orders, setOrders] = useState([]);
    const [orderDetail, setOrderDetail] = useState({});
    const [consolidationPointNotInAccount, setConsolidationPointNotInAccount] = useState([]);
    let {id} = useParams();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
    }
    const closeModal = () => {
        setSelectedConsolidationPoint(null);
        setModalIsOpen(false);
    };
    // da sua
    const [pageNumber, setPageNumber] = useState(0); // Trang hiện tại
    const ordersPerPage = 10; // Số vendor hiển thị trên mỗi trang
    const pagesVisited = pageNumber * ordersPerPage;
    // end

    useEffect(() => {
        axios.get(`http://localhost:8080/orders/consolidationPoint/account/` + id)
            .then(function (res) {
                console.log(res.data)
                setOrders(res.data)
            })
            .catch(function (err) {
                console.log(err)
            })
    }, [id]);

    useEffect(() => {

        axios.get(`http://localhost:8080/consolidationPoint/account/` + id)
            .then(function (res) {
                console.log(res.data)
                setConsolidationPointNotInAccount(res.data)
            })
            .catch(function (err) {
                console.log(err)
            })
    }, [id]);

    const displayOrders = orders
        .slice(pagesVisited, pagesVisited + ordersPerPage)
        .map((order) => {
            const statusColor = order.order.status.nameStatus === "Shipping" ? "backgroundColorStatusShipping" : order.order.status.nameStatus === "Pending" ? "backgroundColorStatusPending" : "";
            return (
                order.order.status.id === 5 &&
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
                        <button
                            className="btn btn-success buttonShadow"
                            onClick={() => handleClick(order.order?.id, "Shipping")}
                        >
                            Shipping
                        </button>
                        <button style={{marginTop: "4px"}}
                                className="btn btn-info buttonShadow"
                                onClick={() => {
                                    openModal();
                                    setOrderDetail(order)
                                }}
                        >
                            Send to..
                        </button>
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
                if (action === "Shipping") {
                    newStatusId = 6;
                    newStatusName = "Shipping";
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

        if (action === "Shipping") {
            newStatusId = 6;
        }
        updateStatus_Order.status.id = newStatusId;

        axios.post(`http://localhost:8080/orders/save`, updateStatus_Order)
            .then((res) => {
                if (action === "Shipping") {
                    Swal.fire({
                        icon: 'success',
                        title: 'You have accept order to ship!',
                        showConfirmButton: true
                    });
                }
            })
            .catch((err) => {
                console.log("Error updating vendor status:", err);
            });
    };

    const [selectedConsolidationPoint, setSelectedConsolidationPoint] = useState(null);
    const sendTo_OtherConsolidationPoint = () => {
        if (selectedConsolidationPoint) {
            const selectedConsolidationPointLong = +selectedConsolidationPoint;
            const change_ConsolidationPoint = consolidationPointNotInAccount.find((cp) => cp.id === selectedConsolidationPointLong)
            change_ConsolidationPoint.id = selectedConsolidationPointLong;
            orderDetail.order.consolidationPoint = change_ConsolidationPoint;

            axios.post(`http://localhost:8080/orders/save`, orderDetail.order)
                .then(function (res) {
                    setSelectedConsolidationPoint(null);
                    Swal.fire({
                        icon: 'success',
                        title: 'You have sent order-' + orderDetail.order.id + ' to ' + change_ConsolidationPoint.name + '!',
                        showConfirmButton: true,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.reload();
                        }
                    });
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    }

    return (
        <>
            <div className="container distanceBody">
                <h4 className='text-center pb-20 mt-20 headerInBody'>List Orders Received</h4>

                <table className="table">
                    <thead>
                    <tr>
                        <th className={"col-1"}>ID Order</th>
                        <th className={"col-1"}>Date</th>
                        <th className={"col-1"}>Name Sender</th>
                        <th className={"col-1"}>Phone Sender</th>
                        <th className={"col-1"}>Address Sender</th>
                        <th className={"col-1"}>Name Receiver</th>
                        <th className={"col-1"}>Phone Receiver</th>
                        <th className={"col-1"}>Address Receiver</th>
                        <th className={"col-1"}>Type</th>
                        <th className={"col-1"}>Weight</th>
                        <th className={"col-1"}>Status</th>
                        <th className={"col-1"}>Action</th>
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

                <div>
                    {modalIsOpen && (
                        <div role="dialog">
                            <div className="fade modal-backdrop in"/>
                            <div
                                role="dialog"
                                tabIndex={-1}
                                className="fade modal-donate in modal"
                                style={{display: 'block'}}
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content" role="document">
                                        <div className="modal-header">
                                            <button type="button" className="close" onClick={closeModal}>
                                                <span aria-hidden="true">×</span>
                                                <span className="sr-only">Close</span>
                                            </button>
                                            <h4 className="modal-title">
                                                <span>Send Order</span>
                                            </h4>
                                        </div>
                                        <div className="modal-body">
                                            {/* Nội dung modal */}
                                            <p>Order number <span
                                                style={{fontWeight: "bold"}}>{orderDetail.order.id}</span> sent to:</p>
                                            <select onChange={(e) => setSelectedConsolidationPoint(e.target.value)}>
                                                <option value="select"
                                                        disabled={selectedConsolidationPoint === "select"}>Choose
                                                    consolidation point
                                                </option>
                                                {consolidationPointNotInAccount.map((cp) => (
                                                    <option key={cp.id} value={cp.id}>
                                                        {cp.id} - {cp.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                className="btn btn-info buttonShadow"
                                                onClick={() => {
                                                    sendTo_OtherConsolidationPoint();
                                                    closeModal();
                                                }}
                                                disabled={!selectedConsolidationPoint || selectedConsolidationPoint === "select"}  // Disable nút khi không có giá trị được chọn
                                            >
                                                Send
                                            </button>
                                            <button type="button" className="btn btn-default buttonShadow"
                                                    onClick={closeModal}>
                                                <span>Close</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )

}

export default OrderReceived;