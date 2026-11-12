import {
    FaUserCircle,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaLock,
    FaEdit,
    FaCamera,
    FaShieldAlt
} from "react-icons/fa";
function TaiKhoan(props) {
    return (
        <div className="space-y-5">

            {/* TIÊU ĐỀ */}
            <div>
                <h2 className="text-xl font-bold text-gray-800">
                    Tài khoản
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Quản lý thông tin cá nhân và bảo mật tài khoản.
                </p>
            </div>

            {/* THÔNG TIN CÁ NHÂN */}
            <div className="bg-white border rounded-lg p-5">

                <div className="flex justify-between items-center mb-5">
                    <h3 className="font-bold text-gray-800">
                        Thông tin cá nhân
                    </h3>

                    <button className="text-blue-500 flex items-center gap-2 text-sm">
                        <FaEdit />
                        Chỉnh sửa
                    </button>
                </div>

                {/* AVATAR */}
                <div className="flex items-center gap-4 border-b pb-5">
                    <div className="relative">
                        <FaUserCircle className="text-7xl text-gray-300" />

                        <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full">
                            <FaCamera className="text-xs" />
                        </button>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-800">
                            Thái Tuấn Việt
                        </h3>

                        <p className="text-xs text-gray-400 mt-1">
                            Thành viên Airnova
                        </p>

                        <p className="text-xs text-green-500 mt-2">
                            Tài khoản đang hoạt động
                        </p>
                    </div>
                </div>

                {/* FORM THÔNG TIN */}
                <div className="grid grid-cols-2 gap-5 mt-5">

                    <div>
                        <label className="text-sm text-gray-600 font-medium">
                            Họ và tên
                        </label>

                        <div className="relative mt-2">
                            <FaUser className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                                type="text"
                                defaultValue="Thái Tuấn Việt"
                                className="w-full border rounded-md pl-10 pr-3 py-3 text-sm outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600 font-medium">
                            Email
                        </label>

                        <div className="relative mt-2">
                            <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                                type="email"
                                defaultValue="example@gmail.com"
                                className="w-full border rounded-md pl-10 pr-3 py-3 text-sm outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600 font-medium">
                            Số điện thoại
                        </label>

                        <div className="relative mt-2">
                            <FaPhone className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                                type="text"
                                defaultValue="09xx xxx xxx"
                                className="w-full border rounded-md pl-10 pr-3 py-3 text-sm outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600 font-medium">
                            Giới tính
                        </label>

                        <select className="w-full border rounded-md px-3 py-3 mt-2 text-sm outline-none focus:border-blue-500">
                            <option>Nam</option>
                            <option>Nữ</option>
                            <option>Khác</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600 font-medium">
                            Ngày sinh
                        </label>

                        <input
                            type="date"
                            className="w-full border rounded-md px-3 py-3 mt-2 text-sm outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600 font-medium">
                            Quốc gia
                        </label>

                        <select className="w-full border rounded-md px-3 py-3 mt-2 text-sm outline-none focus:border-blue-500">
                            <option>Việt Nam</option>
                            <option>Hoa Kỳ</option>
                            <option>Nhật Bản</option>
                            <option>Hàn Quốc</option>
                        </select>
                    </div>

                </div>

                <div className="flex justify-end mt-6">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-semibold">
                        Lưu thay đổi
                    </button>
                </div>

            </div>

            {/* ĐỔI MẬT KHẨU */}
            <div className="bg-white border rounded-lg p-5">

                <div className="flex items-center gap-3 mb-5">
                    <div className="bg-blue-50 p-3 rounded-lg">
                        <FaLock className="text-blue-500 text-xl" />
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-800">
                            Đổi mật khẩu
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">
                            Cập nhật mật khẩu để bảo vệ tài khoản.
                        </p>
                    </div>
                </div>

                <div className="space-y-4">

                    <input
                        type="password"
                        placeholder="Mật khẩu hiện tại"
                        className="w-full border rounded-md px-4 py-3 text-sm outline-none focus:border-blue-500"
                    />

                    <input
                        type="password"
                        placeholder="Mật khẩu mới"
                        className="w-full border rounded-md px-4 py-3 text-sm outline-none focus:border-blue-500"
                    />

                    <input
                        type="password"
                        placeholder="Xác nhận mật khẩu mới"
                        className="w-full border rounded-md px-4 py-3 text-sm outline-none focus:border-blue-500"
                    />

                </div>

                <div className="flex justify-end mt-5">
                    <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 px-5 py-2.5 rounded-md text-sm font-semibold">
                        Cập nhật mật khẩu
                    </button>
                </div>

            </div>

            {/* BẢO MẬT */}
            <div className="bg-blue-50 rounded-lg p-4 flex gap-3">
                <FaShieldAlt className="text-blue-500 text-xl mt-1" />

                <div>
                    <p className="text-sm font-semibold text-gray-700">
                        Bảo mật tài khoản
                    </p>

                    <p className="text-xs text-gray-500 mt-1 leading-5">
                        Không chia sẻ mật khẩu hoặc thông tin đăng nhập
                        của bạn với người khác.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default TaiKhoan;
