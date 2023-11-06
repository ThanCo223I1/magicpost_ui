import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import ReactPaginate from "react-paginate";
import {format} from "date-fns";
import Swal from "sweetalert2";
import {Button, Modal} from "react-bootstrap";

function OrderShipping_TransactionPoint() {
    const [orders, setOrders] = useState([]);
    const [orderDetail, setOrderDetail] = useState({});
    const {id} = useParams();

    // da sua
    const [pageNumber, setPageNumber] = useState(0); // Trang hiện tại
    const ordersPerPage = 10; // Số vendor hiển thị trên mỗi trang
    const pagesVisited = pageNumber * ordersPerPage;
    // end

    const [showModalDetail, setShowModalDetail] = useState(false);
    const handleCloseDetail = () => setShowModalDetail(false);
    const handleShowDetail = () => setShowModalDetail(true);

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
                    <td>{order.order.createOrder == null ? <p className="text-danger">Không</p> :
                        <p>{format(new Date(order.order.createOrder), "dd-MM-yyyy")}</p>}</td>
                    <td>{order.order.nameSender == null ? <p className="text-danger">Không</p> :
                        <p>{order.order.nameSender}</p>}</td>
                    <td>{order.order.phoneSender == null ? <p className="text-danger">Không</p> :
                        <p>{order.order.phoneSender}</p>}</td>
                    <td>{order.typeList && order.typeList.map((item) => (
                        <tr key={item.id}>
                            <td><p>{item.name}</p></td>
                        </tr>
                    ))
                    }</td>
                    <td>{order.order.addressReceiver == null ? <p className="text-danger">Không</p> :
                        <p>{order.order.addressReceiver.slice(0, 16)}{order.order.addressReceiver.length > 16 && "..."}</p>}</td>
                    <td>{order.order.consolidationPoints.length === 0 ? <p className="text-danger">Không</p> :
                        <p>{order.order.consolidationPoints[order.order.consolidationPoints.length - 1].name}</p>}</td>
                    <td>
                        <button className="btn btn-default buttonShadow"
                                onClick={() => {
                                    handleShowDetail();
                                    setOrderDetail(order)
                                }}
                        >
                            Chi tiết
                        </button>
                    </td>
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
                        <th>Mã đơn</th>
                        <th>Ngày tạo</th>
                        <th>Người gửi</th>
                        <th>SĐT người gửi</th>
                        <th>Loại hàng</th>
                        <th>Địa chỉ nhận</th>
                        <th>Điểm đang giữ đơn</th>
                        <th>Xem chi tiết</th>
                        <th>Trạng thái</th>
                        <th>Hoạt động</th>
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

            <div>
                <Modal className="container" style={{left: "12%", top: "5%"}} show={showModalDetail}
                       onHide={handleCloseDetail}>
                    <Modal.Header>
                        <Modal.Title>Thông tin đơn hàng số <span
                            style={{fontWeight: "bold"}}>{orderDetail.order?.id}</span></Modal.Title>
                        <span aria-hidden="true" className="fa fa-remove"
                              style={{color: "black", borderRadius: "50%"}}></span>
                    </Modal.Header>
                    <Modal.Body style={{ maxHeight: "500px", overflow: 'auto' }}>
                        <div>
                            <th style={{ textDecoration: "underline" }}>Nơi tạo:</th>
                            <td><p>{orderDetail.order?.transactionPoint.name}</p></td>
                        </div>
                        <div>
                            <th style={{ textDecoration: "underline" }}>Ngày tạo:</th>
                            <td>{orderDetail.order?.createOrder == null ? <p className="text-danger">Không</p> :
                                <p>{format(new Date(orderDetail.order?.createOrder), "dd-MM-yyyy")}</p>}</td>
                        </div>
                        <div>
                            <th style={{ textDecoration: "underline" }}>Trạng thái:</th>
                            <td><p>{orderDetail.order?.status.nameStatus}</p></td>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <div>
                                <th style={{ textDecoration: "underline" }}>Hàng hoá</th>
                                <td>
                                    <tr>
                                        <th>Ảnh:</th>
                                        <td>{orderDetail.order?.image == null ?
                                            <p className="text-danger">Không</p> :
                                            <img src={orderDetail.order?.image} height="100px" width="100px"/>}</td>
                                    </tr>
                                    <tr>
                                        <th>Loại hàng:</th>
                                        <td>{orderDetail.typeList && orderDetail.typeList.map((item) => (
                                            <tr key={item.id}>
                                                <td><p>{item.name}</p></td>
                                            </tr>
                                        ))
                                        }</td>
                                    </tr>
                                    <tr>
                                        <th>Độ dài:</th>
                                        <td>{orderDetail.order?.width == null ?
                                            <p className="text-danger">Không</p> :
                                            <p>{orderDetail.order?.width}</p>}</td>
                                    </tr>
                                    <tr>
                                        <th>Chiều rộng:</th>
                                        <td>{orderDetail.order?.height == null ?
                                            <p className="text-danger">Không</p> :
                                            <p>{orderDetail.order?.height}</p>}</td>
                                    </tr>
                                    <tr>
                                        <th>Cân nặng:</th>
                                        <td>{orderDetail.order?.weight == null ?
                                            <p className="text-danger">Không</p> :
                                            <p>{orderDetail.order?.weight}kg</p>}</td>
                                    </tr>
                                </td>
                            </div>

                            <div>
                                <th style={{ textDecoration: "underline" }}>Người gửi</th>
                                <td>
                                    <tr>
                                        <th>Tên:</th>
                                        <td>
                                            {orderDetail.order?.nameSender == null ?
                                                <p className="text-danger">Không</p> :
                                                <p>{orderDetail.order?.nameSender}</p>}</td>
                                    </tr>
                                    <tr>
                                        <th>Số điện thoại:</th>
                                        <td>
                                            {orderDetail.order?.phoneSender == null ?
                                                <p className="text-danger">Không</p> :
                                                <p>{orderDetail.order?.phoneSender}</p>}</td>
                                    </tr>
                                    <tr>
                                        <th>Địa chỉ:</th>
                                        <td>
                                            {orderDetail.order?.addressSender == null ?
                                                <p className="text-danger">Không</p> :
                                                <p>{orderDetail.order?.addressSender}</p>}</td>
                                    </tr>
                                </td>
                            </div>

                            <div>
                                <th style={{ textDecoration: "underline" }}>Người nhận</th>
                                <td>
                                    <tr>
                                        <th>Tên:</th>
                                        <td>
                                            {orderDetail.order?.nameReceiver == null ?
                                                <p className="text-danger">Không</p> :
                                                <p>{orderDetail.order?.nameReceiver}</p>}</td>
                                    </tr>
                                    <tr>
                                        <th>Số điện thoại:</th>
                                        <td>
                                            {orderDetail.order?.phoneReceiver == null ?
                                                <p className="text-danger">Không</p> :
                                                <p>{orderDetail.order?.phoneReceiver}</p>}</td>
                                    </tr>
                                    <tr>
                                        <th>Địa chỉ:</th>
                                        <td>
                                            {orderDetail.order?.addressReceiver == null ?
                                                <p className="text-danger">Không</p> :
                                                <p>{orderDetail.order?.addressReceiver}</p>}</td>
                                    </tr>
                                </td>
                            </div>
                        </div>
                        <div>
                            <th style={{ textDecoration: "underline" }}>Các điểm tập kết đã đi qua:</th>
                            <td>
                                {orderDetail.order?.consolidationPoints.length === 0 ?
                                    <p className="text-danger">Không</p> :
                                    orderDetail.order?.consolidationPoints.map((item => (
                                        <span>-> {item.name} </span>
                                    )))
                                }
                            </td>
                        </div>
                        <div>
                            <th style={{ textDecoration: "underline" }}>Điểm tập kết đích:</th>
                            <td>
                                {(orderDetail.order?.status.id === 6 || orderDetail.order?.status.id === 3 || orderDetail.order?.status.id === 4) && orderDetail.order?.consolidationPoints.length !== 0 ?
                                    <span>{orderDetail.order?.consolidationPoints[orderDetail.order?.consolidationPoints.length-1].name}</span> :
                                    <p className="text-danger">Chưa tới</p>
                                }
                            </td>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-danger buttonShadow" variant="info" onClick={handleCloseDetail}>
                            Đóng
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )

}

export default OrderShipping_TransactionPoint;