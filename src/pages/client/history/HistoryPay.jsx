import React, { useState } from "react";
import {
    FaWallet, FaCreditCard, FaTicketAlt, FaListAlt, FaMoneyBillWave,
    FaBell, FaUsers, FaEnvelope, FaCog, FaSignOutAlt, FaChevronRight, FaSearch,
    FaFilter,
    FaReceipt,
    FaUserCircle,
} from "react-icons/fa";
import DatCho from "./DatCho";
import ViCuaToi from "./ViCuaToi";
import ThanhToan from "./ThanhToan";
import DanhSachGiaoDich from "./DanhSachGiaoDich";
import HoanTien from "./HoanTien";
import ThongBaoGiaVe from "./ThongBaoGiaVe";
import HanhKhach from "./HanhKhach";
import CaiDatThongBao from "./CaiDatThongBao";
import TaiKhoan from "./TaiKhoan";

function HistoryPay() {
    const [activeMenu, setActiveMenu] = useState("Danh sách giao dịch");
    return (
        <div className="mx-10 my-11">
            <div className="max-w-6xl mx-auto px-5">
                <div className="grid grid-cols-3 gap-6">
                    {/* SIDEBAR BÊN TRÁI */}
                    <div className="col-span-1 bg-white border bor-gray rounded-lg h-fit">
                        {/* THÔNG TIN NGƯỜI DÙNG */}
                        <div className="p-4 border-b">
                            <div className="flex items-center gap-3">
                                <FaUserCircle className="text-5xl text-gray-400" />
                                <div>
                                    <h3 className="font-bold text-gray-800">
                                        Thái Tuấn Việt
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        Facebook
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 bg-[#b99570] text-white rounded-lg p-3 flex justify-between items-center ">
                                <span className="text-sm font-medium">
                                    Thành viên Đồng
                                </span>
                                <FaChevronRight />
                            </div>
                        </div>
                        {/* DANH SÁCH MENU */}
                        <div className="p-3">
                            {[
                                { name: "Ví của tôi", icon: <FaWallet /> },
                                { name: "Thanh toán", icon: <FaCreditCard /> },
                                { name: "Đặt chỗ của tôi", icon: <FaTicketAlt /> },
                                { name: "Danh sách giao dịch", icon: <FaListAlt /> },
                                { name: "Thanh toán & Hoàn tiền", icon: <FaMoneyBillWave /> },
                                { name: "Thông báo giá vé máy bay", icon: <FaBell /> },
                                { name: "Thông tin hành khách đã lưu", icon: <FaUsers /> },
                                { name: "Cài đặt thông báo", icon: <FaEnvelope /> },
                                { name: "Tài khoản", icon: <FaCog /> },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => setActiveMenu(item.name)}
                                    className={`flex items-center gap-3 px-3 py-3 text-sm rounded-md cursor-pointer
                ${activeMenu === item.name
                                            ? "bg-blue-500 text-white"
                                            : "text-gray-600 hover:bg-blue-50"
                                        }`}
                                >
                                    <span className={activeMenu === item.name ? "" : "text-blue-500"}>
                                        {item.icon}
                                    </span>

                                    {item.name}
                                </div>
                            ))}
                            <div className="border-t my-2"></div>

                            <div className="flex items-center gap-3 px-3 py-3 text-sm text-gray-600 hover:bg-red-50 cursor-pointer">
                                <FaSignOutAlt className="text-gray-500 text-lg" />
                                Đăng xuất
                            </div>
                        </div>
                    </div>
                    {/* NỘI DUNG BÊN PHẢI */}
                    <div className="col-span-2">

                        {/* VÍ CỦA TÔI */}
                        {
                            activeMenu === "Ví của tôi" && (
                                <ViCuaToi />
                            )}
                        {/* THANH TOÁN */}
                        {
                            activeMenu === "Thanh toán" && (
                                <ThanhToan />
                            )}

                        {/* ĐẶT CHỖ CỦA TÔI */}
                        {
                            activeMenu === "Đặt chỗ của tôi" && (
                                <DatCho />
                            )}
                        {/* DANH SÁCH GIAO DỊCH */}
                        {
                            activeMenu === "Danh sách giao dịch" && (
                                <DanhSachGiaoDich />
                            )}

                        {/* THANH TOÁN & HOÀN TIỀN */}
                        {
                            activeMenu === "Thanh toán & Hoàn tiền" && (
                                <HoanTien />
                            )}

                        {/* THÔNG BÁO GIÁ VÉ */}
                        {
                            activeMenu === "Thông báo giá vé máy bay" && (
                                <ThongBaoGiaVe />
                            )}

                        {/* THÔNG TIN HÀNH KHÁCH */}
                        {
                            activeMenu === "Thông tin hành khách đã lưu" && (
                                <HanhKhach />
                            )}
                        {/* CÀI ĐẶT THÔNG BÁO */}
                        {
                            activeMenu === "Cài đặt thông báo" && (
                                <CaiDatThongBao />
                            )}
                        {/* TÀI KHOẢN */}
                        {
                            activeMenu === "Tài khoản" && (
                                <TaiKhoan />
                            )}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default HistoryPay;
