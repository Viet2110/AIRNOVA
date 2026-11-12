import * as React from 'react';
import {
    FaSearch,
    FaPlane,
    FaTicketAlt,
    FaCalendarAlt,
    FaUsers,
    FaArrowRight,
} from "react-icons/fa";
import { PiSeatFill } from "react-icons/pi";
import { cities } from "../../../utils/data";
import { getObjectById } from "../../../services/repository";
import { SeatTypeContext } from '../../../contexts/SeatTypeProvider';
import { HistoryPayContext } from '../../../contexts/HistoryPayProvider';

function DatCho(props) {
    const history = React.useContext(HistoryPayContext);
    const seatTypes = React.useContext(SeatTypeContext);
    //Tính tổng số hành khách || p: tổng số khách đag đc cộng, item: từng loại khách trog mảng.

    const TotalPassenger = React.useMemo(() => {
        return history?.map((p) => p?.passengerList?.reduce((total, item) => total + (item.listPerson?.length || 0), 0) || 0) || [];
    }, [history]);
    return (
        <div className="space-y-5">
            {/* TIÊU ĐỀ */}
            <div>
                <h2 className="text-xl font-bold text-gray-800">
                    Đặt chỗ của tôi
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Quản lý và theo dõi các chuyến bay đã đặt của bạn.
                </p>
            </div>
            {/* TÌM KIẾM */}
            <div className="bg-white border rounded-lg p-5">
                <h3 className="font-semibold mb-4">
                    Tìm kiếm đặt chỗ
                </h3>
                <div className="flex gap-3">
                    <input
                        type="text"
                        placeholder="Nhập mã đặt chỗ hoặc mã vé"
                        className="flex-1 border rounded-md px-4 py-3 text-sm outline-none focus:border-blue-500"
                    />

                    <button className="bg-blue-500 text-white px-5 rounded-md flex items-center gap-2 text-sm">
                        <FaSearch />
                        Tìm kiếm
                    </button>
                </div>
            </div>
            {/* BỘ LỌC */}
            <div className="bg-white border rounded-lg p-5">
                <h3 className="font-semibold mb-4">
                    Danh sách đặt chỗ
                </h3>
                <div className="flex flex-wrap gap-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">
                        Tất cả
                    </button>
                    <button className="border px-4 py-2 rounded-md text-sm hover:bg-blue-50">
                        Chờ thanh toán
                    </button>
                    <button className="border px-4 py-2 rounded-md text-sm hover:bg-blue-50">
                        Đã thanh toán
                    </button>
                    <button className="border px-4 py-2 rounded-md text-sm hover:bg-blue-50">
                        Đã hoàn thành
                    </button>
                    <button className="border px-4 py-2 rounded-md text-sm hover:bg-blue-50">
                        Đã hủy
                    </button>
                </div>
            </div>
            {/* THẺ ĐẶT CHỖ */}
            {
                history?.map((p, index) => (
                    <div className="bg-white border rounded-lg p-5">
                        <div className="flex justify-between items-center mb-5">
                            <div>
                                <p className="text-xs text-gray-400">
                                    MÃ ĐẶT CHỖ
                                </p>
                                <h3 className="font-bold text-gray-800 mt-1">
                                    ANV123456
                                </h3>
                            </div>
                            <span className="bg-green-50 text-green-600 px-3 py-2 rounded-full text-xs font-semibold">
                                Đã thanh toán
                            </span>
                        </div>
                        {/* THÔNG TIN CHUYẾN BAY */}
                        <div className="border rounded-lg p-5">

                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-xs text-gray-400">
                                        ĐIỂM ĐI
                                    </p>
                                    <h2 className="text-2xl font-bold mt-1">
                                        {getObjectById(cities, p?.from)?.code}
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        {getObjectById(cities, p?.from)?.name}
                                    </p>
                                </div>
                                <div className="flex-1 px-5 text-center">
                                    <FaPlane className="text-blue-500 text-xl mx-auto" />
                                    <div className="border-t border-dashed border-blue-300 mt-2"></div>
                                    <p className="text-xs text-gray-400 mt-2">
                                        Bay thẳng
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-400">
                                        ĐIỂM ĐẾN
                                    </p>
                                    <h2 className="text-2xl font-bold mt-1">
                                        {getObjectById(cities, p?.to)?.code}
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        {getObjectById(cities, p?.to)?.name}
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-3 border-t mt-5 pt-4">
                                <div>
                                    <FaCalendarAlt className="text-blue-500 mb-2" />
                                    <p className="text-xs text-gray-400">
                                        Ngày khởi hành
                                    </p>
                                    <p className="text-sm font-semibold mt-1">
                                        {new Date(p?.startDate).toLocaleDateString('vi-VN')}
                                    </p>
                                </div>
                                <div>
                                    <FaUsers className="text-blue-500 mb-2" />
                                    <p className="text-xs text-gray-400">
                                        Hành khách
                                    </p>
                                    <p className="text-sm font-semibold mt-1">
                                        {TotalPassenger[index]} người
                                    </p>
                                </div>
                                <div>
                                    <PiSeatFill className="text-blue-500 mb-2" />
                                    <p className="text-xs text-gray-400">Loại ghế</p>
                                    <p className="text-sm font-bold mt-1">
                                        {getObjectById(seatTypes, p?.seatype_id)?.name}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* NÚT CHI TIẾT */}
                        <div className="flex justify-end mt-5">
                            <button className="flex items-center gap-2 text-blue-500 text-sm font-semibold hover:underline">
                                Chi tiết đặt chỗ
                                <FaArrowRight />
                            </button>
                        </div>

                    </div>
                ))
            }
            {/* HỖ TRỢ */}
            <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-3">
                <FaTicketAlt className="text-blue-500 text-2xl" />
                <div>
                    <p className="text-sm font-semibold text-gray-700">
                        Bạn muốn đặt thêm chuyến bay?
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                        Khám phá các hành trình và đặt vé ngay hôm nay.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default DatCho;
