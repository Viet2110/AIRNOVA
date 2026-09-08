import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import ImgMediaCard from '../../../../components/ui/ImgMediaCard';
import { dialogStyle, textFieldStyle } from '../../../../utils/StyleMui';
import DialogFooter from '../../../../components/ui/DialogFooter';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogAirline({ error, open, handleClose, handleClickInput, handleImge, airline, addAirline }) {
    return (
        <React.Fragment>
            <Dialog
                open={open}
                slots={{
                    transition: Transition,
                }}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                role="alertdialog"
                sx={dialogStyle}
            >
                <DialogTitle>{airline.id ? "Edit Airlines" : "Add Airlines"}</DialogTitle>
                <DialogContent>
                    <TextField helperText={error.name} error={!!error.name} value={airline.name} onChange={handleClickInput} name='name' fullWidth sx={textFieldStyle} id="outlined-basic" label="Name" variant="outlined" />
                    <ImgMediaCard imgUrl={airline.imgUrl} handleImge={handleImge} />
                </DialogContent>
                <DialogFooter handleClose={handleClose} add={addAirline} title={airline.id ? "Update" : "Add"} />
            </Dialog>
        </React.Fragment>
    );
}
