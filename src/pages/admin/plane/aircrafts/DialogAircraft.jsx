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
import { PiArmchairLight, PiSeatFill } from 'react-icons/pi';
import Dialog_Choose from './Dialog_Choose';
import { SeatTypeContext } from '../../../../contexts/SeatTypeProvider';
import { getObjectById } from '../../../../services/repository';
import DialogSelectSeatType from './DialogSelectSeatType';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogAircrafts({ handleChoose, open, handleClose, aircraft, error, handleClickInput, addAircraft, handleChair }) {
    const airlines = useContext(AirlineContext);
    const airport = useContext(AirportContext);
    const seatTypes = React.useContext(SeatTypeContext);
    const [openChoose, setOpenChoose] = React.useState(false);
    const [index, setIndex] = React.useState(null)

    const handleClickOpenChoose = (index) => {
        setOpenChoose(true);
        setIndex(index);
    };

    const handleCloseChoose = () => {
        setOpenChoose(false);
    };
    const handleShow = (index) => {
        const check = aircraft.listChair?.find(p => p.index == index);
        return check ? <img className='h-12 rounded-xl p-1 sd' src={getObjectById(seatTypes, check.id_seatype).imgUrl} alt="" /> : <PiArmchairLight className='text-5xl text-gray-400 rounded-xl p-1 sd' />
    }

    return (
        <React.Fragment>
            <Dialog maxWidth="md" fullWidth
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
                    <div className='flex gap-3'>
                        <TextField type='number' helperText={error.rows} error={!!error.rows} name='rows' values={aircraft.rows} onChange={handleClickInput} fullWidth sx={textFieldStyle} label="Rows" variant="outlined" />
                        <TextField type='number' helperText={error.columns} error={!!error.columns} name='columns' values={aircraft.columns} onChange={handleClickInput} fullWidth sx={textFieldStyle} label="Columns" variant="outlined" />
                    </div>
                    <div className="flex mt-3" >
                        <div
                            className="grid gap-2"
                            style={{
                                gridTemplateColumns: `repeat(${aircraft.columns}, minmax(0, 1fr))`
                            }}
                        >
                            {Array.from({
                                length: aircraft.rows * aircraft.columns
                            }).map((_, index) => (
                                <div className="col-span-1" key={index} onClick={() => handleClickOpenChoose(index)}>
                                    {handleShow(index)}
                                </div>
                            ))}
                        </div>
                    </div>
                    <Dialog_Choose handleChoose={handleChoose} openChoose={openChoose} handleCloseChoose={handleCloseChoose} />
                </DialogContent>
                <DialogFooter handleClose={handleClose} add={addAircraft} title={aircraft.id ? "Update" : "Add"} />
                <DialogSelectSeatType aircraft={aircraft} index={index} handleChair={handleChair} openChoose={openChoose} handleCloseChoose={handleCloseChoose} />
            </Dialog>
        </React.Fragment>
    );
}
