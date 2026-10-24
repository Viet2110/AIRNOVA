import { Button } from '@mui/material';
import React, { useContext, useState } from 'react';
import { CiMail } from 'react-icons/ci';
import { FaRegBell, FaRegUserCircle } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { AuthContext } from '../../../contexts/AuthProvider';


function HeaderAdmin(props) {
    const [showUser, setShowUser] = useState(false);
    const { logout } = useContext(AuthContext);
    return (
        <div className='sd text-white py-3 px-4 flex justify-between'>
            <h1 className='text-2xl'>Welcome</h1>
            <div className='flex items-center gap-5 text-2xl'>
                <IoIosSearch />
                <FaRegBell />
                <CiMail />
                <FaRegUserCircle onClick={() => setShowUser(!showUser)} />
                <div className='relative'>
                    <div className={`absolute bg-white text-black translate-y-7 -translate-x-60 ' ${showUser ? "rounded-xl" : "hidden"}`}>
                        <div className='flex gap-2 p-3'>
                            <button className='bg-[#5d84f0] rounded-full px-4 text-white text-2xl '>V</button>
                            <div className='text-xs'>
                                <p>Việt Tuấn</p>
                                <p>viettuanthai@gmail.com</p>
                                <p>Google Drive</p>
                            </div>
                        </div>
                        <hr className='text-gray-400' />
                        <div className='flex justify-between p-2'>
                            <button className='px-2 py-1 rounded-2xl border border-gray-400 text-xs font-semibold hover:bg-gray-200'>Add Account</button>
                            <button onClick={logout} className='px-2 py-1 rounded-2xl border border-gray-400 text-xs font-semibold hover:bg-gray-200'>Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderAdmin;