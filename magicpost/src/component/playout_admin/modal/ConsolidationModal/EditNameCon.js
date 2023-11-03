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
export default function EditNameCon(props) {
    const account = JSON.parse(localStorage.getItem("account"))
    const [open, setOpen] = React.useState(false);
    const {data} = props;
    const [name, setName] = useState(data.name);
    const [password, setPassword] = useState('');
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleInputChangeName = (e) => {
        setName(e.target.value)
    };
    const handleInputChangePassword = (e) => {
        setPassword(e.target.value)
    };
    const button = () => {
        const res = {
            id: data.id,
            name: name,
            idAccount: account.id,
            password: password
        }
        axios.post("http://localhost:8080/account/consolidation/save", res, {
            headers: {
                'Authorization': 'Bearer ' + account.token,
            },
        })
            .then(r => {
                if (r.data == "wrong password") {
                    handleClose();
                    Swal.fire('Sai mật khẩu!')
                } else {
                    Swal.fire(
                        'Thanh công!',
                        '',
                        'success'
                    )
                    handleClose();
                    window.location.reload();

                }
            })
            .catch(err => {
                console.log(err)
            })

    };

    return (
        <div>
            <p onClick={handleOpen}>Đổi Tên Điểm</p>
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
                                    Thay đổi tên điểm tập kết
                                </li>
                                <br/>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <p style={{marginLeft: "11px"}}>Tên điểm giao dịch</p>

                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder="Tên quản lý"
                                            required=""
                                            name="name"
                                            value={name}
                                            onChange={handleInputChangeName}
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