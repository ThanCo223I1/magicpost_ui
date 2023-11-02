import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import axios from "axios";
import {Pagination} from "@mui/material";
import {Dropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import NestedModal from "../modal/modal";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 15,
    },
}));


const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const TransantionPointManager = () => {
    const account = JSON.parse(localStorage.getItem('account'));

    const [rows, setRows] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:8080/account/transaction', {
                headers: {
                    Authorization: 'Bearer ' + account.token,
                },
            })
            .then((r) => {
                setRows(r.data);
            });
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };


    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);

    return (
        <>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10" style={{ marginTop: '40px' }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell>Tên Điểm Giao Dịch</StyledTableCell>
                                    <StyledTableCell align="left">Địa Chỉ</StyledTableCell>
                                    <StyledTableCell align="left">Tên Trưởng Điểm</StyledTableCell>
                                    <StyledTableCell align="left">Số Điện Thoại</StyledTableCell>
                                    <StyledTableCell align="left">Số Nhân Viên</StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {currentRows.map((row) => (
                                    <StyledTableRow key={row.id}>
                                        <StyledTableCell></StyledTableCell>
                                        <StyledTableCell>{row.name}</StyledTableCell>
                                        <StyledTableCell align="left">{row.address}</StyledTableCell>
                                        <StyledTableCell align="left">{row.leader.name}</StyledTableCell>
                                        <StyledTableCell align="left">{row.leader.phoneNumber}</StyledTableCell>
                                        <StyledTableCell align="left">{row.employee.length}</StyledTableCell>
                                        <StyledTableCell align="left">
                                            <Dropdown>
                                            <Dropdown.Toggle className="btn-primary-page active"
                                                             id="dropdown-basic">
                                                <p> Sửa Đổi</p>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item>
                                                <NestedModal data={row}></NestedModal>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <Link to={"/admin/managerTran"}>Đổi Trưởng Điểm </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <Link to={"/admin/tran"}>Đóng Điểm Giao Dịch</Link>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Pagination
                        count={Math.ceil(rows.length / rowsPerPage)}
                        page={currentPage}
                        onChange={handleChangePage}
                    />
                </div>
            </div>
        </>
    );
};

export default TransantionPointManager;