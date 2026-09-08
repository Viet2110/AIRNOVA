import { Button, Pagination, Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useContext, useMemo, useState } from 'react';
import { StyledTableCell, StyledTableRow, tableContainerStyle, tableStyle } from '../../../../utils/StyleMui';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { getObjectById } from '../../../../services/repository';
import { deleteDocument } from '../../../../services/firebasesService';
import ModelDelete from '../../../../components/common/admin/ModelDelete';
import PaginationPage from '../../../../components/common/admin/PaginationPage';
import { Service_AirlineContext } from '../../../../contexts/Service_AirlineProvider';
import { AirlineContext } from '../../../../contexts/AirlineProvider';
import Dialog_View from './Dialog_View';
import { FaEye } from 'react-icons/fa';
import { serviceAirlineType } from '../../../../types/Types';

export default function TableServiceAirline({ handleEdit, search }) {
    const serviceAirline = useContext(Service_AirlineContext);
    const airlines = useContext(AirlineContext);
    const [open, setOpen] = useState(false);
    const [idDelete, setidDelete] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [openView, setOpenView] = React.useState(false);
    // luu doi tuong nu 
    const [viewAirline, setviewAirline] = useState(serviceAirlineType);

    //DialogView
    const handleClickOpenView = (row) => {
        setOpenView(true);
        setviewAirline(row);
    };

    const handleCloseView = () => {
        setOpenView(false);
    };//
    //Diaglog_Airline
    const handleClickOpen = (id) => {
        setOpen(true);
        setidDelete(id);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        deleteDocument("ServiceAirlines", idDelete);
        handleClose();
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const dataSearch = useMemo(() => {
        return serviceAirline.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    }, [search, serviceAirline])

    const dataPagination = useMemo(() => {
        return dataSearch.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }, [page, dataSearch]);
    return (
        <TableContainer component={Paper} sx={tableContainerStyle}>
            <Table sx={tableStyle} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell align='center'>NAME</StyledTableCell>
                        <StyledTableCell align='center'>PRICE</StyledTableCell>
                        <StyledTableCell align='center'>AIRLINE</StyledTableCell>
                        <StyledTableCell align='center'>SERVICE_DETAIL</StyledTableCell>
                        <StyledTableCell align='center'>ACTION</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataPagination.map((row, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row">
                                {page * rowsPerPage + index + 1}
                            </StyledTableCell>
                            <StyledTableCell align='center' >{row.name}</StyledTableCell>
                            <StyledTableCell align='center'>{row.price}</StyledTableCell>
                            <StyledTableCell align="center">{getObjectById(airlines, row.airline_id).name}</StyledTableCell>
                            <StyledTableCell align="center">
                                <Button onClick={() => handleClickOpenView(row)} variant="contained" color='error' >
                                    <FaEye />
                                </Button>
                            </StyledTableCell>
                            <StyledTableCell align='center' >
                                <Button onClick={() => handleEdit(row)} variant="contained" sx={{ mr: 2 }}>
                                    <CiEdit />
                                </Button>
                                <Button onClick={() => handleClickOpen(row.id)} variant="contained" color='error' >
                                    <MdDelete />
                                </Button>
                            </StyledTableCell>
                            <Dialog_View viewAirline={viewAirline} openView={openView} handleCloseView={handleCloseView} />
                        </StyledTableRow>
                    ))}
                </TableBody>

            </Table>
            <PaginationPage
                page={page}
                count={dataSearch.length}
                handleChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
            <ModelDelete open={open} handleClose={handleClose} handleDelete={handleDelete} />
        </TableContainer>
    );
}