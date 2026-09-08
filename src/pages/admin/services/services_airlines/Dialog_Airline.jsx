import * as React from 'react';
import { dialogStyle, textFieldStyle } from '../../../../utils/StyleMui';
import { Button, Dialog, DialogContent, DialogTitle, Slide, TextField } from '@mui/material';
import { useContext } from 'react';
import { AirlineContext } from '../../../../contexts/AirlineProvider';
import AutocompleteCard from '../../../../components/ui/AutocompleteCard';
import DialogFooter from '../../../../components/ui/DialogFooter';
import DialogChoose from './Dialog_Choose';
import { IoIosAddCircle } from 'react-icons/io';
import { getObjectById } from '../../../../services/repository';
import { Service_DetailContext } from '../../../../contexts/Service_DetailProvider copy';
import { RiDeleteBackFill } from 'react-icons/ri';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogAirline({ handleChoose, open, handleClose, service_Airline, error, handleClickInput, addService_Airline }) {
    const airlines = useContext(AirlineContext);
    const serviceDetail = useContext(Service_DetailContext);

    const [openChoose, setOpenChoose] = React.useState(false);

    const handleClickOpenChoose = () => {
        setOpenChoose(true);
    };

    const handleCloseChoose = () => {
        setOpenChoose(false);
    };

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
                <DialogTitle>{service_Airline.id ? "Edit Service_Airline" : "Add Service_Airline"}</DialogTitle>
                <DialogContent>
                    <TextField helperText={error.name} error={!!error.name} name='name' value={service_Airline.name} onChange={handleClickInput} fullWidth sx={textFieldStyle} label="Name" variant="outlined" />
                    <TextField helperText={error.price} error={!!error.price} name='price' value={service_Airline.price} onChange={handleClickInput} fullWidth sx={textFieldStyle} label="Price" variant="outlined" />
                    <AutocompleteCard values={service_Airline.airline_id} error={error} data={airlines} handleClickInput={handleClickInput} name={"airline_id"} title={"Airline"} />
                    <button className='sd p-2 mt-3 rounded-xl flex items-center gap-2' onClick={handleClickOpenChoose}>
                        <h2 className='text-xl'>Service</h2>
                        <IoIosAddCircle className='text-2xl' />
                    </button>

                    <div className="flex gap-2 flex-col mt-2">
                        {
                            service_Airline.list_service_id.map(p => (
                                <div className="col-span-1 flex gap-2 items-center sd p-1.5 rounded-md hover:bg-linear-to-r hover:from-green-500 hover:via-emerald-500 hover:to-teal-500 transition ease-in duration-200" >
                                    <img className='h-10' src={getObjectById(serviceDetail, p).imgUrl} alt="" />
                                    <p>{getObjectById(serviceDetail, p).name}</p>
                                    <RiDeleteBackFill onClick={() => handleChoose(p)} className='text-red-400 text-2xl hover:text-amber-300 ml-auto' />
                                </div>
                            ))
                        }
                    </div>
                    <DialogChoose service_Airline={service_Airline} handleChoose={handleChoose} openChoose={openChoose} handleCloseChoose={handleCloseChoose} />
                </DialogContent>
                <DialogFooter handleClose={handleClose} add={addService_Airline} title={service_Airline.id ? "Update" : "Add"} />
            </Dialog>
        </React.Fragment>

    );
}
