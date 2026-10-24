import { styled } from '@mui/material/styles';
import { TableCell, tableCellClasses, TableRow } from "@mui/material";
// style admin
export const dialogStyle = {
    "& .MuiPaper-root": {
        background: "rgba(20,20,20,0.95)",
        border: "1px solid rgba(0,255,150,0.2)",
        boxShadow: "0 0 30px rgba(0,255,150,0.2)",
        backdropFilter: "blur(10px)",
        color: "#fff",
        borderRadius: "16px",
    },
};
export const textFieldStyle = {
    mt: 2,

    "& .MuiInputBase-input": {
        color: "#fff",
    },

    "& .MuiInputLabel-root": {
        color: "#bdbdbd",
    },

    "& .MuiInputLabel-root.Mui-focused": {
        color: "#00e676",
    },

    "& .MuiOutlinedInput-root": {
        borderRadius: "10px",

        "& fieldset": {
            borderColor: "rgba(255,255,255,0.2)",
        },

        "&:hover fieldset": {
            borderColor: "#00e676",
        },

        "&.Mui-focused fieldset": {
            borderColor: "#00e676",
            borderWidth: "2px",
        },
    },
    "& input::-webkit-calendar-picker-indicator": {
        filter: "invert(1)",
    },
};

export const tableContainerStyle = {
    mt: 2,
    backgroundColor: "transparent",
    backgroundImage: "none", // Xóa nền mặc định của Paper
    boxShadow: "0 0 25px rgba(2, 248, 92, 0.4)",
    border: "1px solid rgba(0, 255, 255, 0.3)",
    borderRadius: "12px",
    overflow: "hidden",

};

export const tableStyle = {
    backgroundColor: "transparent",

    "& .MuiTableCell-root": {
        color: "#fff",
        borderColor: "rgba(255,255,255,0.1)",
    },

    "& .MuiTableCell-head": {
        color: "#fff",
        fontWeight: 700,
    },
};

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
//style home

export const dialogStylehome = {
    "& .MuiPaper-root": {
        background: "rgba(235, 248, 250, 0.88)",
        border: "1px solid rgba(255, 255, 255, 0.75)",
        boxShadow: "0 12px 40px rgba(20, 70, 80, 0.3)",
        backdropFilter: "blur(16px)",
        color: "#183B45",
        borderRadius: "18px",
    },
};
