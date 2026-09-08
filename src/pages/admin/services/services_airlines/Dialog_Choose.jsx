import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { dialogStyle, textFieldStyle } from '../../../../utils/StyleMui';
import { FaSearch } from 'react-icons/fa';
import { Service_DetailContext } from '../../../../contexts/Service_DetailProvider copy';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogChoose({ service_Airline, openChoose, handleCloseChoose,handleChoose }) {
    const serviceDetails = React.useContext(Service_DetailContext);

    const check = (id) => {
        return service_Airline.list_service_id.includes(id)    
    }
    return (
        <React.Fragment>
            <Dialog
                fullWidth
                maxWidth="lg"
                open={openChoose}
                slots={{
                    transition: Transition,
                }}
                keepMounted
                onClose={handleCloseChoose}
                aria-describedby="alert-dialog-slide-description"
                role="alertdialog"
                sx={dialogStyle}
            >
                <DialogTitle >
                    <div className="flex max-md:flex-col justify-between items-center gap-3">
                        <h1>Please select a service</h1>
                        <div className='sd rounded-md flex items-center'>
                            <input className='w-90 p-1 outline-none' type="text" placeholder='Nhập từ khóa' />
                            <FaSearch className='mr-2' />
                        </div>
                    </div>

                </DialogTitle>
                <DialogContent >
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 mt-5">
                        {
                            serviceDetails.map(p => (
                                <div onClick={() => handleChoose(p.id)} className={`col-span-1 flex gap-2 items-center sd p-1.5 rounded-md hover:bg-linear-to-r hover:from-green-500 hover:via-emerald-500 hover:to-teal-500 transition ease-in duration-200 ${check(p.id) ? "bg-red-400" : ""}`} >
                                    <img className='h-10' src={p.imgUrl} alt="" />
                                    <p>{p.name}</p>
                                </div>
                            ))  
                        }
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' color='warning' onClick={handleCloseChoose} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment >
    );
}
