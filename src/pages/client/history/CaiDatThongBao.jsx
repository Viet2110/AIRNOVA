import {
    FaBell,
    FaEnvelope,
    FaMobileAlt,
    FaPlane,
    FaCreditCard,
    FaTag,
    FaShieldAlt
} from "react-icons/fa";

function CaiDatThongBao(props) {
    return (
        <div className="space-y-5">

            <div>
                <h2 className="text-xl font-bold text-gray-800">
                    Cài đặt thông báo
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Tùy chỉnh cách bạn nhận thông báo từ Airnova.
                </p>
            </div>

            {/* KÊNH NHẬN THÔNG BÁO */}
            <div className="bg-white border rounded-lg p-5">
                <h3 className="font-bold text-gray-800 mb-5">
                    Kênh nhận thông báo
                </h3>

                {/* EMAIL */}
                <div className="flex justify-between items-center border-b py-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-50 p-3 rounded-lg">
                            <FaEnvelope className="text-blue-500 text-xl" />
                        </div>

                        <div>
                            <p className="font-semibold text-sm text-gray-800">
                                Email
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                                Nhận thông báo qua email cá nhân.
                            </p>
                        </div>
                    </div>

                    <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 accent-blue-500 cursor-pointer"
                    />
                </div>

                {/* SMS */}
                <div className="flex justify-between items-center border-b py-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-50 p-3 rounded-lg">
                            <FaMobileAlt className="text-green-500 text-xl" />
                        </div>

                        <div>
                            <p className="font-semibold text-sm text-gray-800">
                                Tin nhắn SMS
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                                Nhận thông báo qua số điện thoại.
                            </p>
                        </div>
                    </div>

                    <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 accent-blue-500 cursor-pointer"
                    />
                </div>

                {/* HỆ THỐNG */}
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-orange-50 p-3 rounded-lg">
                            <FaBell className="text-orange-500 text-xl" />
                        </div>

                        <div>
                            <p className="font-semibold text-sm text-gray-800">
                                Thông báo hệ thống
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                                Nhận thông báo trực tiếp trên Airnova.
                            </p>
                        </div>
                    </div>

                    <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 accent-blue-500 cursor-pointer"
                    />
                </div>
            </div>

            {/* LOẠI THÔNG BÁO */}
            <div className="bg-white border rounded-lg p-5">
                <h3 className="font-bold text-gray-800 mb-5">
                    Loại thông báo
                </h3>

                {/* CHUYẾN BAY */}
                <div className="flex justify-between items-center border-b py-4">
                    <div className="flex items-center gap-3">
                        <FaPlane className="text-blue-500 text-xl" />
                        <div>
                            <p className="text-sm font-semibold">
                                Thông tin chuyến bay
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                                Lịch bay, giờ bay và thay đổi chuyến bay.
                            </p>
                        </div>
                    </div>

                    <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 accent-blue-500 cursor-pointer"
                    />
                </div>

                {/* THANH TOÁN */}
                <div className="flex justify-between items-center border-b py-4">
                    <div className="flex items-center gap-3">
                        <FaCreditCard className="text-green-500 text-xl" />
                        <div>
                            <p className="text-sm font-semibold">
                                Thanh toán
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                                Xác nhận thanh toán và hoàn tiền.
                            </p>
                        </div>
                    </div>

                    <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 accent-blue-500 cursor-pointer"
                    />
                </div>

                {/* KHUYẾN MÃI */}
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center gap-3">
                        <FaTag className="text-orange-500 text-xl" />
                        <div>
                            <p className="text-sm font-semibold">
                                Khuyến mãi và ưu đãi
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                                Cập nhật chương trình giảm giá và ưu đãi.
                            </p>
                        </div>
                    </div>

                    <input
                        type="checkbox"
                        className="w-5 h-5 accent-blue-500 cursor-pointer"
                    />
                </div>
            </div>

            {/* BẢO MẬT */}
            <div className="bg-blue-50 rounded-lg p-4 flex gap-3">
                <FaShieldAlt className="text-blue-500 text-xl mt-1" />

                <div>
                    <p className="text-sm font-semibold text-gray-700">
                        Quyền riêng tư của bạn
                    </p>
                    <p className="text-xs text-gray-500 mt-1 leading-5">
                        Bạn có thể thay đổi tùy chọn nhận thông báo
                        bất cứ lúc nào trong phần cài đặt này.
                    </p>
                </div>
            </div>

            {/* LƯU */}
            <div className="flex justify-end">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-semibold">
                    Lưu cài đặt
                </button>
            </div>

        </div>
    );
}

export default CaiDatThongBao;
