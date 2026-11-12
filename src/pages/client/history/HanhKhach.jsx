import {
    FaUsers,
    FaUserCircle,
    FaPlus,
    FaEdit,
    FaTrash,
    FaIdCard,
    FaPhone,
    FaEnvelope
} from "react-icons/fa";

function HanhKhach(props) {
    return (
        <div className="space-y-5">
            <div>
                <h2 className="text-xl font-bold text-gray-800">
                    Thông tin hành khách đã lưu
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Quản lý thông tin hành khách để đặt vé nhanh hơn.
                </p>
            </div>
            {/* TỔNG QUAN */}
            <div className="bg-blue-50 rounded-lg p-5 flex justify-between items-center">
                <div>
                    <p className="text-sm text-gray-600">
                        Hành khách đã lưu
                    </p>
                    <h2 className="text-3xl font-bold text-blue-600 mt-2">
                        02
                    </h2>
                </div>
                <FaUsers className="text-5xl text-blue-300" />
            </div>
            {/* NÚT THÊM */}
            <div className="bg-white border rounded-lg p-5 flex justify-between items-center">
                <div>
                    <h3 className="font-bold text-gray-800">
                        Danh sách hành khách
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                        Lưu thông tin để sử dụng cho những lần đặt vé tiếp theo.
                    </p>
                </div>

                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-md flex items-center gap-2 text-sm">
                    <FaPlus />
                    Thêm hành khách
                </button>
            </div>
            {/* HÀNH KHÁCH 1 */}
            <div className="bg-white border rounded-lg p-5">

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <FaUserCircle className="text-5xl text-gray-300" />

                        <div>
                            <h3 className="font-bold text-gray-800">
                                Thái Tuấn Việt
                            </h3>
                            <p className="text-xs text-blue-500 mt-1">
                                Hành khách chính
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button className="text-blue-500 hover:text-blue-700">
                            <FaEdit />
                        </button>

                        <button className="text-red-400 hover:text-red-600">
                            <FaTrash />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-5 border-t mt-5 pt-5">

                    <div>
                        <p className="text-xs text-gray-400">Ngày sinh</p>
                        <p className="text-sm font-medium mt-1">21/10/2006</p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-400">Giới tính</p>
                        <p className="text-sm font-medium mt-1">Nam</p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-400">Số điện thoại</p>
                        <p className="text-sm font-medium mt-1 flex items-center gap-2">
                            <FaPhone className="text-gray-400" />
                            09xx xxx xxx
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-400">Email</p>
                        <p className="text-sm font-medium mt-1 flex items-center gap-2">
                            <FaEnvelope className="text-gray-400" />
                            example@gmail.com
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-400">Số giấy tờ</p>
                        <p className="text-sm font-medium mt-1 flex items-center gap-2">
                            <FaIdCard className="text-gray-400" />
                            ********1234
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-400">Loại giấy tờ</p>
                        <p className="text-sm font-medium mt-1">
                            CCCD
                        </p>
                    </div>

                </div>
            </div>
            {/* HÀNH KHÁCH 2 */}
            <div className="bg-white border rounded-lg p-5">

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <FaUserCircle className="text-5xl text-gray-300" />

                        <div>
                            <h3 className="font-bold text-gray-800">
                                Trần Thị B
                            </h3>
                            <p className="text-xs text-gray-400 mt-1">
                                Hành khách đã lưu
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button className="text-blue-500 hover:text-blue-700">
                            <FaEdit />
                        </button>

                        <button className="text-red-400 hover:text-red-600">
                            <FaTrash />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-5 border-t mt-5 pt-5">

                    <div>
                        <p className="text-xs text-gray-400">Ngày sinh</p>
                        <p className="text-sm font-medium mt-1">15/05/2002</p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-400">Giới tính</p>
                        <p className="text-sm font-medium mt-1">Nữ</p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-400">Số điện thoại</p>
                        <p className="text-sm font-medium mt-1">09xx xxx xxx</p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-400">Email</p>
                        <p className="text-sm font-medium mt-1">example2@gmail.com</p>
                    </div>

                </div>
            </div>

            {/* LƯU Ý */}
            <div className="bg-yellow-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-gray-700">
                    Lưu ý
                </p>
                <p className="text-xs text-gray-500 mt-2 leading-5">
                    Vui lòng kiểm tra chính xác họ tên và thông tin giấy tờ
                    trước khi sử dụng để đặt vé máy bay.
                </p>
            </div>

        </div>
    );
}

export default HanhKhach;
