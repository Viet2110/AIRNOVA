import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TbXboxX } from 'react-icons/tb';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogTrip({ openTrip, handleCloseTrip }) {
    
    return (
        <React.Fragment>
            <Dialog
                open={openTrip}
                slots={{
                    transition: Transition,
                }}
                keepMounted
                onClose={handleCloseTrip}
                aria-describedby="alert-dialog-slide-description"
                role="alertdialog"
                fullWidth
                maxWidth="xs"
            >
                <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p className='text-[#2c5f6d] font-semibold '>Hà Nội - TP. Hồ Chí Minh</p>
                    <TbXboxX className=' text-4xl hover:text-amber-300' />
                </DialogTitle>
                <DialogContent>
                    <div>Khởi hành vào Thứ Tư, 14 tháng 10, 2026</div>
                    <p className='font-bold'>Tổng thời gian 2h 15 phút</p>
                    <div className='flex items-center gap-2 mt-1'>
                        <p>2 giờ 15 phút</p>
                        <div className='border-l ps-2 border-dashed'>
                            <div>
                                <p className='font-bold text-[#2c5f6d]'>20:35 Hà Nội</p>
                                <p>Sân bay Nội Bài, Việt Nam</p>
                                <p className='text-xs'>Nhà ga 1</p>
                            </div>
                            <div className='mt-2'>
                                <p className='font-bold text-[#2c5f6d]'>22:50 TP. Hồ Chí Minh</p>
                                <p>Sân bay Tân Sơn Nhất, Việt Nam</p>
                                <p className='text-xs'>Nhà ga 3</p>
                            </div>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseTrip} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
