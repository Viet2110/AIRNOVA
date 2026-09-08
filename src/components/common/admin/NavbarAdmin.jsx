import React, { useState } from 'react';
import { BiCategory, BiSolidCategory } from 'react-icons/bi';
import { CiImageOn } from 'react-icons/ci';
import { FaChair, FaUserFriends } from 'react-icons/fa';
import { FaBowlRice, FaLocationDot } from 'react-icons/fa6';
import { IoMdArrowDropright, IoMdClose } from 'react-icons/io';
import { RiFolderUserLine } from 'react-icons/ri';
import { LISTMENU } from '../../../utils/Contants';
import LOGO from "../../../assets/LOGO.png";
import { Link } from 'react-router-dom';


function NavbarAdmin(props) {
    const [show, setShow] = useState(null);
    const [showNav, setShowNav] = useState(false);
    return (
        <div className={`sd transition-all duration-150 ease-in-out text-white px-2 pb-3 lg:h-screen ${!showNav ? "lg:w-20" : "lg:w-43"}`}>
            <div className='flex h-14.5 relative justify-center items-center text-2xl gap-3'>
                <img className='w-15' src={LOGO} alt="" />
                <div onClick={() => setShowNav(!showNav)} className={`absolute right-0 p-2 sd lg:-right-2 top-1/2 lg:translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${showNav ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}>
                    <IoMdClose className='text-sm' />
                </div>
            </div>
            <div className={`max-lg:overflow-hidden transition-all duration-100 ease-in-out   ${showNav ? "max-h-screen" : "max-h-0"}`} >
                {
                    LISTMENU.map((item, index) => (
                        <div className='relative'>
                            {
                                item.subMenu ? (<div onClick={() => setShow(show == index ? null : index)} className='sd flex items-center gap-3 mt-3 rounded-md p-2 hover:bg-linear-to-r hover:from-green-500 hover:via-emerald-500 hover:to-teal-500 transition ease-in duration-200'>
                                    {item.icon}
                                    {showNav && <p>{item.title}</p>}
                                    <IoMdArrowDropright className={`ml-auto transition-all ease-in-out duration-150 ${show == index ? "rotate-90" : ""}`} />
                                </div>) : (<Link to={item.path} className='sd flex items-center gap-3 mt-3 rounded-md p-2 hover:bg-linear-to-r hover:from-green-500 hover:via-emerald-500 hover:to-teal-500 transition ease-in duration-200'>
                                    {item.icon}
                                    {showNav && <p>{item.title}</p>}
                                </Link>)
                            }
                            <ul className={`flex flex-col ml-3 ${showNav ? "" : "absolute top-0 translate-x-15"} `}>
                                {show == index &&
                                    item.subMenu.map(p => (
                                        <Link to={p.path} className='sd hover:bg-linear-to-r hover:from-green-500 hover:via-emerald-500 hover:to-teal-500 transition ease-in duration-200 px-2 py-1 mt-2 rounded-md'>{p.name}</Link>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }

            </div>
        </div>
    );
}

export default NavbarAdmin;