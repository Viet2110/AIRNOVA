import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledTableCell, StyledTableRow, tableContainerStyle, tableStyle } from '../../../../utils/StyleMui';
import { useContext, useMemo, useState } from 'react';
import { AirportContext } from '../../../../contexts/AirportProvider';
import { formatFirebaseTimestamp } from '../../../../services/repository';
import { Button } from '@mui/material';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { cities, countries } from '../../../../utils/data';
import ModelDelete from '../../../../components/common/admin/ModelDelete';
import { deleteDocument } from '../../../../services/firebasesService';
import PaginationPage from '../../../../components/common/admin/PaginationPage';

export default function TableAirport({ handleEdit, search }) {
    const airport = useContext(AirportContext);
    const [open, setOpen] = useState(false);
    const [idDelete, setidDelete] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleClickOpen = (id) => {
        setOpen(true);
        setidDelete(id);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        deleteDocument("Airports", idDelete);
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
        return airport.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    }, [search, airport])

    const dataPagination = useMemo(() => {
        return dataSearch.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }, [page, dataSearch]);
    return (
        <TableContainer sx={tableContainerStyle} component={Paper}>
            <Table sx={tableStyle} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell align="center">Name</StyledTableCell>
                        <StyledTableCell align="center">Country</StyledTableCell>
                        <StyledTableCell align="center">City</StyledTableCell>
                        <StyledTableCell align="center">Created</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataPagination.map((row, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row">
                                {page * rowsPerPage + index + 1}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.name}</StyledTableCell>
                            <StyledTableCell align="center">{countries.find(p => p.id == row.country_id).name}</StyledTableCell>
                            <StyledTableCell align="center">{cities.find(t => t.id == row.city_id).name}</StyledTableCell>
                            <StyledTableCell align="center">{formatFirebaseTimestamp(row.created_at)}</StyledTableCell>
                            <StyledTableCell align="center">
                                <Button onClick={() => handleEdit(row)} variant="contained" sx={{ mr: 2 }}>
                                    <CiEdit />
                                </Button>
                                <Button onClick={() => handleClickOpen(row.id)} variant="contained" color='error' >
                                    <MdDelete />
                                </Button>
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
