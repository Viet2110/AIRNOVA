import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { dialogStyle } from '../../../../utils/StyleMui';
import { getObjectById } from '../../../../services/repository';
import { Service_DetailContext } from '../../../../contexts/Service_DetailProvider copy';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dialog_View({ openView, handleCloseView, viewAirline }) {
    const serviceDetail = React.useContext(Service_DetailContext);
    return (
        <React.Fragment>
            <Dialog
                open={openView}
                slots={{
                    transition: Transition,
                }}
                keepMounted
                onClose={handleCloseView}
                aria-describedby="alert-dialog-slide-description"
                role="alertdialog"
                sx={dialogStyle}
            >
                <DialogTitle>{"View Service"}</DialogTitle>
                <DialogContent>
                    <div className="flex gap-2 flex-col mt-2">
                        {
                            viewAirline.list_service_id.map(p => (
                                <div className="col-span-1 flex gap-2 items-center sd p-1.5 rounded-md hover:bg-linear-to-r hover:from-green-500 hover:via-emerald-500 hover:to-teal-500 transition ease-in duration-200" >
                                    <img className='h-10' src={getObjectById(serviceDetail, p).imgUrl} alt="" />
                                    <p>{getObjectById(serviceDetail, p).name}</p>
                                    
                                </div>
                            ))
                        }
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' color='warning' onClick={handleCloseView} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
