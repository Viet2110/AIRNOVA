import {
    FaMoneyBillWave,
    FaSearch,
    FaPlane,
    FaClock,
    FaCheckCircle,
    FaTimesCircle,
    FaReceipt
} from "react-icons/fa";

function HoanTien(props) {
    return (
        <div className="space-y-5">

            {/* TIÊU ĐỀ */}
            <div>
                <h2 className="text-xl font-bold text-gray-800">
                    Thanh toán & Hoàn tiền
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Theo dõi các khoản thanh toán và yêu cầu hoàn tiền.
                </p>
            </div>

            {/* TỔNG QUAN */}
            <div className="grid grid-cols-3 gap-4">

                <div className="bg-white border rounded-lg p-5">
                    <FaMoneyBillWave className="text-2xl text-blue-500" />
                    <p className="text-sm text-gray-500 mt-3">
                        Tổng tiền đã thanh toán
                    </p>
                    <h3 className="text-xl font-bold mt-2">
                        15.500.000đ
                    </h3>
                </div>

                <div className="bg-white border rounded-lg p-5">
                    <FaClock className="text-2xl text-yellow-500" />
                    <p className="text-sm text-gray-500 mt-3">
                        Đang chờ hoàn tiền
                    </p>
                    <h3 className="text-xl font-bold mt-2">
                        2.000.000đ
                    </h3>
                </div>

                <div className="bg-white border rounded-lg p-5">
                    <FaCheckCircle className="text-2xl text-green-500" />
                    <p className="text-sm text-gray-500 mt-3">
                        Đã hoàn tiền
                    </p>
                    <h3 className="text-xl font-bold mt-2">
                        3.000.000đ
                    </h3>
                </div>

            </div>

            {/* TÌM KIẾM */}
            <div className="bg-white border rounded-lg p-5">
                <h3 className="font-semibold mb-4">
                    Tìm kiếm yêu cầu hoàn tiền
                </h3>

                <div className="flex gap-3">
                    <div className="flex-1 relative">
                        <FaSearch className="absolute left-3 top-3.5 text-gray-400" />

                        <input
                            type="text"
                            placeholder="Nhập mã giao dịch hoặc mã đặt chỗ..."
                            className="w-full border rounded-md pl-10 pr-3 py-3 text-sm outline-none focus:border-blue-500"
                        />
                    </div>

                    <button className="bg-blue-500 text-white px-6 rounded-md text-sm font-semibold hover:bg-blue-600">
                        Tìm kiếm
                    </button>
                </div>
            </div>

            {/* DANH SÁCH HOÀN TIỀN */}
            <div className="bg-white border rounded-lg p-5">

                <div className="flex justify-between items-center mb-5">
                    <h3 className="font-bold text-gray-800">
                        Lịch sử hoàn tiền
                    </h3>

                    <span className="text-sm text-gray-400">
                        3 yêu cầu
                    </span>
                </div>

                {/* YÊU CẦU 1 */}
                <div className="border rounded-lg p-5 mb-4">

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-50 p-3 rounded-lg">
                                <FaPlane className="text-blue-500 text-xl" />
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-800">
                                    Hoàn tiền vé máy bay
                                </h4>
                                <p className="text-xs text-gray-400 mt-1">
                                    Mã đặt chỗ: ANV123456
                                </p>
                            </div>
                        </div>

                        <span className="bg-yellow-50 text-yellow-600 px-3 py-2 rounded-full text-xs font-semibold">
                            Đang xử lý
                        </span>
                    </div>

                    <div className="grid grid-cols-3 gap-3 border-t mt-5 pt-4">
                        <div>
                            <p className="text-xs text-gray-400">
                                Số tiền hoàn
                            </p>
                            <p className="font-bold text-gray-800 mt-1">
                                2.000.000đ
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-400">
                                Ngày yêu cầu
                            </p>
                            <p className="font-semibold text-sm mt-1">
                                05/11/2026
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-400">
                                Phương thức
                            </p>
                            <p className="font-semibold text-sm mt-1">
                                Visa ****1234
                            </p>
                        </div>
                    </div>

                </div>

                {/* YÊU CẦU 2 */}
                <div className="border rounded-lg p-5 mb-4">

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="bg-green-50 p-3 rounded-lg">
                                <FaReceipt className="text-green-500 text-xl" />
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-800">
                                    Hoàn tiền vé máy bay
                                </h4>
                                <p className="text-xs text-gray-400 mt-1">
                                    Mã đặt chỗ: ANV123457
                                </p>
                            </div>
                        </div>

                        <span className="bg-green-50 text-green-600 px-3 py-2 rounded-full text-xs font-semibold">
                            Đã hoàn tiền
                        </span>
                    </div>

                    <div className="grid grid-cols-3 gap-3 border-t mt-5 pt-4">
                        <div>
                            <p className="text-xs text-gray-400">
                                Số tiền hoàn
                            </p>
                            <p className="font-bold text-green-600 mt-1">
                                3.000.000đ
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-400">
                                Ngày yêu cầu
                            </p>
                            <p className="font-semibold text-sm mt-1">
                                01/11/2026
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-400">
                                Phương thức
                            </p>
                            <p className="font-semibold text-sm mt-1">
                                Mastercard
                            </p>
                        </div>
                    </div>

                </div>

                {/* YÊU CẦU 3 */}
                <div className="border rounded-lg p-5">

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="bg-red-50 p-3 rounded-lg">
                                <FaTimesCircle className="text-red-500 text-xl" />
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-800">
                                    Hoàn tiền vé máy bay
                                </h4>
                                <p className="text-xs text-gray-400 mt-1">
                                    Mã đặt chỗ: ANV123458
                                </p>
                            </div>
                        </div>

                        <span className="bg-red-50 text-red-500 px-3 py-2 rounded-full text-xs font-semibold">
                            Từ chối
                        </span>
                    </div>

                    <div className="grid grid-cols-3 gap-3 border-t mt-5 pt-4">
                        <div>
                            <p className="text-xs text-gray-400">
                                Số tiền yêu cầu
                            </p>
                            <p className="font-bold text-gray-800 mt-1">
                                1.500.000đ
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-400">
                                Ngày yêu cầu
                            </p>
                            <p className="font-semibold text-sm mt-1">
                                28/10/2026
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-400">
                                Phương thức
                            </p>
                            <p className="font-semibold text-sm mt-1">
                                PayPal
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            {/* LƯU Ý */}
            <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-gray-700">
                    Lưu ý về hoàn tiền
                </p>
                <p className="text-xs text-gray-500 mt-2 leading-5">
                    Thời gian hoàn tiền phụ thuộc vào phương thức thanh toán
                    và quy định của hãng hàng không.
                </p>
            </div>

        </div>
    );
}

export default HoanTien;
