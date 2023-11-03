import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import ReactPaginate from "react-paginate";
import {format} from "date-fns";
import Swal from "sweetalert2";

function OrderPending() {
    const [orders, setOrders] = useState([]);
    const [orderDetail, setOrderDetail] = useState({});
    const [consolidationPoint_transactionPoint_IdAccount, setConsolidationPoint_transactionPoint_IdAccount] = useState([]);
    const {id} = useParams();

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
        axios.get(`http://localhost:8080/orders/transactionPoint/account/` + id)
            .then(function (res) {
                setOrders(res.data)
            })
            .catch(function (err) {
                console.log(err)
            })
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:8080/consolidationPoint/transactionPoint/account/` + id)
            .then(function (res) {
                setConsolidationPoint_transactionPoint_IdAccount(res.data)
                console.log(res.data)
            })
            .catch(function (err) {
                console.log(err)
            })
    }, []);

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
                        {
                            order.order.consolidationPoint === null &&
                            <button style={{marginTop: "4px"}}
                                    className="btn btn-info buttonShadow"
                                    onClick={() => {
                                        openModal();
                                        setOrderDetail(order)
                                    }}
                            >
                                Send to..
                            </button>
                        }
                    </td>
                </tr>

            );
        });
    const pageCount = Math.ceil(orders.length / ordersPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    };
    // end

    const [selectedConsolidationPoint, setSelectedConsolidationPoint] = useState(null);
    const sendTo_OtherConsolidationPoint = () => {
        if (selectedConsolidationPoint) {
            const selectedConsolidationPointLong = +selectedConsolidationPoint;
            consolidationPoint_transactionPoint_IdAccount.id = selectedConsolidationPointLong;
            orderDetail.order.consolidationPoint = consolidationPoint_transactionPoint_IdAccount;

            axios.post(`http://localhost:8080/orders/save`, orderDetail.order)
                .then(function (res) {
                    setSelectedConsolidationPoint(null);
                    Swal.fire({
                        icon: 'success',
                        title: 'You have sent order-' + orderDetail.order.id + ' to ' + consolidationPoint_transactionPoint_IdAccount.name + '!',
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
                <h4 className='text-center pb-20 mt-20 headerInBody'>Đơn hàng đang xử lý (Pending)</h4>

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
                                                <option value={consolidationPoint_transactionPoint_IdAccount.id}>
                                                    {consolidationPoint_transactionPoint_IdAccount.id} - {consolidationPoint_transactionPoint_IdAccount.name}
                                                </option>
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

export default OrderPending;