import React from 'react';
import SlideBanner from '../slides/SlideBanner';
import { BsHandbag } from 'react-icons/bs';
import { GiRockingChair } from 'react-icons/gi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FaChevronLeft, FaChevronRight, FaHotel } from 'react-icons/fa';
import { FaArrowRightLong, FaHeartCircleCheck } from 'react-icons/fa6';
import { IoIosArrowDown, IoIosExpand } from 'react-icons/io';
import { PiLightning } from 'react-icons/pi';
import LOGO from "../../../assets/LOGO.png"

function Home(props) {
    return (
        <div>
            <SlideBanner />
            <div className='mx-5 my-5 '>
                <ul className='flex justify-around py-3'>
                    <div className='rounded-xl p-2 hover:bg-[#ebc15e] hover:text-white w-41 text-nowrap text-center'>
                        <BsHandbag className='m-auto mb-2 text-2xl' />
                        <p>HÀNH LÍ TRẢ TRƯỚC</p>
                    </div>
                    <div className='rounded-xl p-2 hover:bg-[#ebc15e] hover:text-white w-41 text-nowrap text-center'>
                        <GiRockingChair className='m-auto mb-2 text-2xl' />
                        <p>NÂNG HẠNG GHẾ</p>
                    </div>
                    <div className='rounded-xl p-2 hover:bg-[#ebc15e] hover:text-white w-41 text-nowrap text-center'>
                        <HiOutlineShoppingBag className='m-auto mb-2 text-2xl' />
                        <p>MUA SẮM</p>
                    </div>
                    <div className='rounded-xl p-2 hover:bg-[#ebc15e] hover:text-white w-41 text-nowrap text-center'>
                        <FaHotel className='m-auto mb-2 text-2xl' />
                        <p>KHÁCH SẠN & TOUR</p>
                    </div>
                    <div className='rounded-xl p-2 hover:bg-[#ebc15e] hover:text-white w-41 text-nowrap text-center'>
                        <FaHeartCircleCheck className='m-auto mb-2 text-2xl ' />
                        <p>BẢO HIỂM</p>
                    </div>
                    <div className='rounded-xl p-2 hover:bg-[#ebc15e] hover:text-white w-41 text-nowrap text-center'>
                        <IoIosExpand className='m-auto mb-2 text-2xl' />
                        <p>CÁC DỊCH VỤ KHÁC</p>
                    </div>
                </ul>
            </div>
            {/* tin nhanh */}
            <div className='mx-5 my-5 flex justify-between items-center border border-gray-400 rounded-2xl'>
                <div className='p-1 flex items-center gap-4'>
                    <div className='flex items-center gap-2 text-xl bg-[#b8dbebeb] rounded-xl p-2 [clip-path:polygon(85%_0,_100%_50%,_85%_100%,_0%_100%,_0_50%,_0%_0%)] pr-4'>
                        <PiLightning />
                        <p className='text-[#2c5f6d] font-bold'>Tin nhanh</p>
                    </div>
                    <p>Thông báo về việc tăng mức thuế khách du lịch quốc tế cho chặng bay xuất phát từ Nhật Bản</p>
                </div>
                <div className='flex gap-3 pr-3'>
                    <h1>2026-02-26</h1>
                    <ul className='flex items-center gap-1'>
                        <FaChevronLeft />
                        <p>3/3</p>
                        <FaChevronRight />
                    </ul>
                </div>
            </div>
            <h1 className='mx-5 my-15 text-6xl flex gap-3'>Trọn vẹn <p className='text-[#2c5f6d]'>trải nghiệm</p></h1>
            {/* all dịch vụ */}
            <div className='mx-5 my-6 flex justify-between items-center  '>
                <div className='text-xl text-[#2c5f6d] p-2 flex items-end gap-2'>
                    <p>Xem tất cả các dịch vụ</p>
                    <FaArrowRightLong />
                </div>
                <div className='flex gap-4 bg-gray-100 rounded-full p-2'>
                    <span className='flex items-center gap-2 bg-white rounded-full p-3 hover:bg-gray-200 border border-transparent hover:border-[#2c5f6d]'>
                        <p className=''>Dịch vụ mặt đất </p>
                        <IoIosArrowDown />
                    </span>
                    <span className='flex items-center gap-2 bg-[#5298ab80] rounded-full p-3 hover:bg-white border border-transparent hover:border-[#2c5f6d]'>
                        <p className='text-[#2c5f6d] font-semibold'>Phổ thông</p>
                        <IoIosArrowDown />
                    </span>
                </div>
            </div>
            <div class="mx-5 my-5 grid grid-cols-[1fr_2fr] ">
                {/* trên */}
                <div className='col-span-1'>
                    <div className='bg-[#2c5f6d] text-white text-2xl font-semibold py-5 px-7 rounded-t-2xl'>Phổ thông</div>
                </div>
                <div className='col-span-1 '>
                    <div className='bg-[#2c5f6d] text-white text-2xl font-semibold   py-5 px-7 rounded-t-2xl flex justify-center ' >
                        <p>AirNova</p>
                        <img className='w-15' src={LOGO} alt="" />
                    </div>
                </div>
                {/* dưới */}
                <div className='col-span-1 border border-gray-200 border-dashed rounded-xl'>
                    <div className='mx-5 mt-6 mb-9'>
                        <span className='flex justify-between items-center mb-2 p-3 rounded-full text-[#2c5f6d] bg-[#5baabf80] border border-transparent hover:border-[#2c5f6d]'>
                            <p>Làm thủ tục</p>
                            <FaArrowRightLong />
                        </span>
                        <div className='rounded-full mb-2 border border-transparent hover:border-[#2c5f6d] ho'>
                            <span className='flex justify-between items-center p-3  text-[#2c5f6d]   '>
                                <p>Hành lý</p>
                                <FaArrowRightLong />
                            </span>
                            <hr className='text-gray-200' />
                        </div>
                        <div className='rounded-full mb-2 border border-transparent hover:border-[#2c5f6d] ho'>
                            <span className='flex justify-between items-center p-3  text-[#2c5f6d]'>
                                <p>Thông tin sân bay</p>
                                <FaArrowRightLong />
                            </span>
                            <hr className='text-gray-200' />
                        </div>
                        <div className='rounded-full mb-2 border border-transparent hover:border-[#2c5f6d] ho'>
                            <span className='flex justify-between items-center p-3  text-[#2c5f6d]   '>
                                <p>Chuẩn bị cho chuyến bay</p>
                                <FaArrowRightLong />
                            </span>
                            <hr className='text-gray-200' />
                        </div>
                    </div>
                </div>
                <div className='col-span-1 border border-gray-200 border-dashed rounded-xl'>
                    <div className='mx-5 my-5 grid grid-cols-3 gap-7 p-2'>
                        <div>
                            <img className='rounded-2xl w-70 h-73' src="https://www.vietnamairlines.com/content/dam/legacy-site-assets/Files/VNANewPage-Images/Travel%20Information/Check-in/Overview/Lamthutuc_online_Thumb.jpg" alt="" />
                            <div className='flex justify-between items-center p-3 text-[#2e6473] font-semibold'>
                                <p>Làm thủ tục trực tuyến</p>
                                <FaArrowRightLong />
                            </div>
                        </div>
                        <div>
                            <img className='rounded-2xl w-70 h-73' src="https://images.pexels.com/photos/3943947/pexels-photo-3943947.jpeg" alt="" />
                            <div className='flex justify-between items-center p-3 text-[#2e6473] font-semibold'>
                                <p>Làm thủ tục tại kiosk</p>
                                <FaArrowRightLong />
                            </div>
                        </div>
                        <div>
                            <img className='rounded-2xl w-70 h-73' src="https://www.vietnamairlines.com/content/dam/legacy-site-assets/Files/VNANewPage-Images/Travel%20Information/Check-in/Overview/Lamthutuc_taisanbay_Thumb.jpg" alt="" />
                            <div className='flex justify-between items-center p-3 text-[#2e6473] font-semibold'>
                                <p>Làm thủ tục tại sân bay</p>
                                <FaArrowRightLong />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;