import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
export default function EditLeaderCon(props) {
    const account = JSON.parse(localStorage.getItem("account"))
    const [open, setOpen] = React.useState(false);
    const {data} = props;
    const [password, setPassword] = useState('');
    const [leader, setLeader] = useState({name: "", phoneNumber: ""});
    const [accountNew, setAccountNew] = useState({});
    console.log(data)
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleInputChangeLeader = (e) => {
        const {name, value} = e.target;
        setLeader({...leader, [name]: value});
    };
    const handleInputChangeAccount = (e) => {
        const {name, value} = e.target;
        setAccountNew({...accountNew, [name]: value});
    };
    const handleInputChangePassword = (e) => {
        setPassword(e.target.value)
    };
    const button = () => {
        const res = {
            id: data.id,
            idAccount: account.id,
            account: {
                id: data.leader.account.id,
                username: accountNew.username,
                password: accountNew.passwordAccount,
                role: {
                    id: 2
                },
                status: {
                    id: 1
                }
            },
            leader: {
                id: data.leader.id,
                name: leader.name,
                phoneNumber: leader.phoneNumber,
                role: {
                    id: 5
                }
            },
            password: password

        }

        axios.post("http://localhost:8080/account/consolidation/saveLeader", res, {
            headers: {
                'Authorization': 'Bearer ' + account.token,
            },
        })
            .then(r => {
                if (r.data == "wrong password") {
                    handleClose();
                    Swal.fire('Sai mật khẩu!')
                } else if (r.data == "account already exists") {
                    handleClose();
                    Swal.fire('Tài khoản đã tồn tại!')
                } else {
                    handleClose();
                    Swal.fire(
                        'Thanh công!',
                        '',
                        'success'
                    )

                    window.location.reload();

                }
            })
            .catch(err => {
                console.log(err)
            })

    };

    return (
        <div>
            <p onClick={handleOpen}>Đổi Trưởng Điểm</p>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{...style, width: 400}}>

                    <form>
                        <div className="row">
                            <div className="col-12">
                                <li className='color-orange-primary'>
                                    Thay đổi trưởng điểm tập kết
                                </li>
                                <br/>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <p style={{marginLeft: "11px"}}>Tài khoản</p>

                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder="Tài khoản"
                                            required=""
                                            name="username"
                                            onChange={handleInputChangeAccount}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <p style={{marginLeft: "11px"}}> Mật khẩu</p>

                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder="Mật khẩu"
                                            required=""
                                            name="passwordAccount"
                                            onChange={handleInputChangeAccount}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <p style={{marginLeft: "11px"}}>Tên quản lý</p>

                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder="Tên quản lý"
                                            required=""
                                            name="name"
                                            onChange={handleInputChangeLeader}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <p style={{marginLeft: "11px"}}>Số điện thoại</p>

                                        <input
                                            type="number"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder="Số điện thoại"
                                            required=""
                                            name="phoneNumber"
                                            onChange={handleInputChangeLeader}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <p style={{marginLeft: "11px"}}>Mật khẩu của bạn</p>

                                        <input
                                            type="password"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder="Mật khẩu của bạn"
                                            required=""
                                            name="password"
                                            onChange={handleInputChangePassword}
                                        />
                                    </div>
                                    <div className="col-12 d-grid">
                                        <br/>
                                        <button type="button" onClick={button} className="btn btn-primary">
                                            Đồng Ý
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                </Box>
            </Modal>
        </div>
    );
}