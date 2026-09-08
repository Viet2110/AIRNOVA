import { TablePagination } from '@mui/material';


export default function PaginationPage({ page, handleChangePage, rowsPerPage, handleChangeRowsPerPage, count }) {
    return (
        <TablePagination
             sx={{ color : "white"}}
            component="div"
            count={count}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    );
}
