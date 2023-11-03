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
import EditNameTran from "../modal/TransantionModal/EditNameTran";
import EditLeaderTran from "../modal/TransantionModal/EditLeaderTran";
import Swal from "sweetalert2";
import EditNameCon from "../modal/ConsolidationModal/EditNameCon";
import EditLeaderCon from "../modal/ConsolidationModal/EditLeaderCon";

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
const ConsolidationPointManager = () => {
    const account = JSON.parse(localStorage.getItem('account'));

    const [rows, setRows] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:8080/account/consolidation', {
                headers: {
                    Authorization: 'Bearer ' + account.token,
                },
            })
            .then((r) => {
                console.log(r)
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
    const button = (id) => {
        Swal.fire({
            title: 'Bạn có muốn đóng lại điểm?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText:"Không",
            confirmButtonText: 'Đồng ý'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.get("http://localhost:8080/account/consolidation/save/" + id + '/' + 2, {
                    headers: {
                        Authorization: 'Bearer ' + account.token,
                    },
                })
                    .then(r => {

                        Swal.fire(
                            'Đóng lại điểm thành công!',
                            '',
                            'Đồng ý')
                        window.location.reload();

                    })
                    .catch(err => {
                        console.log(err)
                    })


            }
        })

    };

    return (
        <>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10" style={{marginTop: '40px'}}>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 700}} aria-label="customized table">
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
                                        {row.status === 1 && (
                                            <>
                                                <StyledTableCell></StyledTableCell>
                                                <StyledTableCell>{row.name}</StyledTableCell>
                                                <StyledTableCell align="left">{row.address}</StyledTableCell>
                                                <StyledTableCell align="left">{row.leader.name}</StyledTableCell>
                                                <StyledTableCell align="left">{row.leader.phoneNumber}</StyledTableCell>
                                                <StyledTableCell align="left">{row.employee.length}</StyledTableCell>
                                                <StyledTableCell align="left">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="btn-primary-page active" id="dropdown-basic">
                                                            <p> Sửa Đổi</p>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item>
                                                                <EditNameCon data={row}></EditNameCon>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <EditLeaderCon data={row}></EditLeaderCon>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item onClick={()=>button(row.id)}>
                                                                Đóng Điểm Giao Dịch
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </StyledTableCell>
                                            </>
                                        )}
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

export default ConsolidationPointManager;