import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import { dialogStyle, textFieldStyle } from '../../../../utils/StyleMui';
import AutocompleteCard from '../../../../components/ui/AutocompleteCard';
import { AirlineContext } from '../../../../contexts/AirlineProvider';
import { AirportContext } from '../../../../contexts/AirportProvider';
import { useContext } from 'react';
import DialogFooter from '../../../../components/ui/DialogFooter';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogAircrafts({ open, handleClose, aircraft, error, handleClickInput, addAircraft }) {
    const airlines = useContext(AirlineContext);
    const airport = useContext(AirportContext);

    return (
        <React.Fragment>
            <Dialog maxWidth="xs" fullWidth
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
                <DialogTitle>{aircraft.id ? "Edit Aircraft" : "Add Aircraft"}</DialogTitle>
                <DialogContent>
                    <TextField helperText={error.name} error={!!error.name} name='name' values={aircraft.name} onChange={handleClickInput} fullWidth sx={textFieldStyle} label="Name" variant="outlined" />
                    <AutocompleteCard values={aircraft.airline_id} error={error} data={airlines} handleClickInput={handleClickInput} name={"airline_id"} title={"Airline"} />
                    <AutocompleteCard values={aircraft.airport_id} error={error} data={airport} handleClickInput={handleClickInput} name={"airport_id"} title={"Airprort"} />
                </DialogContent>
                <DialogFooter handleClose={handleClose} add={addAircraft} title={aircraft.id ? "Update" : "Add"} />
            </Dialog>
        </React.Fragment>
    );
}
