import * as React from 'react';
import { dialogStyle, textFieldStyle } from '../../../../utils/StyleMui';
import { Dialog, DialogContent, DialogTitle, FormControl, FormControlLabel, Radio, RadioGroup, Slide, TextField } from '@mui/material';
import AutocompleteCard from '../../../../components/ui/AutocompleteCard';
import DialogFooter from '../../../../components/ui/DialogFooter';
import { AirlineContext } from '../../../../contexts/AirlineProvider';
import { AirportContext } from '../../../../contexts/AirportProvider';
import { useContext } from 'react';
import { AircraftContext } from '../../../../contexts/AircraftProvider';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dialog_Flights({ open, handleClose, flight, error, handleClickInput, addflight }) {
    const airlines = useContext(AirlineContext);
    const airport = useContext(AirportContext);
    const aircrafts = useContext(AircraftContext);


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
                <DialogTitle>{flight.id ? "Edit Flight" : "Add flight"}</DialogTitle>
                <DialogContent>
                    <AutocompleteCard values={flight.airline_id} error={error} data={airlines} handleClickInput={handleClickInput} name={"airline_id"} title={"Airline"} />
                    <AutocompleteCard values={flight.aircraft_id} error={error} data={aircrafts} handleClickInput={handleClickInput} name={"aircraft_id"} title={"Aircrafts"} />
                    <AutocompleteCard values={flight.from_airport} error={error} data={airport} handleClickInput={handleClickInput} name={"from_airport"} title={"From Airport"} />
                    <AutocompleteCard values={flight.to_airport} error={error} data={airport} handleClickInput={handleClickInput} name={"to_airport"} title={"To airport"} />
                    <TextField type='date' helperText={error.departure_time} error={!!error.departure_time} name='departure_time' value={flight.departure_time} onChange={handleClickInput} fullWidth sx={textFieldStyle} label="Departure_time" variant="outlined" slotProps={{
                        inputLabel: { shrink: true, },
                    }} />
                    <TextField type='date' helperText={error.arrival_time} error={!!error.arrival_time} name='arrival_time' value={flight.arrival_time} onChange={handleClickInput} fullWidth sx={textFieldStyle} label="Arrival_time" variant="outlined" slotProps={{
                        inputLabel: {
                            shrink: true,
                        },
                    }} />
                    <TextField type='number' helperText={error.discount} error={!!error.discount} name='discount' value={flight.discount} onChange={handleClickInput} fullWidth sx={textFieldStyle} label="Discount" variant="outlined" />
                    <FormControl sx={{ mt: 2 }}>
                        <h1>Round Trip</h1>
                        <RadioGroup onChange={handleClickInput} value={flight.is_round_trip} row name="is_round_trip">
                            <FormControlLabel value={true} control={<Radio sx={{ color: 'white' }} />} label="true" />
                            <FormControlLabel value={false} control={<Radio sx={{ color: 'white' }} />} label="false" />
                        </RadioGroup>
                    </FormControl>
                </DialogContent>
                <DialogFooter handleClose={handleClose} add={addflight} title={flight.id ? "Update" : "Add"} />
            </Dialog>
        </React.Fragment>
    );
}
