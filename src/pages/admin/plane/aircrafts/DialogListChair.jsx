import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { SeatTypeContext } from '../../../../contexts/SeatTypeProvider';
import { getObjectById } from '../../../../services/repository';
import { PiArmchairLight } from 'react-icons/pi';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogListChair({ handleCloseList, openList, openView }) {
    const seatTypes = React.useContext(SeatTypeContext);
    const handleShow = (index) => {
        const check = openView.listchair.find(p => p.index == index);
        return check ? <img className='h-12 rounded-xl p-1 sd' src={getObjectById(seatTypes, check.id_seatype).imgUrl} alt="" /> : <PiArmchairLight className='text-5xl opacity-0 text-gray-400 rounded-xl p-1 sd' />
    }
    return (
        <React.Fragment>
            <Dialog
                open={openList}
                onClose={handleCloseList}
                aria-describedby="alert-dialog-slide-description"
                fullWidth
                maxWidth="md"
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Model title
                </DialogTitle>
                <DialogContent>
                    <div className='flex mt-3'>
                        <div className='grid gap-4' style={{ gridTemplateColumns: `repeat(${openView?.columns}, minmax(0,1fr))` }} >
                            {Array.from({ length: openView?.rows * openView?.columns }).map((_, index) => {
                                <div className="col-span-1" key={index}>
                                    {handleShow(index)}
                                </div>
                            })}
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseList} autoFocus>
                        Save changes
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
