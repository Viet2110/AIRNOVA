import React from 'react';
import Flower from '../../../assets/Flower.jpg';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineShoppingCart } from 'react-icons/md';
function Header(props) {
    return (
        <div className='relative'>
            <div className='absolute right-3 z-50'>
                {/* Search */}
                <div className='flex justify-end items-center gap-3 px-7 py-10 '>
                    <div className='flex items-center gap-2 p-2 bg-white rounded-xl w-72.5 h-10'>
                        <FiSearch />
                        <input type="text" placeholder='Tìm kiếm' className=' outline-none' />
                    </div>
                    <button className='flex items-center gap-2 text-xl text-white bg-[#710615a7] rounded-xl px-2 py-1.5'>
                        <img className='w-9' src="https://www.vietnamairlines.com/content/dam/vna/icons/languagenav/vn.svg" alt="" />
                        <p >VI</p>
                    </button>
                    <div className='text-white bg-[#710615a7] rounded-xl px-2 py-1.5'>
                        <MdOutlineShoppingCart className='text-2xl' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;