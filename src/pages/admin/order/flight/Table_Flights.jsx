import { Button, Pagination, Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useContext, useMemo, useState } from 'react';
import { StyledTableCell, StyledTableRow, tableContainerStyle, tableStyle } from '../../../../utils/StyleMui';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { formatFirebaseTimestamp, getObjectById } from '../../../../services/repository';
import { AirlineContext } from '../../../../contexts/AirlineProvider';
import { AirportContext } from '../../../../contexts/AirportProvider';
import { deleteDocument } from '../../../../services/firebasesService';
import ModelDelete from '../../../../components/common/admin/ModelDelete';
import PaginationPage from '../../../../components/common/admin/PaginationPage';
import { FlightContext } from '../../../../contexts/FlightProvider';
import { AircraftContext } from '../../../../contexts/AircraftProvider';

export default function TableFlights({ handleEdit, search }) {
    const flights = useContext(FlightContext);
    const airlines = useContext(AirlineContext);
    const airport = useContext(AirportContext);
    const aircrafts = useContext(AircraftContext);

    const [open, setOpen] = useState(false);
    const [idDelete, setidDelete] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);


    const handleClickOpen = (id) => {
        setOpen(true);
        setidDelete(id);
        console.log(set);
        
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        deleteDocument("Flights", idDelete);
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
        return flights.filter(p => getObjectById(airlines, p.airline_id).name.toLowerCase().includes(search.toLowerCase()));
    }, [search, flights])

    const dataPagination = useMemo(() => {
        return dataSearch.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }, [page, dataSearch]);
    return (
        <TableContainer component={Paper} sx={tableContainerStyle}>
            <Table sx={tableStyle} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align='center'>ID</StyledTableCell>
                        <StyledTableCell align='center'>AIRLINE</StyledTableCell>
                        <StyledTableCell align='center'>AIRCRAFT</StyledTableCell>
                        <StyledTableCell align='center'>FROM_AIRPORT</StyledTableCell>
                        <StyledTableCell align='center'>TO_AIRPORT</StyledTableCell>
                        <StyledTableCell align='center'>DEPARTURE_TIME</StyledTableCell>
                        <StyledTableCell align='center'>ARRIVAL_TIME</StyledTableCell>
                        <StyledTableCell align='center'>DISCOUNT</StyledTableCell>
                        <StyledTableCell align='center'>ROUND_TRIP</StyledTableCell>
                        <StyledTableCell align='center'>ACTION</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataPagination.map((row, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row">
                                {page * rowsPerPage + index + 1}
                            </StyledTableCell>
                            <StyledTableCell align="center">{getObjectById(airlines, row.airline_id).name}</StyledTableCell>
                            <StyledTableCell align="center">{getObjectById(aircrafts, row.aircraft_id).name}</StyledTableCell>
                            <StyledTableCell align="center">{getObjectById(airport, row.from_airport).name}</StyledTableCell>
                            <StyledTableCell align="center">{getObjectById(airport, row.to_airport).name}</StyledTableCell>
                            <StyledTableCell align="center">{row.departure_time}</StyledTableCell>
                            <StyledTableCell align="center">{row.arrival_time}</StyledTableCell>
                            <StyledTableCell align="center">{row.discount}</StyledTableCell>
                            <StyledTableCell align='center' >{row.is_round_trip ? "Yes" : "No" }</StyledTableCell>
                            <StyledTableCell align='center' >
                                <div className='flex gap-2'>
                                    <Button onClick={() => handleEdit(row)} variant="contained" >
                                        <CiEdit />
                                    </Button>
                                    <Button onClick={() => handleClickOpen(row.id)} variant="contained" color='error' >
                                        <MdDelete />
                                    </Button>
                                </div>
                            </StyledTableCell>
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