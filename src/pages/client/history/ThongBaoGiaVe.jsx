import {
    FaBell,
    FaPlane,
    FaSearch,
    FaTrash,
    FaArrowDown,
    FaPlus
} from "react-icons/fa";

function ThongBaoGiaVe(props) {
    return (
        <div className="space-y-5">

            <div>
                <h2 className="text-xl font-bold text-gray-800">
                    Thông báo giá vé máy bay
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Theo dõi giá vé và nhận thông báo khi giá thay đổi.
                </p>
            </div>

            {/* TỔNG QUAN */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white border rounded-lg p-5">
                    <FaBell className="text-blue-500 text-2xl" />
                    <p className="text-sm text-gray-500 mt-3">
                        Hành trình đang theo dõi
                    </p>
                    <h2 className="text-2xl font-bold mt-2">03</h2>
                </div>

                <div className="bg-white border rounded-lg p-5">
                    <FaArrowDown className="text-green-500 text-2xl" />
                    <p className="text-sm text-gray-500 mt-3">
                        Giá vé đã giảm
                    </p>
                    <h2 className="text-2xl font-bold mt-2">01</h2>
                </div>

                <div className="bg-white border rounded-lg p-5">
                    <FaPlane className="text-orange-500 text-2xl" />
                    <p className="text-sm text-gray-500 mt-3">
                        Tổng hành trình
                    </p>
                    <h2 className="text-2xl font-bold mt-2">03</h2>
                </div>
            </div>

            {/* THÊM HÀNH TRÌNH */}
            <div className="bg-white border rounded-lg p-5">
                <h3 className="font-bold text-gray-800 mb-4">
                    Thêm hành trình theo dõi
                </h3>

                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Điểm đi"
                        className="border rounded-md px-4 py-3 text-sm outline-none focus:border-blue-500"
                    />

                    <input
                        type="text"
                        placeholder="Điểm đến"
                        className="border rounded-md px-4 py-3 text-sm outline-none focus:border-blue-500"
                    />

                    <input
                        type="date"
                        className="border rounded-md px-4 py-3 text-sm outline-none focus:border-blue-500"
                    />

                    <input
                        type="number"
                        placeholder="Giá vé mong muốn (VNĐ)"
                        className="border rounded-md px-4 py-3 text-sm outline-none focus:border-blue-500"
                    />
                </div>

                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-md text-sm font-semibold flex items-center gap-2">
                    <FaPlus />
                    Thêm theo dõi
                </button>
            </div>

            {/* DANH SÁCH HÀNH TRÌNH */}
            <div className="bg-white border rounded-lg p-5">
                <div className="flex justify-between items-center mb-5">
                    <h3 className="font-bold text-gray-800">
                        Hành trình đang theo dõi
                    </h3>
                    <FaSearch className="text-gray-400" />
                </div>

                <div className="border rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">
                            HÀNH TRÌNH 01
                        </span>
                        <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs">
                            Giá đang giảm
                        </span>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <div>
                            <h3 className="text-xl font-bold">DAD</h3>
                            <p className="text-xs text-gray-500">Đà Nẵng</p>
                        </div>

                        <FaPlane className="text-blue-500 text-xl" />

                        <div className="text-right">
                            <h3 className="text-xl font-bold">HAN</h3>
                            <p className="text-xs text-gray-500">Hà Nội</p>
                        </div>
                    </div>

                    <div className="border-t mt-4 pt-4 flex justify-between items-center">
                        <div>
                            <p className="text-xs text-gray-400">Giá vé hiện tại</p>
                            <p className="font-bold text-blue-600 mt-1">1.200.000 VNĐ</p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-400">Giá mong muốn</p>
                            <p className="font-semibold mt-1">1.000.000 VNĐ</p>
                        </div>

                        <button className="text-red-400 hover:text-red-600">
                            <FaTrash />
                        </button>
                    </div>
                </div>

                <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">
                            HÀNH TRÌNH 02
                        </span>
                        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs">
                            Đang theo dõi
                        </span>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <div>
                            <h3 className="text-xl font-bold">SGN</h3>
                            <p className="text-xs text-gray-500">TP. Hồ Chí Minh</p>
                        </div>

                        <FaPlane className="text-blue-500 text-xl" />

                        <div className="text-right">
                            <h3 className="text-xl font-bold">DAD</h3>
                            <p className="text-xs text-gray-500">Đà Nẵng</p>
                        </div>
                    </div>

                    <div className="border-t mt-4 pt-4 flex justify-between items-center">
                        <div>
                            <p className="text-xs text-gray-400">Giá vé hiện tại</p>
                            <p className="font-bold text-blue-600 mt-1">950.000 VNĐ</p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-400">Giá mong muốn</p>
                            <p className="font-semibold mt-1">800.000 VNĐ</p>
                        </div>

                        <button className="text-red-400 hover:text-red-600">
                            <FaTrash />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ThongBaoGiaVe;