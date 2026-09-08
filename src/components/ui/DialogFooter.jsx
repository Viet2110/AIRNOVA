import { Button, DialogActions } from '@mui/material';
import React from 'react';

function DialogFooter({handleClose , add ,title }) {
    return (
        <DialogActions sx={{ px: 3, pb: 3 }}>
            <Button variant='contained' color='warning' onClick={handleClose} autoFocus>
                Cancle
            </Button>
            <Button variant='contained' onClick={add}>{title}</Button>
        </DialogActions>
    );
}

export default DialogFooter;