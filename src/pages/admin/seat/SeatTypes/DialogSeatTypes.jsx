import { Dialog, DialogContent, DialogTitle, Slide, TextField } from '@mui/material';
import React from 'react';
import ImgMediaCard from '../../../../components/ui/ImgMediaCard';
import DialogFooter from '../../../../components/ui/DialogFooter';
import { dialogStyle, textFieldStyle } from '../../../../utils/StyleMui';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogSeatTypes({ error, open, handleClose, handleClickInput, handleImge, seatType, addSeatType }) {
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
                <DialogTitle>{seatType.id ? "Edit SeatTypes" : "Add SeatTypes"}</DialogTitle>
                <DialogContent>
                    <TextField helperText={error.name} error={!!error.name} value={seatType.name} onChange={handleClickInput} name='name' fullWidth sx={textFieldStyle} id="outlined-basic" label="Name" variant="outlined" />
                    <TextField helperText={error.price} error={!!error.price} value={seatType.price} onChange={handleClickInput} name='price' fullWidth sx={textFieldStyle} id="outlined-basic" label="Price" variant="outlined" />
                    <ImgMediaCard imgUrl={seatType.imgUrl} handleImge={handleImge} />
                </DialogContent>
                <DialogFooter handleClose={handleClose} add={addSeatType} title={seatType.id ? "Update" : "Add"} />
            </Dialog>
        </React.Fragment>
    );
}