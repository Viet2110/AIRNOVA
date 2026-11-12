import {
    FaCreditCard,
    FaPlus,
    FaPaypal,
    FaTrash,
    FaCheckCircle,
    FaLock
} from "react-icons/fa";
import {
    FaCcVisa,
    FaCcMastercard
} from "react-icons/fa";

function ThanhToan(props) {
    return (
        <div className="space-y-5">

            {/* TIÊU ĐỀ */}
            <div>
                <h2 className="text-xl font-bold text-gray-800">
                    Phương thức thanh toán
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Quản lý thẻ và tài khoản thanh toán của bạn.
                </p>
            </div>

            {/* DANH SÁCH THẺ */}
            <div className="bg-white border rounded-lg p-5">

                <div className="flex justify-between items-center mb-5">
                    <h3 className="font-bold text-gray-800">
                        Thẻ đã liên kết
                    </h3>

                    <span className="text-xs text-gray-400">
                        2 phương thức
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-4">

                    {/* VISA */}
                    <div className="border rounded-lg p-5 hover:border-blue-400">

                        <div className="flex justify-between items-center">
                            <FaCcVisa className="text-5xl text-blue-700" />

                            <span className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded-full">
                                Mặc định
                            </span>
                        </div>

                        <p className="text-sm font-semibold mt-5">
                            Visa
                        </p>

                        <p className="text-gray-600 tracking-widest mt-2">
                            **** **** **** 1234
                        </p>

                        <div className="flex justify-between items-center mt-5 pt-3 border-t">
                            <p className="text-xs text-gray-400">
                                Hết hạn 12/28
                            </p>

                            <button className="text-red-400 hover:text-red-600">
                                <FaTrash />
                            </button>
                        </div>
                    </div>

                    {/* MASTERCARD */}
                    <div className="border rounded-lg p-5 hover:border-blue-400">

                        <div className="flex justify-between items-center">
                            <FaCcMastercard className="text-5xl text-red-500" />

                            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                                Đã liên kết
                            </span>
                        </div>

                        <p className="text-sm font-semibold mt-5">
                            Mastercard
                        </p>

                        <p className="text-gray-600 tracking-widest mt-2">
                            **** **** **** 5678
                        </p>

                        <div className="flex justify-between items-center mt-5 pt-3 border-t">
                            <p className="text-xs text-gray-400">
                                Hết hạn 08/29
                            </p>

                            <button className="text-red-400 hover:text-red-600">
                                <FaTrash />
                            </button>
                        </div>
                    </div>

                </div>

                {/* THÊM THẺ */}
                <button className="w-full border border-dashed border-blue-400 text-blue-500 rounded-lg py-4 mt-5 flex justify-center items-center gap-2 hover:bg-blue-50">
                    <FaPlus />
                    <span className="text-sm font-semibold">
                        Thêm phương thức thanh toán
                    </span>
                </button>

            </div>

            {/* PAYPAL */}
            <div className="bg-white border rounded-lg p-5">

                <h3 className="font-bold text-gray-800 mb-4">
                    Ví điện tử
                </h3>

                <div className="flex items-center justify-between border rounded-lg p-4">

                    <div className="flex items-center gap-3">
                        <FaPaypal className="text-4xl text-blue-600" />

                        <div>
                            <p className="font-semibold text-sm">
                                PayPal
                            </p>

                            <p className="text-xs text-gray-400 mt-1">
                                Chưa liên kết tài khoản
                            </p>
                        </div>
                    </div>

                    <button className="text-blue-500 border border-blue-500 rounded-md px-4 py-2 text-sm font-semibold hover:bg-blue-50">
                        Liên kết
                    </button>

                </div>

            </div>

            {/* BẢO MẬT */}
            <div className="bg-blue-50 rounded-lg p-4 flex gap-3 items-start">

                <FaLock className="text-blue-500 text-xl mt-1" />

                <div>
                    <p className="text-sm font-semibold text-gray-700">
                        Thanh toán an toàn
                    </p>

                    <p className="text-xs text-gray-500 mt-1 leading-5">
                        Thông tin thanh toán của bạn được bảo vệ.
                        Airnova không hiển thị đầy đủ thông tin thẻ
                        ngân hàng trên giao diện.
                    </p>
                </div>

            </div>

        </div>
    );
}

export default ThanhToan;
