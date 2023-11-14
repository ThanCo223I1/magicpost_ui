import React, {useEffect, useState} from 'react';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import {Dropdown} from "react-bootstrap";
import EditNameTran from "../../playout_admin/modal/TransantionModal/EditNameTran";
import EditLeaderTran from "../../playout_admin/modal/TransantionModal/EditLeaderTran";
import {Pagination} from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";

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

const ShowEmployeeTransantion = () => {
    const account = JSON.parse(localStorage.getItem('account'));
    const [rows, setRows] = useState([]);
    console.log(rows)
    const leader = account.leaderDTO;
    useEffect(() => {
        axios.get("http://localhost:8080/account/transaction/leader/" + leader.id, {
            headers: {
                'Authorization': 'Bearer ' + account.token,
            },
        })
            .then(r => {
                setRows(r.data.employeeActive)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };


    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);
    const button = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Bạn có muốn khoá tài khoản?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: "Không",
            confirmButtonText: 'Đồng ý'
        }).then((result) => {
            if (result.isConfirmed) {

                axios.get("http://localhost:8080/account/employee/" + id + '/' + 2, {
                    headers: {
                        Authorization: 'Bearer ' + account.token,
                    },
                })
                    .then(r => {

                        Swal.fire(
                            'Khoá thành công!',
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
                                    <StyledTableCell>Tên Nhân Viên</StyledTableCell>
                                    <StyledTableCell align="left">Địa Chỉ</StyledTableCell>
                                    <StyledTableCell align="left">Số Điện Thoại</StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {currentRows.map((row) => (
                                    <StyledTableRow key={row.id}>
                                        {
                                            row.idStatusAccount === 1 && (<>
                                                <StyledTableCell></StyledTableCell>
                                                <StyledTableCell>{row.name}</StyledTableCell>
                                                <StyledTableCell align="left">{row.address}</StyledTableCell>
                                                <StyledTableCell align="left">{row.phoneNumber}</StyledTableCell>
                                                <StyledTableCell align="left">
                                                    <button className="btn-regis button"
                                                            onClick={() => button(row.idAccount)}>
                                                        Khoá Tài Khoản
                                                    </button>
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

export default ShowEmployeeTransantion;