import React from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import { cities } from '../../../utils/data';
import { getObjectById } from '../../../services/repository';
import { BookingContext } from '../../../contexts/BookingProvider';
import { AirlineContext } from '../../../contexts/AirlineProvider';
import { SeatTypeContext } from '../../../contexts/SeatTypeProvider';
import { FlightContext } from '../../../contexts/FlightProvider';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { initialOptions } from '../../../utils/Contants';
import { addDocument } from '../../../services/firebasesService';
import { searchType } from '../../../types/Types';

function Pay(props) {
    const { booking , setBooking } = React.useContext(BookingContext);
    const flights = React.useContext(FlightContext);
    const airlines = React.useContext(AirlineContext);
    const seatTypes = React.useContext(SeatTypeContext);

    const TotalPrice = React.useMemo(() => {
        const chair = getObjectById(seatTypes, booking?.seatype_id);
        const quantity = booking?.passengerList.reduce((sum, item) => item.id != 3 ? sum + item.listPerson.length : sum, 0);
        return parseInt(chair?.price) * quantity;
    }, [booking, seatTypes]);
    const createSubscription = async (transactionId) => {
        try {
            const d = await addDocument("bookings", booking);
            const pay = {
                id_booking: d.id,
                transactionId: transactionId,
                method: "paypal",
                price: TotalPrice,
                createAt: new Date()
            }
            console.log("PAY trước khi lưu:", pay);
            await addDocument("pays", pay);
            setBooking(searchType);
        } catch (error) {
            console.log("Lỗi thanh toán:", error);
        }
    }
    return (
        <div className='grid grid-cols-3 gap-6 m-10 lg:m-20'>
            {/* Bên trái */}
            <div className='lg:col-span-2 col-span-3'>

                {/* Phương thức thanh toán */}
                <div className='bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden mb-5'>

                    {/* Tiêu đề */}
                    <div className='bg-[#3975c6] text-white p-5'>
                        <h2 className='text-xl font-bold'>
                            Bạn muốn thanh toán thế nào?
                        </h2>
                    </div>
                    {/* Digital Wallet */}
                    <div className='flex items-center gap-4 p-5 border-b border-gray-100'>
                        <input type="radio" className='w-5 h-5' />
                        <p className='flex-1 font-semibold'>Digital Wallet</p>
                        <span className='text-sm font-semibold'>Apple Pay | ZaloPay | MoMo</span>
                    </div>

                    {/* Ngân hàng di động */}
                    <div className='flex items-center gap-4 p-5 border-b border-gray-100'>
                        <input type="radio" className='w-5 h-5' />
                        <p className='flex-1 font-semibold'>Ngân hàng di động</p>
                        <span>🏦</span>
                    </div>

                    {/* VietinBank */}
                    <div className='flex items-center gap-4 p-5 border-b border-gray-100'>
                        <input type="radio" className='w-5 h-5' />
                        <p className='flex-1 font-semibold'>Chuyển tiền qua VietinBank</p>
                        <span className='text-sm font-semibold'>VietinBank</span>
                    </div>

                    {/* Thẻ thanh toán */}
                    <div className='flex items-center gap-4 p-5 border-b border-gray-100'>
                        <input type="radio" className='w-5 h-5' />
                        <p className='flex-1 font-semibold'>Thẻ thanh toán</p>
                        <span className='text-sm font-semibold'>VISA | Mastercard | JCB</span>
                    </div>
                    {/* PayPal */}
                    <div className='flex items-center gap-4 p-5 border-b border-gray-100'>
                        <input type="radio" className='w-5 h-5' />
                        <p className='flex-1 font-semibold'>PayPal</p>
                        <span className='text-blue-600 font-bold italic text-lg'>PayPal</span>
                    </div>
                </div>

                {/* Mã giảm giá */}
                <div className='bg-white rounded-lg border border-gray-200 shadow-sm p-5 flex justify-between items-center'>
                    <p className='font-semibold'>Áp dụng mã giảm giá hoặc phiếu quà tặng</p>
                    <button className='text-blue-600 font-semibold'>Thêm</button>
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

                    <PayPalScriptProvider options={initialOptions}>
                        <PayPalButtons
                            style={{ layout: "vertical" }}
                            createOrder={(data, actions) => {
                                const dollar = (TotalPrice / 26000).toFixed(2);
                                return actions.order.create({
                                    purchase_units: [{
                                        amount: {
                                            value: dollar
                                        }
                                    }]
                                });
                            }}
                            onApprove={(data, actions) => {
                                return actions.order.capture().then((details) => {
                                    const transactionId = details.id; // Lấy ID giao dịch từ PayPal
                                    createSubscription(transactionId);
                                });
                            }}
                            onError={(err) => {
                                console.error("PayPal error:", err);
                            }}
                        />
                    </PayPalScriptProvider>
                </div>
            </div>
        </div>
    );
}

export default Pay;