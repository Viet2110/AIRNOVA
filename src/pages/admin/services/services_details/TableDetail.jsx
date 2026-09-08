import { useContext, useMemo, useState } from "react";
import { Button, Paper, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";
import { StyledTableCell, StyledTableRow, tableContainerStyle, tableStyle } from "../../../../utils/StyleMui";
import PaginationPage from "../../../../components/common/admin/PaginationPage";
import ModelDelete from "../../../../components/common/admin/ModelDelete";
import { formatFirebaseTimestamp } from "../../../../services/repository";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { deleteDocument } from "../../../../services/firebasesService";
import { Service_DetailContext } from "../../../../contexts/Service_DetailProvider copy";


export default function TableDetail({ handleEdit, search }) {
    const serviceDetail = useContext(Service_DetailContext);
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
        deleteDocument("ServiceDetails", idDelete);
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
        return serviceDetail.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    }, [search, serviceDetail])

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
                                {page * rowsPerPage + index + 1}
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