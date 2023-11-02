import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";

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
export default function NestedModal(props) {
    const [open, setOpen] = React.useState(false);
    const { data } = props;
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>

                <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

            <div className="container">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                    Open modal
                </button>

                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title">Modal Heading</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-body">
                                Modal body..
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            {/*<p onClick={handleOpen}>Đổi Tên Điểm</p>*/}
            {/*<Modal*/}
            {/*    open={open}*/}
            {/*    onClose={handleClose}*/}
            {/*    aria-labelledby="parent-modal-title"*/}
            {/*    aria-describedby="parent-modal-description"*/}
            {/*>*/}
            {/*    <Box sx={{ ...style, width: 400 }}>*/}
            {/*        <Formik*/}
            {/*            const initialValues={{*/}
            {/*            password: '',*/}
            {/*            name: data.name||'',*/}
            {/*        }}*/}
            {/*            validate={values => {*/}
            {/*                const errors = {};*/}

            {/*                if (!values.name) {*/}
            {/*                    errors.name = 'Vui lòng nhập tên quản lý';*/}
            {/*                }*/}
            {/*                if (!values.password) {*/}
            {/*                    errors.password = 'Vui lòng nhập mật khẩu';*/}
            {/*                }*/}

            {/*                return errors;*/}
            {/*            }}*/}
            {/*            enableReinitialize={true}*/}
            {/*            onSubmit={(values, {setSubmitting, resetForm}) => {*/}
            {/*                const*/}


            {/*                setSubmitting(false);*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            <Form>*/}
            {/*                <div className="row">*/}
            {/*                    <div className="col-12">*/}
            {/*                        <li className='color-orange-primary'>*/}
            {/*                            Thay đổi tên điểm giao dịch*/}
            {/*                        </li>*/}
            {/*                        <br/>*/}
            {/*                        <div className="row g-3">*/}
            {/*                            <div className="col-12">*/}
            {/*                                <p style={{marginLeft: "11px"}}>Tên điểm giao dịch</p>*/}

            {/*                                <Field*/}
            {/*                                    type="text"*/}
            {/*                                    className="form-control"*/}
            {/*                                    id="inputEmail4"*/}
            {/*                                    placeholder="Tên quản lý"*/}
            {/*                                    required=""*/}
            {/*                                    name="name"*/}
            {/*                                />*/}
            {/*                                <ErrorMessage name="name" component="div" className="error-message"/>*/}
            {/*                            </div>*/}
            {/*                            <div className="col-12">*/}
            {/*                                <p style={{marginLeft: "11px"}}>Mật khẩu của bạn</p>*/}

            {/*                                <Field*/}
            {/*                                    type="password"*/}
            {/*                                    className="form-control"*/}
            {/*                                    id="inputEmail4"*/}
            {/*                                    placeholder="Mật khẩu của bạn"*/}
            {/*                                    required=""*/}
            {/*                                    name="password"*/}
            {/*                                />*/}
            {/*                                <ErrorMessage name="password" component="div" className="error-message"/>*/}
            {/*                            </div>*/}
            {/*                            <ErrorMessage name="status" component="div"/>*/}
            {/*                            <div className="col-12 d-grid">*/}
            {/*                                <br/>*/}
            {/*                                <button type="submit" className="btn btn-primary">*/}
            {/*                                    Đồng Ý*/}
            {/*                                </button>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <ErrorMessage name="general" component="div" className="error-message"/>*/}
            {/*            </Form>*/}
            {/*        </Formik>*/}
            {/*    </Box>*/}
            {/*</Modal>*/}
        </div>
    );
}