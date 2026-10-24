import { Autocomplete, TextField } from '@mui/material';
import React, { useContext, useMemo } from 'react';
import { FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa';
import { GrSubtract } from 'react-icons/gr';
import { LuArrowLeftRight } from 'react-icons/lu';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { TbCircleDashedPlus } from 'react-icons/tb';
import { cities } from '../../../utils/data';
import { useState } from 'react';
import { getObjectById } from '../../../services/repository';
import { RiDiscountPercentLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { BookingContext } from '../../../contexts/BookingProvider';

function Search(props) {
    const { booking, setBooking } = useContext(BookingContext);
    const [showPassenger, setShowPassenger] = useState(false); // hiện hành khách
    
    const handleChange = () => {
        setBooking({
            ...booking, from: booking.to, to: booking.from
        });
    }
    const handleClickInputSearch = (e) => {
        setBooking({ ...booking, [e.target.name]: e.target.value });
    }
    //cộng số lượng hành khách
    const handlePlus = (id) => {
        setBooking(pre => {
            return { ...pre, passengerList: pre.passengerList.map((p) => p.id == id ? { ...p, quantity: p.quantity + 1 } : p) }
        })
    }
    //trừ số lượng hành khách
    const handleSubtract = (id) => {
        setBooking(pre => {
            return { ...pre, passengerList: pre.passengerList.map((p) => p.id == id ? { ...p, quantity: Math.max(0, p.quantity - 1) } : p) }
        })
    }
    //cộng tất cả số lượng hành khách lại
    const total = useMemo(() => {
        return booking.passengerList.reduce((sum, item) => sum + item.quantity, 0)
    }, [booking]);
    return (
        <div className='absolute z-50 bg-white bottom-4 w-[80vw] left-1/2 -translate-x-1/2 rounded-xl '>
            <div className='px-2 py-3 flex justify-around shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] '>
                <p>Mua vé</p>
                <p>Quản lý đặt chỗ</p>
                <p>Làm thủ tục</p>
                <p>Trạng thái chuyến bay</p>
                <p>Tra cứu lịch bay</p>
            </div>
            <div className='flex gap-4 pl-10 py-2 mt-3'>
                <button onClick={() => setBooking({ ...booking, is_round_trip: true })} className={`px-4 py-2  shadow-2xl rounded-full ${booking.is_round_trip ? "bg-amber-300" : ""}`}>Khứ hồi</button>
                <button onClick={() => setBooking({ ...booking, is_round_trip: false })} className={`px-4 py-2  shadow-2xl rounded-full ${booking.is_round_trip ? "" : "bg-amber-300"}`}>Một chiều</button>
            </div>
            <div className='flex justify-between items-center gap-1 mx-10 my-3 '>
                {/* Đi */}
                <div className=''>
                    <div className='flex items-center gap-2'>
                        <FaPlaneDeparture />
                        <p>Từ</p>
                    </div>
                    <div className='flex items-center gap-2 mt-2'>
                        <button className='text-5xl'>{getObjectById(cities, booking.from)?.code}</button>
                        <Autocomplete
                            disablePortal
                            options={cities}
                            sx={{ width: 300 }}
                            getOptionLabel={(option) => option.name}
                            onChange={(event, value) => handleClickInputSearch({ target: { name: "from", value: value?.id } })}
                            renderInput={(params) =>
                                <TextField {...params} placeholder='Chọn điểm đi' sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            border: "none",
                                        },
                                        "&:hover fieldset": {
                                            border: "none",
                                        },
                                        "&.Mui-focused fieldset": {
                                            border: "none",
                                        },
                                    },
                                }} />} /></div>
                    <hr className='w-xl mt-2 text-gray-400' />
                </div>
                {/* Đổi */}
                <div>
                    <button onClick={() => handleChange()} className='p-3 bg-gray-100 rounded-full'>
                        <LuArrowLeftRight />
                    </button>
                </div>
                {/* Đến */}
                <div>
                    <div className='flex items-center gap-2'>
                        <FaPlaneArrival />
                        <p>Đến</p>
                    </div>
                    <div className='flex items-center gap-2 mt-2'>
                        <button className='text-5xl'>{getObjectById(cities, booking.to)?.code}</button>
                        <Autocomplete
                            disablePortal
                            options={cities}
                            sx={{ width: 300 }}
                            getOptionLabel={(option) => option.name}
                            onChange={(event, value) => handleClickInputSearch({ target: { name: "to", value: value?.id } })}
                            renderInput={(params) =>
                                <TextField {...params} placeholder='Chọn điểm đi' sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            border: "none",
                                        },
                                        "&:hover fieldset": {
                                            border: "none",
                                        },
                                        "&.Mui-focused fieldset": {
                                            border: "none",
                                        },
                                    },
                                }} />} /></div>

                    <hr className='w-xl mt-2 text-gray-400' />
                </div>
            </div>
            <div className='flex items-center gap-12 mx-10 my-3'>
                {/* Lịch */}
                <div className=''>
                    <div className='flex gap-10'>
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <MdOutlineCalendarMonth />
                                <p>Ngày đi</p>
                            </div>
                            <TextField onChange={handleClickInputSearch} name='startDate' type='date' variant="outlined" />
                        </div>
                        {booking.is_round_trip ? (<div>
                            <div className="flex items-center gap-2 mb-3">
                                <MdOutlineCalendarMonth />
                                <p>Ngày về</p>
                            </div>
                            <TextField onChange={handleClickInputSearch} name='endDate' type='date' variant="outlined" />
                        </div>) : "Không có"}

                    </div>
                    <hr className='w-xl mt-4 text-gray-400' />
                </div>
                {/* Hành khách */}
                <div>
                    <div className=' relative '>
                        <div className="flex items-center gap-2 mb-3">
                            <MdOutlineCalendarMonth />
                            <p >Hành khách</p>
                        </div>
                        <p onClick={() => setShowPassenger(!showPassenger)} className='p-3 mb-4 font-bold text-2xl'>{total} Hành khách</p>
                        <div className={`absolute border border-gray-400 rounded-xl mt-2 w-xl bg-white bottom-0 translate-y-full ${showPassenger ? "" : "hidden"}`}>
                            <p className='p-3'>Hành khách</p>
                            <hr className='text-gray-400' />
                            {
                                booking.passengerList.map((p, i) => (
                                    <div className='flex justify-between px-6 py-3'>
                                        <button onClick={() => handleSubtract(p.id)} className='bg-gray-200 px-4 rounded-full'><GrSubtract /></button>
                                        <div className='flex flex-col items-center'>
                                            <p className='font-bold'>{p.quantity} {p.title}</p>
                                            <p className='text-gray-400'>{p.condition}</p>
                                        </div>
                                        <button onClick={() => handlePlus(p.id)} className='px-4 text-5xl text-blue-300 '><TbCircleDashedPlus /></button>
                                    </div>
                                ))
                            }
                            <hr className='text-gray-400' />
                            <div className='p-3 flex justify-end'>
                                <button className='rounded-xl bg-[#f3c864] px-4 py-1 text-white'>Chọn</button>
                            </div>
                        </div>
                    </div>
                    <hr className='w-xl mb2 text-gray-400' />
                </div>
            </div>
            <div className='mx-5 my-4 flex justify-end gap-5'>
                <div className='flex items-center gap-2 text-[#488de79c]'>
                    <RiDiscountPercentLine className='' />
                    <p>Mã khuyến mãi</p>
                </div>
                <Link to={"/searchFlights"} className='bg-[#f3c864] text-white py-3 px-4 rounded-xl'>Tìm chuyến bay</Link>
            </div>
        </div>

    );
}

export default Search;