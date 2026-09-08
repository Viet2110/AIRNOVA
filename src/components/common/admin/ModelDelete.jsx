import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, TextField } from '@mui/material';
import React from 'react';
import { dialogStyle } from '../../../utils/StyleMui';
import DialogFooter from '../../ui/DialogFooter';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ModelDelete({ open, handleClose, handleDelete }) {
    return (
        <React.Fragment>
            <Dialog
                open={open}
                slots={{
                    transition: Transition,
                }}
                fullWidth
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                role="alertdialog"
                sx={dialogStyle}
            >
                <DialogTitle>{"Model Delete"}</DialogTitle>
                <DialogContent >
                    Do you delete ko ?
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 3 }}>
                    <Button variant='contained' color='warning' onClick={handleClose} autoFocus>
                        Cancle
                    </Button>
                    <Button variant='contained' color='error' onClick={handleDelete}>Delete</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default ModelDelete;