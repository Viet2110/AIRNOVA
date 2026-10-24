import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { dialogStylehome } from '../../../utils/StyleMui';
import { TextField } from '@mui/material';
import { addDocument } from "../../../services/firebasesService";
import { RegisterType } from '../../../types/Types';
import { AccountContext } from '../../../contexts/AccountProvider';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogRegister({ openRegister, handleCloseRegister, handleClickOpenLogin }) {
    const [register, setRegister] = React.useState(RegisterType);
    const [errorRegister, setErrorRegister] = React.useState(RegisterType);
    const accounts = React.useContext(AccountContext);

    const handleClickInputRegister = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value });
    }
    // hàm đómg
    React.useEffect(() => {
        setRegister(RegisterType);
        setErrorRegister(RegisterType);
    }, [handleCloseRegister]);

    const validationRegister = () => {
        const newError = {};
        const checkMail = accounts.some(p => p.email == register.email); // true email
        newError.email = register.email ? checkMail ? "Email đã được sử dụng" : "" : "Please enter your email";
        const checkPhone = accounts.some(p => p.phone == register.phone); // true phone
        newError.phone = register.phone ? checkPhone ? "Phone đã được sử dụng" : "" : "Please enter your phone";
        newError.password = register.password ? "" : "Please enter your password";
        newError.again_password = register.password == register.again_password ? "" : "Mật khẩu không trùng khớp";
        setErrorRegister(newError);
        return Object.values(newError).some(p => p !== ""); // true => co loi
    }
    const addRegister = async () => {
        if (validationRegister()) {
            return;
        }
        const { again_password, ...account } = register; // bỏ again_password ra chỉ add tất cả vào account
        await addDocument("Accounts", account);
        handleCloseRegister();
    }

    return (
        <React.Fragment>
            <Dialog
                open={openRegister}
                slots={{
                    transition: Transition,
                }}
                keepMounted
                onClose={handleCloseRegister}
                aria-describedby="alert-dialog-slide-description"
                role="alertdialog"
                fullWidth maxWidth="xs"
                sx={dialogStylehome}
            >
                <DialogTitle>
                    <p className='text-center font-bold mt-2'>Đăng Ký Airnova</p>
                </DialogTitle>
                <DialogContent>
                    <div className='flex flex-col gap-4 mt-2'>
                        <TextField helperText={errorRegister.email} error={!!errorRegister.email} value={register.email} onChange={handleClickInputRegister} name='email' type='email' label="Email" />
                        <TextField helperText={errorRegister.phone} error={!!errorRegister.phone} value={register.phone} onChange={handleClickInputRegister} name='phone' type='number' label="Số điện thoại" />
                        <TextField helperText={errorRegister.password} error={!!errorRegister.password} value={register.password} onChange={handleClickInputRegister} name='password' type='password' label="Mật khẩu" />
                        <TextField helperText={errorRegister.again_password} error={!!errorRegister.again_password} value={register.again_password} onChange={handleClickInputRegister} name='again_password' type='password' label="Nhập lại mật khẩu" />
                    </div>
                    <button onClick={addRegister} className='w-full mt-5 border-gray-600 py-3 rounded-md bg-[#f3bf46] text-white hover:bg-white hover:text-[#f3bf46]'>Đăng Ký</button>
                    <div className='text-center mt-3 text-[#b99235]'>Bạn đã có tài khoản? <span onClick={handleClickOpenLogin} className='text-red-600 underline' >Đăng nhập tại đây</span></div>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
