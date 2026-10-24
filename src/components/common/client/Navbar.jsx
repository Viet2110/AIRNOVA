import React, { useState } from 'react';
import { IoMdArrowDropright, IoMdClose, IoMdLogIn, IoMdLogOut } from 'react-icons/io';
import { Link } from 'react-router-dom';
import LOGO from "../../../assets/LOGO.png";
import { LISTHOME } from '../../../utils/Contants';
import DialogLogin from './DialogLogin';
import DialogRegister from './DialogRegister';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { MdAccountTree } from 'react-icons/md';


function Navbar(props) {
    const [show, setShow] = useState(null);
    const [showNav, setShowNav] = useState(false);
    const [openLogin, setOpenLogin] = React.useState(false);
    const [openRegister, setOpenRegister] = React.useState(false);
    const { isLogin, logout } = useContext(AuthContext);
    //ĐĂMG KÝ
    const handleClickOpenRegister = () => {
        setOpenRegister(true);
        handleCloseLogin();
    };
    const handleCloseRegister = () => {
        setOpenRegister(false);
    };
    //ĐĂNG NHẬP
    const handleClickOpenLogin = () => {
        setOpenLogin(true);
        handleCloseRegister();
    };
    const handleCloseLogin = () => {
        setOpenLogin(false);
    };
    return (
        <div className={`sd-blue transition-all duration-700 ease-in-out text-white px-2 pb-3 lg:h-screen  ${!showNav ? "lg:w-20 " : "lg:w-43"}`}>
            <div className='flex h-14.5 relative justify-center items-center text-2xl gap-3'>
                <img className='w-15' src={LOGO} alt="" />
                <div onClick={() => setShowNav(!showNav)} className={`absolute z-100 right-0 p-2 sd-blue lg:-right-2 top-1/2 lg:translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${showNav ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}>
                    <IoMdClose className='text-sm' />
                </div>
            </div>
            <div className={`max-lg:overflow-hidden transition-all duration-100 ease-in-out   ${showNav ? "max-h-screen" : "max-h-0"}`} >
                {
                    LISTHOME.map((item, index) => (
                        <div className='relative text-nowrap' key={index}>
                            {
                                item.subMenu ? (<div onClick={() => setShow(show == index ? null : index)} className='sd-blue hover:bg-linear-to-r hover:from-[#C9A66B] hover:via-[#B8904A] hover:to-[#8B6F3D] transition ease-in duration-200 flex items-center gap-3 mt-3 rounded-md p-2 '>
                                    {item.icon}
                                    {showNav && <p className='m-auto'>{item.icon}</p>}
                                    <IoMdArrowDropright className={`ml-auto transition-all ease-in-out duration-150 ${show == index ? "rotate-90" : ""}`} />
                                </div>) : (<Link to={item.path} className={` flex items-center gap-3 mt-5  rounded-md p-2 hover:bg-linear-to-r hover:from-[#C9A66B] hover:via-[#B8904A] hover:to-[#8B6F3D]  transition ease-in duration-200 ${showNav ? "justify-start" : "justify-center text-2xl"}`}>
                                    {item.icon}
                                    {showNav && <p>{item.title}</p>}
                                </Link>)
                            }
                            <ul className={` ml-3 ${showNav ? "" : "absolute top-0 translate-x-15"} `}>
                                {show == index &&
                                    item.subMenu.map(p => (
                                        <Link to={p.path} className='sd-blue hover:bg-linear-to-r hover:from-[#C9A66B] hover:via-[#B8904A] hover:to-[#8B6F3D] transition ease-in duration-200 px-2 py-1 mt-2 rounded-md'>{p.name}</Link>
                                    ))
                                }
                            </ul>
                        </div>
                    ))

                }
            </div>
            <div className={`flex flex-col  bg-[#f3c864] rounded-xl ${showNav ? " p-3 mt-10" : " p-3 mt-100"}`} >
                {

                    isLogin ? <MdAccountTree className='w-20 h-10 m-auto' onClick={logout} /> : <>
                        <button onClick={handleClickOpenLogin} className='bg-[#f3bf46] px-2 py-1 rounded-xl hover:bg-white hover:text-[#f3bf46] flex items-center justify-center gap-2 h-10 mt-2'>
                            <IoMdLogIn />{showNav && <p>Đăng nhập</p>}
                        </button>
                        <button onClick={handleClickOpenRegister} className='bg-[#f3bf46] px-2 py-1 rounded-xl mt-2 hover:bg-white hover:text-[#f3bf46] flex items-center justify-center gap-2 h-10 '>
                            <IoMdLogOut />{showNav && <p>Đăng ký</p>}
                        </button>
                    </>
                }
            </div>
            {/* Mở đăng nhập và mở đăng ký*/}
            <DialogLogin handleClickOpenRegister={handleClickOpenRegister} openLogin={openLogin} handleCloseLogin={handleCloseLogin} />
            <DialogRegister handleClickOpenLogin={handleClickOpenLogin} openRegister={openRegister} handleCloseRegister={handleCloseRegister} />

        </div>
    );
}

export default Navbar;