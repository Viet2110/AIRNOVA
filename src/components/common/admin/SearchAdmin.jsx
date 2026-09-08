import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';

function SearchAdmin({ handleClickOpen, title, handleSearch }) {
    return (
        <div className='text-white flex justify-between items-center'>
            <h1 className='text-white-400 text-2xl'>{title}</h1>
            <div className='flex items-center sd p-2 rounded-md'>
                <input onChange={handleSearch} className='w-100 outline-none' type="text" placeholder='Search Cities...' />
                <FaSearch />
            </div>
            <button onClick={handleClickOpen} className='sd flex gap-2 items-center py-3 px-6 rounded-2xl text-lg'>
                <IoMdAdd className='bg-white text-black rounded-full' />
            </button>
        </div>
    );
}

export default SearchAdmin;