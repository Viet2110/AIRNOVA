import * as React from 'react';
import {
    FaSearch,
    FaFilter,
} from "react-icons/fa";
import { PayContext } from '../../../contexts/PayProvider';
function DanhSachGiaoDich(props) {
    const pays = React.useContext(PayContext);
    console.log(pays.map(item => ({
        id: item.id,
        transactionId: item.transactionId,
        createAt: item.createAt
    })));
    return (
        <div className="space-y-5">
            {/* TIÊU ĐỀ */}
            <div>
                <h2 className="text-xl font-bold text-gray-800">
                    Danh sách giao dịch
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Theo dõi tất cả giao dịch thanh toán của bạn.
                </p>
            </div>
            {/* TỔNG QUAN */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white border rounded-lg p-5">
                    <p className="text-sm text-gray-500">
                        Tổng giao dịch
                    </p>
                    <h2 className="text-2xl font-bold text-gray-800 mt-2">
                        12
                    </h2>
                </div>
                <div className="bg-white border rounded-lg p-5">
                    <p className="text-sm text-gray-500">
                        Thành công
                    </p>
                    <h2 className="text-2xl font-bold text-green-500 mt-2">
                        10
                    </h2>
                </div>

                <div className="bg-white border rounded-lg p-5">
                    <p className="text-sm text-gray-500">
                        Tổng chi tiêu
                    </p>
                    <h2 className="text-xl font-bold text-blue-600 mt-2">
                        15.500.000đ
                    </h2>
                </div>

            </div>
            {/* TÌM KIẾM VÀ BỘ LỌC */}
            <div className="bg-white border rounded-lg p-5">

                <div className="flex gap-3">

                    <div className="flex-1 relative">
                        <FaSearch className="absolute left-3 top-3.5 text-gray-400" />

                        <input
                            type="text"
                            placeholder="Tìm kiếm mã giao dịch..."
                            className="w-full border rounded-md pl-10 pr-3 py-3 text-sm outline-none focus:border-blue-500"
                        />
                    </div>

                    <button className="border rounded-md px-5 flex items-center gap-2 text-sm text-gray-600 hover:bg-gray-50">
                        <FaFilter />
                        Bộ lọc
                    </button>
                </div>
            </div>
            {/* BẢNG GIAO DỊCH */}
            <div className="bg-white border rounded-lg overflow-hidden">

                <div className="p-5 border-b">
                    <h3 className="font-bold text-gray-800">
                        Lịch sử giao dịch
                    </h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-gray-500 text-xs">
                            <tr className='text-center'>
                                <th className="px-5 py-4">MÃ GIAO DỊCH</th>
                                <th className="px-5 py-4">NGÀY</th>
                                <th className="px-5 py-4">PHƯƠNG THỨC</th>
                                <th className="px-5 py-4">SỐ TIỀN</th>
                                <th className="px-5 py-4">TRẠNG THÁI</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {/* GIAO DỊCH */}
                            {
                                pays?.map((item) => (
                                    <tr key={item.id} className="border-t text-center hover:bg-gray-50">
                                        <td className="px-5 py-5 text-gray-500">
                                            {item.transactionId}
                                        </td>
                                        <td className="px-5 py-5 text-gray-500">
                                            {
                                                item.createAt?.toDate ? item.createAt.toDate().toLocaleDateString("vi-VN")
                                                    : item.createAt ? new Date(item.createAt).toLocaleDateString("vi-VN")
                                                        : "Chưa có ngày"
                                            }
                                        </td>

                                        <td className="px-5 py-5 text-gray-600">
                                            {item.method}
                                        </td>

                                        <td className="px-5 py-5 font-semibold text-gray-500">
                                            {item.price.toLocaleString('vi-VN')} VND
                                        </td>

                                        <td className="px-5 py-5">
                                            <span className="bg-green-50 text-green-600 px-3 py-1.5 rounded-full text-xs font-semibold">
                                                Thành công
                                            </span>
                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                </div>

                {/* PHÂN TRANG */}
                <div className="border-t p-4 flex justify-between items-center">
                    <p className="text-xs text-gray-400">
                        Hiển thị 3 trong 12 giao dịch
                    </p>

                    <div className="flex gap-2">
                        <button className="border px-3 py-1.5 rounded text-sm text-gray-400">
                            Trước
                        </button>

                        <button className="bg-blue-500 text-white px-3 py-1.5 rounded text-sm">
                            1
                        </button>

                        <button className="border px-3 py-1.5 rounded text-sm">
                            2
                        </button>

                        <button className="border px-3 py-1.5 rounded text-sm">
                            Sau
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default DanhSachGiaoDich;
