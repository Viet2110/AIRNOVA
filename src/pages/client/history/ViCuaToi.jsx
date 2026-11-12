import {
    FaWallet,
    FaPlus,
    FaArrowDown,
    FaArrowUp,
    FaCreditCard,
    FaHistory
} from "react-icons/fa";

function ViCuaToi(props) {
    return (
        <div className="space-y-5">
            {/* TIÊU ĐỀ */}
            <div>
                <h2 className="text-xl font-bold text-gray-800">
                    Ví của tôi
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Quản lý số dư và lịch sử giao dịch trong ví.
                </p>
            </div>

            {/* SỐ DƯ VÍ */}
            <div className="bg-gradient-to-r from-blue-400 to-blue-700 rounded-xl p-6 text-white">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-blue-100">
                            Số dư hiện tại
                        </p>

                        <h2 className="text-3xl font-bold mt-3">
                            0 VNĐ
                        </h2>
                    </div>

                    <div className="bg-white/20 p-4 rounded-full">
                        <FaWallet className="text-3xl" />
                    </div>
                </div>

                <div className="border-t border-white/20 mt-6 pt-4 flex justify-between">
                    <div>
                        <p className="text-xs text-blue-100">
                            Tổng tiền đã nạp
                        </p>
                        <p className="font-semibold mt-1">
                            0 VNĐ
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-blue-100">
                            Tổng tiền đã sử dụng
                        </p>
                        <p className="font-semibold mt-1">
                            0 VNĐ
                        </p>
                    </div>
                </div>
            </div>

            {/* CHỨC NĂNG VÍ */}
            <div className="grid grid-cols-2 gap-4">

                <button className="bg-white border rounded-lg p-5 flex items-center gap-3 hover:border-blue-400">
                    <div className="bg-blue-50 text-blue-500 p-3 rounded-lg">
                        <FaPlus className="text-xl" />
                    </div>

                    <div className="text-left">
                        <p className="font-semibold text-gray-800 text-sm">
                            Nạp tiền
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            Thêm tiền vào ví
                        </p>
                    </div>
                </button>

                <button className="bg-white border rounded-lg p-5 flex items-center gap-3 hover:border-blue-400">
                    <div className="bg-orange-50 text-orange-500 p-3 rounded-lg">
                        <FaCreditCard className="text-xl" />
                    </div>

                    <div className="text-left">
                        <p className="font-semibold text-gray-800 text-sm">
                            Liên kết thẻ
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            Quản lý thẻ ngân hàng
                        </p>
                    </div>
                </button>

            </div>

            {/* LỊCH SỬ GIAO DỊCH */}
            <div className="bg-white border rounded-lg p-5">

                <div className="flex justify-between items-center mb-5">
                    <h3 className="font-bold text-gray-800">
                        Lịch sử giao dịch
                    </h3>

                    <FaHistory className="text-gray-400" />
                </div>

                {/* GIAO DỊCH NẠP TIỀN */}
                <div className="flex justify-between items-center border-b py-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-50 p-3 rounded-full">
                            <FaArrowDown className="text-green-500" />
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-gray-800">
                                Nạp tiền vào ví
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                                Chưa có giao dịch
                            </p>
                        </div>
                    </div>

                    <p className="text-sm font-semibold text-green-500">
                        +0 VNĐ
                    </p>
                </div>

                {/* GIAO DỊCH THANH TOÁN */}
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-red-50 p-3 rounded-full">
                            <FaArrowUp className="text-red-500" />
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-gray-800">
                                Thanh toán vé máy bay
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                                Chưa có giao dịch
                            </p>
                        </div>
                    </div>

                    <p className="text-sm font-semibold text-red-500">
                        -0 VNĐ
                    </p>
                </div>

            </div>

            {/* THÔNG TIN */}
            <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-gray-700">
                    <FaWallet className="inline mr-2 text-blue-500" />
                    Ví Airnova
                </p>

                <p className="text-xs text-gray-500 mt-2 leading-5">
                    Sử dụng ví để quản lý các khoản thanh toán
                    và theo dõi lịch sử giao dịch khi đặt vé máy bay.
                </p>
            </div>

        </div>
    );
}

export default ViCuaToi;