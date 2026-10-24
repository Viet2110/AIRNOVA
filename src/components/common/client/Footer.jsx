import React from 'react';
import { AiFillTikTok } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import LOGO from '../../../assets/LOGO.png'
function Footer(props) {
    return (
        <div className='bg-gray-100'>
            <div className='mx-auto px-6 py-7'>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  '>
                    {/* VietNamAirline */}
                    <div>
                        <p className='text-xl text-blue-800 font-semibold'>Vietnam Airlines</p>
                        <ul className='mt-3'>
                            <li className=''>Giới Thiệu Công Ty</li>
                            <li className='mt-2'>Đội bay</li>
                            <li className='mt-2' >Đối tác</li>
                            <li className='mt-2'>Thông tin truyền thông</li>
                            <li className='mt-2'>Phát triển bền vững</li>
                            <li className='mt-2'>Quan hệ cổ đông</li>
                            <li className='mt-2'>Thông tin truyền thông</li>
                            <li className='mt-2'>Phát triển bền vững</li>
                            <li className='mt-2'>Quan hệ cổ đông</li>
                        </ul>
                    </div>
                    {/* Hỗ trợ */}
                    <div>
                        <p className='text-xl text-blue-800 font-semibold'>Hỗ trợ</p>
                        <ul className='mt-3'>
                            <li className='mt-2'>Góp Ý Dịch Vụ</li>
                            <li className='mt-2'>Trung tâm trợ giúp</li>
                            <li className='mt-2'>Các câu hỏi thường gặp - FAQ </li>
                            <li className='mt-2'>Liên hệ với chi nhánh của VNA</li>
                            <li className='mt-2'>Chính Sách Bảo Vệ Hành Khách</li>
                            <li className='mt-2'>Trợ Lý Ảo Của Vietnam Airlines</li>
                        </ul>
                    </div>
                    {/* Pháp Lí */}
                    <div>
                        <p className='text-xl text-blue-800 font-semibold'>Pháp Lí</p>
                        <ul className='mt-3'>
                            <li className='mt-2'>Các Điều Kiện & Điều Khoản</li>
                            <li className='mt-2'>Điều Lệ Vận Chuyển</li>
                            <li className='mt-2'>Điều Kiện Sử Dụng Cookies</li>
                            <li className='mt-2'>Bảo Mật Thông Tin</li>
                            <li className='mt-2'>Quy Chế Hoạt Động Sàn TMĐT</li>
                        </ul>
                        <p className='text-xl text-blue-800 font-semibold pt-7'>Đại lí đối tác</p>
                        <ul className='mt-3'>
                            <li className='mt-2'>Chính sách Đặt chỗ & Xuất vé</li>
                        </ul>
                    </div>
                    {/* Thông tin hữu ích */}
                    <div>
                        <p className='text-xl text-blue-800 font-semibold'>Thông tin hữu ích</p>
                        <ul className='mt-3'>
                            <li className='mt-2'>Hợp Tác Với Chương Trình Lotusmiles</li>
                            <li className='mt-2'>Tạp Chí Heritage </li>
                            <li className='mt-2'>Cẩm Nang Du Lịch</li>
                            <li className='mt-2'>Quảng Cáo Với Vietnam Airlines</li>
                            <li className='mt-2'>Quy Chế Hoạt Động Sàn TMĐT</li>
                        </ul>
                        <p className='text-xl text-blue-800 font-semibold pt-4'>Vận tải hàng hóa</p>
                        <ul className='mt-3'>
                            <li className='mt-2'>Trang web hàng hóa</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Giải thưởng*/}
            <div className="border-y border-dashed border-blue-800">
                <div className='mx-10 my-9 flex justify-between items-center'>
                    <h3 className='text-3xl text-blue-800 '>Giải thưởng của VietnamAirline</h3>
                    <div className='flex items-center gap-2'>
                        <img className='w-35 h-16' src="https://www.vietnamairlines.com/content/dam/vna/vna-assets/global/images/footer/world-travel-awards-mobile.png?width=1920" alt="" />
                        <img className='w-35 h-16' src="https://www.vietnamairlines.com/content/dam/vna/vna-assets/global/images/footer/trip-advisor.svg?width=1920" alt="" />
                        <img className='w-35 h-16' src="https://www.vietnamairlines.com/content/dam/vna/vna-assets/global/images/footer/trip-advisor.svg?width=1920" alt="" />
                        <img className='w-35 h-16' src="https://www.vietnamairlines.com/content/dam/vna/vna-assets/global/images/footer/trip-advisor.svg?width=1920" alt="" />
                    </div>
                </div>
            </div>
            {/* cuối */}
            <div className='mx-auto px-12 py-7' >
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {/* LOGO */}
                    <div>
                        <img className='w-md' src="https://www.vietnamairlines.com/content/dam/vna/vna-assets/global/images/footer/logo.png?width=1920" alt="" />
                        <ul className='flex gap-4 mt-2 text-2xl '>
                            <li className='p-1 group rounded-full border border-[#D8C08A] hover:bg-linear-to-r hover:from-[#C9A66B] hover:via-[#B8904A] hover:to-[#8B6F3D]  transition ease-in duration-200'>
                                <FaYoutube className='text-red-700 group-hover:text-white' />
                            </li>
                            <li className='p-1 group rounded-full border border-[#D8C08A] hover:bg-linear-to-r hover:from-[#C9A66B] hover:via-[#B8904A] hover:to-[#8B6F3D]  transition ease-in duration-200'>
                                <FaInstagram className='text-fuchsia-400 group-hover:text-white' />
                            </li>
                            <li className='p-1 group rounded-full border border-[#D8C08A] hover:bg-linear-to-r hover:from-[#C9A66B] hover:via-[#B8904A] hover:to-[#8B6F3D]  transition ease-in duration-200'>
                                <FaFacebook className='text-blue-600 group-hover:text-white' />
                            </li>
                            <li className='p-1 group rounded-full border border-[#D8C08A] hover:bg-linear-to-r hover:from-[#C9A66B] hover:via-[#B8904A] hover:to-[#8B6F3D]  transition ease-in duration-200'>
                                <AiFillTikTok className='group-hover:text-white' />
                            </li>
                            <li className='p-1 group rounded-full border border-[#D8C08A] hover:bg-linear-to-r hover:from-[#C9A66B] hover:via-[#B8904A] hover:to-[#8B6F3D]  transition ease-in duration-200'>
                                <SiZalo className='text-blue-600 group-hover:text-white' />
                            </li>
                        </ul>
                        <img className='w-40 pt-2' src={LOGO} alt="" />
                        <ul className='flex gap-3 pt-4 text-blue-300 '>
                            <p>Sơ đồ trang</p>
                            <p>Liên hệ mua vé</p>
                            <p>Cài đặt Cookies</p>
                        </ul>
                    </div>
                    {/* Thông tin*/}
                    <div className='px-5'>
                        <p>
                            © 2025 Vietnam Airlines JSC
                            <br />
                            Tổng công ty Hàng không Việt Nam - CTCP. Số 200 Nguyễn Sơn, Phường Bồ Đề, Hà Nội.
                            <br />
                            Điện thoại: (+84-24) 38272289. Fax: (+84-24) 38722375
                            <br />
                            Giấy chứng nhận đăng ký doanh nghiệp, mã số doanh nghiệp 0100107518 , đăng ký lần đầu ngày 30/6/2010, đăng ký thay đổi lần thứ 10 ngày 24/7/2025,  cấp bởi Sở Tài chính Thành phố Hà Nội.
                        </p>
                    </div>
                    {/* QR */}
                    <img className='w-xl' src="https://www.vietnamairlines.com/content/dam/vna/vna-assets/global/images/footer/app-download-container-vi.png?width=1920" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Footer;