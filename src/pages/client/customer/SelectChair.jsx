import * as React from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import { BookingContext } from '../../../contexts/BookingProvider';
import { getObjectById } from '../../../services/repository';
import { cities } from '../../../utils/data';
import { FlightContext } from '../../../contexts/FlightProvider';
import { AirlineContext } from '../../../contexts/AirlineProvider';
import { SeatTypeContext } from '../../../contexts/SeatTypeProvider';
import { AircraftContext } from '../../../contexts/AircraftProvider';
import { PiArmchairLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { HistoryPayContext } from '../../../contexts/HistoryPayProvider';

export default function SelectChair() {
    const { booking, setBooking } = React.useContext(BookingContext); // biến tạm
    const history = React.useContext(HistoryPayContext); // lịch sử giao dịch
    const flights = React.useContext(FlightContext);
    const airlines = React.useContext(AirlineContext);
    const seatTypes = React.useContext(SeatTypeContext);
    const aircrafts = React.useContext(AircraftContext);
    // hàm tính giá tiền giá 
    const TotalPrice = React.useMemo(() => {
        const chair = getObjectById(seatTypes, booking?.seatype_id);
        const quantity = booking?.passengerList.reduce((sum, item) => item.id != 3 ? sum + item.listPerson.length : sum, 0);
        return parseInt(chair?.price) * quantity;
    }, [booking, seatTypes]);

    const plane = React.useMemo(() => {
        return getObjectById(aircrafts, getObjectById(flights, booking.flight_id)?.aircraft_id)
    }, [aircrafts, booking]);

    const handleShow = (index) => {
        const check = plane?.listChair?.find(p => p.index == index);
        // some, id  index == index => hien thi cai ghe mau xam
        const checkChair = history?.some(t => t.flight_id == booking.flight_id && t?.listChair?.includes(index));
        if (checkChair) {
            return <img className='w-10 m-auto' src="https://cdn-icons-png.flaticon.com/128/9718/9718712.png" alt="" />;
        }
        return check ? <img className='h-12 rounded-xl p-1 sd' src={getObjectById(seatTypes, check.id_seatype).imgUrl} alt="" /> : <PiArmchairLight className='text-5xl opacity-0 text-gray-400 rounded-xl p-1 sd' />
    }

    const handleChooseChair = (index) => {
        const check = plane?.listChair?.find(p => p.index == index);
        const checkChair = history?.some(t => t.flight_id == booking.flight_id && t?.listChair?.includes(index));
        const quantity = booking?.passengerList.reduce((sum, item) => item.id != 3 ? sum + item.listPerson.length : sum, 0);
        if (checkChair) {
            alert("Ghế đã được đặt! Vui lòng chọn ghế khác.");
            return;
        }
        // kiểm tra ghế vừa chọn có đúng với loại ghế đã khi đặt vékhông 
        if (check.id_seatype != booking.seatype_id) {
            alert("Bạn đã chọn sai loại ghế ! Vui lòng chọn lại");
            return;
        }
        //kiểm tra ghế đã được chọn chưa và kiểm tra số ghế chọn có vượt quá số hành khách ko ?
        if (!booking?.listChair.includes(index) && booking?.listChair.length >= quantity) {
            alert("Bạn không được chọn thêm khi đã quá số người đã có ");
            return;
        }
        setBooking(pre => {
            return { ...booking, listChair: pre.listChair.includes(index) ? pre.listChair.filter(p => p != index) : [...pre.listChair, index] }
        })
    }
    return (
        <div className='grid grid-cols-3 gap-6 m-10 lg:m-20'>
            {/* Thông tin hành khách */}
            <div className='lg:col-span-2 '>
                {/* Dưới */}
                <div className='col-span-2 mt-4'>
                    {/* Ghế*/}
                    <div className='bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden mb-5'>
                        <div className='p-2'>
                            <div className='flex justify-around   '>
                                {
                                    seatTypes.map((item, index) => (
                                        <div className='gap-3 p-3' key={index}>
                                            <img className='w-10 m-auto' src={item.imgUrl} alt={item.name} />
                                            <p className='text-amber-300 mt-2'>{item.name}</p>
                                        </div>
                                    ))
                                }
                                <div className='p-3'>
                                    <img className='w-10 m-auto' src="https://cdn-icons-png.flaticon.com/128/9718/9718712.png" alt="" />
                                    <p className='text-amber-200 mt-2'>Ghế đã chọn</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-3'>
                        <div className='grid gap-4' style={{ gridTemplateColumns: `repeat(${plane?.columns}, minmax(0,1fr))` }} >
                            {
                                Array.from({ length: plane?.rows * plane?.columns }).map((_, index) => (
                                    <div onClick={() => handleChooseChair(index)} className={`col-span-1 rounded-xl ${booking.listChair?.includes(index) ? "bg-amber-200" : ""}`} key={index}>
                                        {handleShow(index)}
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Phải */}
            <div className='lg:col-span-1'>
                {/* Thông báo */}
                <div className='flex items-center gap-2 px-1 py-3 text-sm text-gray-600'>
                    <CiCircleCheck className='text-2xl' />
                    <span>Hãy hoàn tất đặt vé ngay!</span>
                </div>
                {/* Tóm tắt chuyến đi */}
                <div className='bg-white rounded-lg shadow-sm border border-gray-100 p-3 mb-4'>
                    <div className='flex items-center justify-between mb-3'>
                        <h2 className='text-xl font-bold'>Tóm tắt chuyến đi</h2>
                        <button className='text-blue-500 font-semibold text-sm'>
                            Chi tiết
                        </button>
                    </div>
                    {/* Chuyến đi */}
                    <div className='border border-gray-200 rounded-lg shadow-sm p-3 mb-2'>
                        <span className='bg-gray-100 text-gray-500 text-xs rounded-full px-2 py-1'>
                            Chuyến đi
                        </span>
                        <div className='grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-3'>
                            <div>
                                <p className='font-semibold text-sm'>{getObjectById(cities, booking?.from)?.name} ({getObjectById(cities, booking?.from)?.code})</p>
                                <p className='text-xs text-gray-500 mt-1'> {new Date(booking?.startDate).toLocaleDateString('vi-VN')}</p>
                                <p className='text-xs text-gray-500 mt-1'>09:15</p>
                            </div>
                            <div className='text-center min-w-19'>
                                <p className='text-xs text-gray-500'>1h 30m</p>
                                <div className='flex items-center gap-1 text-xs text-gray-500'>
                                    <span className='w-5 h-0.5 bg-gray-300'></span>
                                    <span className='whitespace-nowrap'>Bay thẳng</span>
                                    <span className='w-5 h-0.5 bg-gray-300'></span>
                                </div>
                            </div>
                            <div className='text-right'>
                                <p className='font-semibold text-sm'>{getObjectById(cities, booking?.to)?.name} ({getObjectById(cities, booking?.to)?.code})</p>
                                <p className='text-xs text-gray-500 mt-1'>{new Date(booking?.startDate).toLocaleDateString('vi-VN')}</p>
                                <p className='text-xs text-gray-500 mt-1'>10:45</p>
                            </div>
                        </div>

                        <div className='mt-3 space-y-1'>
                            <p className='text-xs font-semibold'>
                                <span className='text-orange-500 mr-2'>✈</span>
                                {getObjectById(airlines, getObjectById(flights, booking?.flight_id).airline_id)?.name}
                            </p>
                            <p className='text-xs text-gray-500 flex gap-1'>
                                <img src={getObjectById(seatTypes, booking?.seatype_id)?.imgUrl} className='w-4.5' alt="" />
                                {getObjectById(seatTypes, booking?.seatype_id)?.name}
                            </p>
                        </div>

                        <div className='flex flex-wrap gap-1 mt-3'>
                            <span className='border border-gray-300 rounded-full px-2 py-1 text-[11px] text-gray-500'>
                                Không áp dụng đổi lịch bay
                            </span>
                            <span className='border border-gray-300 rounded-full px-2 py-1 text-[11px] text-gray-500'>
                                Không được Hoàn Vé
                            </span>
                        </div>
                    </div>
                    {/* Chuyến về */}
                    {
                        booking?.is_round_trip ? (<div className='border border-gray-200 rounded-lg shadow-sm p-3'>
                            <span className='bg-gray-100 text-gray-500 text-xs rounded-full px-2 py-1'>
                                Chuyến về
                            </span>
                            <div className='grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-3'>
                                <div>
                                    <p className='font-semibold text-sm'>{getObjectById(cities, booking.to)?.name} ({getObjectById(cities, booking.to)?.code})</p>
                                    <p className='text-xs text-gray-500 mt-1'>{new Date(booking.endDate).toLocaleDateString('vi-VN')}</p>
                                    <p className='text-xs text-gray-500 mt-1'>11:45</p>
                                </div>

                                <div className='text-center min-w-19'>
                                    <p className='text-xs text-gray-500'>1h 25m</p>
                                    <div className='flex items-center gap-1 text-xs text-gray-500'>
                                        <span className='w-5 h-0.5 bg-gray-300'></span>
                                        <span className='whitespace-nowrap'>Bay thẳng</span>
                                        <span className='w-5 h-0.5 bg-gray-300'></span>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <p className='font-semibold text-sm'>{getObjectById(cities, booking.from)?.name} ({getObjectById(cities, booking.to)?.code})</p>
                                    <p className='text-xs text-gray-500 mt-1'>{new Date(booking.endDate).toLocaleDateString('vi-VN')}</p>
                                    <p className='text-xs text-gray-500 mt-1'>13:10</p>
                                </div>
                            </div>
                            <div className='mt-3 space-y-1'>
                                <p className='text-xs font-semibold'>
                                    <span className='text-orange-500 mr-2'>✈</span>
                                    {getObjectById(airlines, getObjectById(flights, booking.flight_id).airline_id)?.name}
                                </p>
                                <p className='text-xs text-gray-500 flex gap-1 '>
                                    <img src={getObjectById(seatTypes, booking.seatype_id)?.imgUrl} className='w-4.5' alt="" />
                                    {getObjectById(seatTypes, booking.seatype_id)?.name}
                                </p>
                            </div>
                            <div className='flex flex-wrap gap-1 mt-3'>
                                <span className='border border-gray-300 rounded-full px-2 py-1 text-[11px] text-gray-500'>
                                    Không áp dụng đổi lịch bay
                                </span>
                                <span className='border border-gray-300 rounded-full px-2 py-1 text-[11px] text-gray-500'>
                                    Không được hoàn vé
                                </span>
                            </div>
                        </div>) : ""}

                </div>
                {/* Chi tiết giá */}
                <div className='bg-white rounded-lg shadow-sm border border-gray-100 p-3'>
                    <h2 className='text-xl font-bold mb-3'>Chi tiết giá</h2>
                    {
                        booking?.passengerList.filter(z => z.id != 3).map((p, index) => (
                            p.listPerson.map((c, i) => (
                                <div className='flex justify-between mb-2'>
                                    <p className=''>{p.title} {i + 1}</p>
                                    <p>{parseInt(getObjectById(seatTypes, booking.seatype_id)?.price).toLocaleString('vi-VN')} VND</p>
                                </div>
                            ))
                        ))
                    }
                    <div className='border-t border-gray-100 pt-3 pb-3 flex items-center justify-between gap-2'>
                        <span className='font-medium'>Giá bạn trả</span>
                        <div className='flex items-center gap-1'>
                            <span className='text-orange-600 font-semibold text-base'>
                                {TotalPrice.toLocaleString('vi-VN')} VND
                            </span>

                        </div>
                    </div>
                    <div className='bg-gray-50 -mx-3 px-3 py-3 text-xs'>
                        <span className='text-orange-400 mr-1'>☆</span>
                        Kiếm 5.171.101 Sao Priority
                    </div>

                    <Link to={"/pay"} className='block w-full mt-4 mb-1 bg-[#ed6531] hover:bg-[#d95324] text-white font-semibold rounded-full py-3.5 text-center transition-colors'>
                        Tiếp tục
                    </Link>
                </div>
            </div>


        </div>
    );
}