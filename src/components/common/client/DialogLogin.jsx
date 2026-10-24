import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { dialogStylehome, } from '../../../utils/StyleMui';
import { TextField } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { LoginType } from '../../../types/Types';
import { AccountContext } from '../../../contexts/AccountProvider';
import { AuthContext } from '../../../contexts/AuthProvider';
import { auth, googleProvider } from '../../../config/firebasesConfig';
import { signInWithPopup } from 'firebase/auth';
import { addDocument } from '../../../services/firebasesService';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogLogin({ openLogin, handleCloseLogin, handleClickOpenRegister }) {
    const [login, setLogin] = React.useState(LoginType);
    const [errorLogin, setErrorLogin] = React.useState(LoginType);
    const accounts = React.useContext(AccountContext);
    const { saveLogin } = React.useContext(AuthContext);


    const handleClickInputLogin = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }
    const validationLogin = () => {
        const newError = {};
        newError.email = login.email ? "" : "Please enter your email";
        newError.password = login.password ? "" : "Please enter your password";
        setErrorLogin(newError);
        return Object.values(newError).some(p => p !== ""); // true => co loi
    }
    const addLogin = async () => {
        if (validationLogin()) {
            return;
        }
        const accLogin = accounts.find(p => p.email == login.email && p.password == login.password);
        if (!accLogin) {
            alert("Email hoặc Password sai !");
            return;
        }
        saveLogin(accLogin);
        handleCloseLogin();
    }

    // Google sign-in
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            const existingCustomer = accounts.find(customer => customer.email === user.email); // kiêm 1 đối tượng
            let loggedInCustomer; // biến toàn cục 
            if (!existingCustomer) {
                const newCustomer = {
                    username: user.displayName,
                    imgUrl: user.photoURL,
                    role: ROLES.USER,
                    email : user.email 
                };
                const acc =  await addDocument('Accounts', newCustomer);
                loggedInCustomer = acc; // gán lại
            } else {
                loggedInCustomer = existingCustomer;
            }
             alert('Đăng nhập thành công!');
            saveLogin(loggedInCustomer);
            handleCloseLogin();
        } catch (error) {
              console.log('Đăng nhập thất bại. Vui lòng thử lại.');;
        }
    };

    return (
        <React.Fragment>
            <Dialog
                open={openLogin}
                slots={{
                    transition: Transition,
                }}
                keepMounted
                onClose={handleCloseLogin}
                aria-describedby="alert-dialog-slide-description"
                role="alertdialog"
                fullWidth maxWidth="xs"
                sx={dialogStylehome}
            >
                <DialogTitle>
                    <p className='text-center font-bold mt-2'>Đăng Nhập Airnova</p>
                </DialogTitle>
                <DialogContent>
                    <div className='flex flex-col gap-3 '>
                        <TextField helperText={errorLogin.email} error={!!errorLogin.email} value={login.email} onChange={handleClickInputLogin} name='email' type='email' label="Email" />
                        <TextField helperText={errorLogin.password} error={!!errorLogin.password} value={login.password} onChange={handleClickInputLogin} name='password' type='password' label="Password" />
                        <div className='text-end text-[#bc8f25] underline'>Quên mật khẩu</div>
                    </div>
                    <button onClick={addLogin} className='w-full  px-1 py-2 rounded-xl bg-[#f3bf46] text-white'>Đăng nhập</button>
                    <button  onClick={signInWithGoogle} className='w-full mt-4 px-1 py-2 rounded-xl bg-white flex justify-center items-center gap-2 '>
                        <FcGoogle className='text-xl' />
                        <p className='font-semibold' >Đăng nhập bằng Google</p>
                    </button>

                    <div className='text-center mt-3 text-[#b99235]'>Bạn chưa có tài khoản? <span onClick={handleClickOpenRegister} className='text-red-600 underline' >Đăng ký tại đây</span></div>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
