import React from 'react';
import { CiMail } from 'react-icons/ci';
import { FaRegBell, FaRegUserCircle } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';

function HeaderAdmin(props) {
    return (
        <div className='sd text-white py-3 px-4 flex justify-between'>
            <h1 className='text-2xl'>Welcome</h1>
            <div className='flex items-center gap-5 text-2xl'>
                <IoIosSearch />
                <FaRegBell />
                <CiMail />
                <FaRegUserCircle />
            </div>
        </div>
    );
}

export default HeaderAdmin;