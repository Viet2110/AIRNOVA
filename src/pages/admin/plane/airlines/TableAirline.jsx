import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext, useMemo, useState } from 'react';
import { AirlineContext } from '../../../../contexts/AirlineProvider';
import { formatFirebaseTimestamp } from '../../../../services/repository';
import { Button } from '@mui/material';
import { MdDelete } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { dialogStyle, StyledTableCell, StyledTableRow, tableContainerStyle, tableStyle } from '../../../../utils/StyleMui';
import ModelDelete from '../../../../components/common/admin/ModelDelete';
import { deleteDocument } from '../../../../services/firebasesService';
import PaginationPage from '../../../../components/common/admin/PaginationPage';

export default function TableAirline({ handleEdit, search }) {
    const airlines = useContext(AirlineContext);
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
        deleteDocument("Airlines", idDelete);
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
        return airlines.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    }, [search, airlines])

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
                        <StyledTableCell align='center'>IMG</StyledTableCell>
                        <StyledTableCell align='center'>CREATED</StyledTableCell>
                        <StyledTableCell align='center'>ACTION</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataPagination.map((row, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row">
                                {page*rowsPerPage + index + 1}
                            </StyledTableCell>
                            <StyledTableCell align='center' component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell  >
                                <img className='w-10 h-10 mx-auto' src={row.imgUrl} alt="" />
                            </StyledTableCell>
                            <StyledTableCell align='center' >{formatFirebaseTimestamp(row.created_at)}</StyledTableCell>
                            <StyledTableCell align='center' >
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
