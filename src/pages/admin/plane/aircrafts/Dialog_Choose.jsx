import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { dialogStyle } from '../../../../utils/StyleMui';
import { SeatTypeContext } from '../../../../contexts/SeatTypeProvider';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dialog_Choose({ handleChoose, openChoose, handleCloseChoose, }) {
  const seatType = React.useContext(SeatTypeContext);


  return (
    <React.Fragment>

      <Dialog
        maxWidth="md" fullWidth
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
        <DialogTitle>{"Choose Type Seat"}</DialogTitle>
        <DialogContent>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 mt-5">
            {
              seatType.map(p => (
                <div onClick={() => handleChoose(p.id)} className={`col-span-1 flex-row  text-center gap-2 items-center sd p-1.5 rounded-md hover:bg-linear-to-r hover:from-green-500 hover:via-emerald-500 hover:to-teal-500 transition ease-in duration-200 `} >
                  <img className='h-10 m-auto mt-2' src={p.imgUrl} alt="" />
                  <p className='m-3'>{p.name}</p>
                </div>
              ))
            }
          </div>        </DialogContent>
        <DialogActions>
          <Button variant='contained' color='warning' onClick={handleCloseChoose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
