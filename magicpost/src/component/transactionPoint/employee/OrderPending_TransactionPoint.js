import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import ReactPaginate from "react-paginate";
import {format} from "date-fns";
import Swal from "sweetalert2";
import {Button, Modal, Box} from '@mui/material';

function OrderPending_TransactionPoint() {
    const [orders, setOrders] = useState([]);
    const [orderDetail, setOrderDetail] = useState({});
    const [consolidationPoint_transactionPoint_IdAccount, setConsolidationPoint_transactionPoint_IdAccount] = useState([]);
    const {id} = useParams();

    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const [showModalDetail, setShowModalDetail] = useState(false);
    const handleCloseDetail = () => setShowModalDetail(false);
    const handleShowDetail = () => setShowModalDetail(true);

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
            })
            .catch(function (err) {
                console.log(err)
            })
    }, []);

    const displayOrders = orders
        .slice(pagesVisited, pagesVisited + ordersPerPage)
        .map((order) => {
            const statusColor = order.order.status.id === 6 ? "backgroundColorStatusShipping" : order.order.status.id === 5 ? "backgroundColorStatusPending" : "";
            const statusName = order.order.status.id === 3 ? "Thành công" : order.order.status.id === 4 ? "Huỷ" :
                order.order.status.id === 5 ? "Đang giải quyết" : order.order.status.id === 6 ? "Đang giao hàng" : "";
            return (
                order.order.status.id === 5 &&
                <tr key={order.order.id}>
                    <td style={{textAlign:"center"}}>{order.order.id}</td>
                    <td>{order.order.createOrder == null ? <p className="text-danger">Không</p> :
                        <p>{format(new Date(order.order.createOrder), "dd-MM-yyyy")}</p>}</td>
                    <td>{order.order.nameSender == null ? <p className="text-danger">Không</p> :
                        <p>{order.order.nameSender}</p>}</td>
                    <td>{order.order.phoneSender == null ? <p className="text-danger">Không</p> :
                        <p>{order.order.phoneSender}</p>}</td>
                    {/*<td>{order.typeList && order.typeList.map((item) => (*/}
                    {/*    <tr key={item.id}>*/}
                    {/*        <td><p>{item.name}</p></td>*/}
                    {/*    </tr>*/}
                    {/*))*/}
                    {/*}</td>*/}
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
                    <td>{order.order.status == null ? <p className="text-danger">Không</p> :
                        <p className={statusColor}>{statusName}</p>}</td>
                    <td>
                        {
                            order.order.consolidationPoints.length === 0 &&
                            <button style={{marginTop: "4px"}}
                                    className="btn btn-outline-info buttonShadow"
                                    onClick={() => {
                                        handleShow();
                                        setOrderDetail(order)
                                    }}
                            >
                                Chuyển đơn..
                            </button>
                        }
                        <button style={{marginLeft: "4px"}}
                                className="btn btn-danger buttonShadow"
                                onClick={() => handleClick_Status(order.order?.id, "Cancel")}
                        >
                            Huỷ đơn
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

    const [selectedConsolidationPoint, setSelectedConsolidationPoint] = useState(null);
    const sendTo_OtherConsolidationPoint = () => {
        if (selectedConsolidationPoint) {
            const selectedConsolidationPointLong = +selectedConsolidationPoint;
            consolidationPoint_transactionPoint_IdAccount.id = selectedConsolidationPointLong;
            orderDetail.order.consolidationPoints.push(consolidationPoint_transactionPoint_IdAccount);

            axios.post(`http://localhost:8080/orders/save`, orderDetail.order)
                .then(function (res) {
                    setSelectedConsolidationPoint(null);
                    Swal.fire({
                        icon: 'Thành công',
                        title: 'Bạn đã gửi hoá đơn - ' + orderDetail.order.id + ' đến ' + consolidationPoint_transactionPoint_IdAccount.name + '!',
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

    const handleClick_Status = (orderId, action) => {
        const updateStatus_Order = orders.find((order) => order.order.id === orderId).order;
        let newStatusId = updateStatus_Order.status.id;
        let newNameStatus = updateStatus_Order.status.nameStatus;

        if (action === "Cancel") {
            newStatusId = 4;
            newNameStatus = "Cancel";
        }

        updateStatus_Order.status.id = newStatusId;
        updateStatus_Order.status.nameStatus = newNameStatus;

        axios.post(`http://localhost:8080/orders/save`, updateStatus_Order)
            .then((res) => {
                if (action === "Cancel") {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Bạn đã huỷ đơn hàng!',
                        showConfirmButton: true, // Ẩn nút "OK"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.reload();
                        }
                    });
                }
            })
            .catch((err) => {
                console.log("Error updating vendor status:", err);
            });
    };

    return (
        <>
            <div className=" distanceBody">
                <h4 className='text-center pb-20 mt-20 headerInBody'>Đơn hàng đang xử lý</h4>

                <table className="table">
                    <thead>
                    <tr>
                        <th>Mã đơn</th>
                        <th>Ngày tạo</th>
                        <th>Người gửi</th>
                        <th>SĐT người gửi</th>
                        {/*<th>Loại hàng</th>*/}
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

                <div>
                    <Modal
                        open={showModal}
                        onClose={handleClose}
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                    >
                        <Box sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4
                        }}>
                            <h2 id="modal-title">Chuyển đơn hàng</h2>
                            <p id="modal-description">Đơn hàng số <span
                                style={{fontWeight: "bold"}}>{orderDetail.order?.id}</span> gửi tới:</p>
                            <select onChange={(e) => setSelectedConsolidationPoint(e.target.value)}>
                                <option value="select"
                                        disabled={selectedConsolidationPoint === "select"}>Chọn điểm tập kết
                                </option>
                                <option value={consolidationPoint_transactionPoint_IdAccount.id}>
                                    {consolidationPoint_transactionPoint_IdAccount.id} - {consolidationPoint_transactionPoint_IdAccount.name}
                                </option>
                            </select><br/><br/>
                            <Button
                                className="btn btn-info buttonShadow"
                                style={{color: "white"}}
                                onClick={() => {
                                    sendTo_OtherConsolidationPoint();
                                    handleClose();
                                }}
                                disabled={!selectedConsolidationPoint || selectedConsolidationPoint === "select"}  // Disable nút khi không có giá trị được chọn
                            >
                                Gửi
                            </Button>
                            <Button className="btn btn-danger buttonShadow" style={{marginLeft: "1%"}} variant="info"
                                    onClick={handleClose}>
                                Đóng
                            </Button>
                        </Box>
                    </Modal>
                </div>

                <div>
                    <Modal
                        open={showModalDetail}
                        onClose={handleCloseDetail}
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '50%',
                                bgcolor: 'background.paper',
                                boxShadow: 24,
                                p: 4,
                                maxHeight: '90vh',
                                overflowY: 'auto',
                            }}>
                            <h2 id="modal-title">Thông tin đơn hàng số <span
                                style={{fontWeight: "bold"}}>{orderDetail.order?.id}</span></h2>
                            <div id="modal-description" class="indent-td">
                                <th style={{textDecoration: "underline"}}>Nơi tạo:  </th>
                                <td><p>{orderDetail.order?.transactionPoint.name}</p></td>
                            </div>
                            <div class="indent-td">
                                <th style={{textDecoration: "underline"}}>Ngày tạo:</th>
                                <td>{orderDetail.order?.createOrder == null ? <p className="text-danger">Không</p> :
                                    <p>{format(new Date(orderDetail.order?.createOrder), "dd-MM-yyyy")}</p>}</td>
                            </div>
                            <div class="indent-td">
                                <th style={{textDecoration: "underline"}}>Trạng thái:</th>
                                <td>
                                    <p>{orderDetail.order?.status.id === 3 ? "Thành công" : orderDetail.order?.status.id === 4 ? "Huỷ" :
                                        orderDetail.order?.status.id === 5 ? "Đang giải quyết" : orderDetail.order?.status.id === 6 ? "Đang giao hàng" : ""}</p>
                                </td>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <div class="indent-td">
                                    <th style={{textDecoration: "underline"}}>Hàng hoá</th>
                                    <td>
                                        <tr>
                                            <th>Ảnh:</th>
                                            <td>{orderDetail.order?.image == null ?
                                                <p className="text-danger">Không</p> :
                                                <img src={orderDetail.order?.image} height="100px" width="100px"/>}</td>
                                        </tr>
                                        {/*<tr>*/}
                                        {/*    <th>Loại hàng:</th>*/}
                                        {/*    <td>{orderDetail.typeList && orderDetail.typeList.map((item) => (*/}
                                        {/*        <tr key={item.id}>*/}
                                        {/*            <td><p>{item.name}</p></td>*/}
                                        {/*        </tr>*/}
                                        {/*    ))*/}
                                        {/*    }</td>*/}
                                        {/*</tr>*/}
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

                                <div class="indent-td">
                                    <th style={{textDecoration: "underline"}}>Người gửi</th>
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

                                <div class="indent-td">
                                    <th style={{textDecoration: "underline"}}>Người nhận</th>
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
                            <div class="indent-td">
                                <th style={{textDecoration: "underline"}}>Các điểm tập kết đã đi qua:</th>
                                <td>
                                    {orderDetail.order?.consolidationPoints.length === 0 ?
                                        <p className="text-danger">Không</p> :
                                        orderDetail.order?.consolidationPoints.map((item => (
                                            <span>-> {item.name} </span>
                                        )))
                                    }
                                </td>
                            </div>
                            <div class="indent-td">
                                <th style={{textDecoration: "underline"}}>Điểm tập kết đích:</th>
                                <td>
                                    {(orderDetail.order?.status.id === 6 || orderDetail.order?.status.id === 3) && orderDetail.order?.consolidationPoints.length !== 0 ?
                                        <p>{orderDetail.order?.consolidationPoints[orderDetail.order?.consolidationPoints.length - 1].name}</p> :
                                        <p className="text-danger">Chưa tới</p>
                                    }
                                </td>
                            </div>
                            <div class="indent-td">
                                <th style={{textDecoration: "underline"}}>Thời gian kết thúc đơn:</th>
                                <td>{orderDetail.order?.endOrder == null ?
                                    <p className="text-danger">Chưa kết thúc</p> :
                                    <p>{format(new Date(orderDetail.order?.endOrder), "dd-MM-yyyy HH:mm:ss")}</p>}</td>
                            </div>
                            <br/>
                            <Button className="btn btn-danger buttonShadow" variant="info" onClick={handleCloseDetail}>
                                Đóng
                            </Button>
                        </Box>
                    </Modal>
                </div>
            </div>
        </>
    )

}

export default OrderPending_TransactionPoint;