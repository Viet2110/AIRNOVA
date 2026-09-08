import { Dialog, DialogContent, DialogTitle, FormControl, FormControlLabel,  Radio, RadioGroup, Slide, TextField } from '@mui/material';
import React from 'react';
import ImgMediaCard from '../../../../components/ui/ImgMediaCard';
import { dialogStyle, textFieldStyle } from '../../../../utils/StyleMui';
import DialogFooter from '../../../../components/ui/DialogFooter';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogDetail({ error, open, handleClose, handleClickInput, handleImge, serviceDetail, addserviceDetail }) {
    const id = React.useId();
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
                <DialogTitle>{serviceDetail.id ? "Edit Service Detail" : "Add Service Detail"}</DialogTitle>
                <DialogContent>
                    <TextField helperText={error.name} error={!!error.name} value={serviceDetail.name} onChange={handleClickInput} name='name' fullWidth sx={textFieldStyle} id="outlined-basic" label="Name" variant="outlined" />
                    <ImgMediaCard imgUrl={serviceDetail.imgUrl} handleImge={handleImge} />
                    <FormControl sx={{ mt: 2 }}>
                        <RadioGroup onChange={handleClickInput} value={serviceDetail.status} row  name="status">
                            <FormControlLabel value={true} control={<Radio sx={{ color: 'white' }} />} label="True" />
                            <FormControlLabel value={false} control={<Radio sx={{ color: 'white' }} />} label="False" />
                        </RadioGroup>
                    </FormControl>
                </DialogContent>
                <DialogFooter handleClose={handleClose} add={addserviceDetail} title={serviceDetail.id ? "Update" : "Add"} />
            </Dialog>
        </React.Fragment>
    );
}