import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
    MenuItem,
    FormControl,
    FormHelperText,
} from '@mui/material';
import { HiOutlineQuestionMarkCircle, HiOutlineUserAdd } from 'react-icons/hi';
import { FaChevronDown, FaChevronRight, FaChevronUp, FaPassport } from 'react-icons/fa';
import { CiCircleCheck } from 'react-icons/ci';
import { FaCircleUser } from 'react-icons/fa6';
import { MdOutlineLuggage } from 'react-icons/md';
import { IoBagHandleOutline } from 'react-icons/io5';
import { BookingContext } from '../../../contexts/BookingProvider';
import { getObjectById } from '../../../services/repository';
import { cities, countries } from '../../../utils/data';
import { FlightContext } from '../../../contexts/FlightProvider';
import { AirlineContext } from '../../../contexts/AirlineProvider';
import { SeatTypeContext } from '../../../contexts/SeatTypeProvider';
import { Link, useNavigate } from 'react-router-dom';
import { searchType } from '../../../types/Types';

export default function Customer() {
    const id = React.useId();
    const navigate = useNavigate();
    const { booking, setBooking } = React.useContext(BookingContext);
    const [error, setError] = React.useState(searchType);
    const flights = React.useContext(FlightContext);
    const airlines = React.useContext(AirlineContext);
    const seatTypes = React.useContext(SeatTypeContext);

    React.useEffect(() => {
        setError({ ...error, passengerList: booking.passengerList })
    }, [booking]);
    // về nhà đọc lại
    const handleChangeInput = (e, id, index) => {
        setBooking(pre => {
            return {
                ...pre,
                passengerList: pre.passengerList.map((p) => {
                    if (p.id == id) {
                        return { ...p, listPerson: p.listPerson.map((c, i) => i == index ? { ...c, [e.target.name]: e.target.value } : c) };
                    }
                    return p;
                })
            }
        })
    }
    const validation = () => {
        const newError = {
            fullname: booking.fullname ? "" : "Vui lòng nhập họ tên",
            phone: booking.phone ? "" : "Vui lòng nhập số điện thoại",
            email: booking.email ? "" : "Vui lòng nhập email",

            passengerList: booking.passengerList.map(p => ({
                id: p.id,
                listPerson: p.listPerson.map(c => ({
                    country_id: c.country_id ? "" : "Vui lòng chọn quốc tịch",
                    firstName: c.firstName ? "" : "Vui lòng nhập họ",
                    lastName: c.lastName ? "" : "Vui lòng nhập tên",
                    gender: c.gender ? "" : "Vui lòng chọn giới tính",
                    birthDay: c.birthDay ? "" : "Vui lòng chọn ngày sinh"
                }))
            }))
        };
        setError(newError);
        // Kiểm tra thông tin liên hệ
        const checkCustomer = !newError.fullname && !newError.phone && !newError.email;
        // Kiểm tra thông tin hành khách
        const checkPassenger = newError.passengerList.every(p =>
            p.listPerson.every(c =>
                Object.values(c).every(value => value === "")
            )
        );
        return !(checkCustomer && checkPassenger);
    }
    const checkError = () => {
        if (validation()) {
            return;
        }
        navigate("/selectchair")
    }
    const handleChangeCustomer = (e) => {
        setBooking({ ...booking, [e.target.name]: e.target.value });
    }
    // hàm tính giá tiền giá 
    const TotalPrice = React.useMemo(() => {
        const chair = getObjectById(seatTypes, booking?.seatype_id);
        const quantity = booking?.passengerList.reduce((sum, item) => item.id != 3 ? sum + item.listPerson.length : sum, 0);
        return parseInt(chair?.price) * quantity;
    }, [booking, seatTypes]);
    return (
        <div className='grid grid-cols-3 gap-6 m-10 lg:m-20'>
            {/* Thông tin hành khách */}
            <div className='lg:col-span-2 '>
                <div className='rounded-2xl shadow-[0px_3px_8px_rgba(0,0,0,0.24)] p-4'>
                    <h1 className='text-xl font-bold mb-2'>
                        Thông tin hành khách
                    </h1>
                    {
                        booking?.passengerList.map((p, index) => (
                            p.listPerson.map((c, i) => (
                                <Accordion sx={{
                                    backgroundColor: '#fff',
                                    border: '1px solid #d1d5db',
                                    borderRadius: '12px !important',
                                    boxShadow: 'none',
                                    overflow: 'hidden',
                                    marginBottom: '14px',

                                    '&::before': {
                                        display: 'none',
                                    },

                                    '&.Mui-expanded': {
                                        marginBottom: 2,
                                        borderColor: '#60a5fa',
                                    },
                                }} >
                                    <AccordionSummary
                                        sx={{
                                            backgroundColor: '#f3faff',
                                            '& .MuiAccordionSummary-content': {
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                width: '100%',
                                            },
                                        }}
                                    >
                                        <div className='flex items-center gap-2'>
                                            <HiOutlineUserAdd className='text-xl' />
                                            <Typography>{p.title} {i + 1}</Typography>
                                        </div>
                                        <div className='flex items-center gap-2 text-blue-600'>
                                            <p>Đóng</p>
                                            <FaChevronUp />
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails >
                                        <p className='mb-4 text-sm leading-6'>
                                            Vui lòng nhập tên không có ký tự đặc biệt, chính xác
                                            như trong giấy tờ du lịch. Nếu không, bạn có thể
                                            bị từ chối lên máy bay hoặc phải trả thêm phí.
                                        </p>
                                        {/* Quốc tịch */}
                                        <div className='mb-5'>
                                            <TextField
                                                select
                                                variant='outlined'
                                                label='Quốc tịch'
                                                defaultValue=''
                                                className='w-full sm:w-1/2'
                                                name='country_id'
                                                error={!!error?.passengerList?.[index]?.listPerson?.[i]?.country_id}
                                                helperText={error?.passengerList?.[index]?.listPerson?.[i]?.country_id}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        borderRadius: '10px',
                                                        '& fieldset': {
                                                            borderColor: '#ccc',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: '#326575',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#c0fd91',
                                                            borderWidth: '3px',
                                                        },
                                                    },
                                                    '& .MuiInputLabel-root.Mui-focused': {
                                                        color: '#326575',
                                                    },
                                                }}
                                            >
                                                {
                                                    countries.map((u => (
                                                        <MenuItem value={u.id}>{u.name}</MenuItem>
                                                    )))

                                                }
                                            </TextField>
                                        </div>
                                        {/* Họ và tên */}
                                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5'>
                                            <TextField
                                                variant='outlined'
                                                label='Họ (vd: NGUYEN)'
                                                fullWidth
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        borderRadius: '10px',
                                                        '& fieldset': { borderColor: '#ccc' },
                                                        '&:hover fieldset': { borderColor: '#326575' },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#c0fd91',
                                                            borderWidth: '3px',
                                                        },
                                                    },
                                                    '& .MuiInputLabel-root.Mui-focused': {
                                                        color: '#326575',
                                                    },
                                                }}
                                                name='firstName' onChange={(e) => handleChangeInput(e, p.id, i)}
                                                error={!!error?.passengerList[index].listPerson[i]?.firstName}
                                                helperText={error?.passengerList[index].listPerson[i]?.firstName}
                                            />
                                            <TextField
                                                variant='outlined'
                                                label='Chữ đệm và tên (vd: VAN ANH)'
                                                fullWidth
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        borderRadius: '10px',
                                                        '& fieldset': { borderColor: '#ccc' },
                                                        '&:hover fieldset': { borderColor: '#326575' },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#c0fd91',
                                                            borderWidth: '3px',
                                                        },
                                                    },
                                                    '& .MuiInputLabel-root.Mui-focused': {
                                                        color: '#326575',
                                                    },
                                                }}
                                                name='lastName' onChange={(e) => handleChangeInput(e, p.id, i)}
                                                error={!!error?.passengerList[index].listPerson[i]?.lastName}
                                                helperText={error?.passengerList[index].listPerson[i]?.lastName}
                                            />
                                        </div>
                                        {/* Giới tính và ngày sinh */}
                                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6'>
                                            <FormControl fullWidth error={!!error?.passengerList?.[index]?.listPerson?.[i]?.gender}>
                                                <div className={`border border-gray-300 rounded-[10px] px-3 flex items-center ${
                                                    error?.passengerList?.[index]?.listPerson?.[i]?.gender ? "border-red-500" : "border-gray-300"
                                                }`}>
                                                    <RadioGroup
                                                        row
                                                        name='gender'
                                                        value={c.gender || ""}
                                                        onChange={(e) => handleChangeInput(e, p.id, i)}
                                                        sx={{ justifyContent: 'space-around', width: '100%' }}
                                                    >
                                                        <FormControlLabel
                                                            value='male'
                                                            control={<Radio />}
                                                            label='Nam'
                                                        />

                                                        <FormControlLabel
                                                            value='female'
                                                            control={<Radio />}
                                                            label='Nữ'
                                                        />
                                                    </RadioGroup>
                                                </div>
                                                <FormHelperText>
                                                    {error?.passengerList?.[index]?.listPerson?.[i]?.gender}
                                                </FormHelperText>
                                            </FormControl>
                                            <TextField
                                                type='date'
                                                variant='outlined'
                                                label='Ngày sinh'
                                                fullWidth
                                                slotProps={{
                                                    inputLabel: { shrink: true },
                                                }}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        borderRadius: '10px',
                                                        '& fieldset': { borderColor: '#ccc' },
                                                        '&:hover fieldset': { borderColor: '#326575' },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#c0fd91',
                                                            borderWidth: '3px',
                                                        },
                                                    },
                                                    '& .MuiInputLabel-root.Mui-focused': {
                                                        color: '#326575',
                                                    },
                                                }}
                                                name='birthDay' onChange={(e) => handleChangeInput(e, p.id, i)}
                                                error={!!error?.passengerList[index].listPerson[i]?.birthDay}
                                                helperText={error?.passengerList[index].listPerson[i]?.birthDay}
                                            />
                                        </div>
                                        {/* Thông tin hộ chiếu */}
                                        <h2 className='text-lg font-semibold mb-2'>Thông tin hộ chiếu</h2>
                                        <p className='text-sm leading-6 mb-5'>Đối với các chuyến đi quốc tế, hộ chiếu của bạn phải còn hạn ít nhất 6 tháng sau ngày khởi hành.
                                        </p>
                                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8'>
                                            <TextField
                                                variant='outlined'
                                                label='Số hộ chiếu'
                                                fullWidth
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        borderRadius: '10px',
                                                        '& fieldset': { borderColor: '#ccc' },
                                                        '&:hover fieldset': { borderColor: '#326575' },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#c0fd91',
                                                            borderWidth: '3px',
                                                        },
                                                    },
                                                    '& .MuiInputLabel-root.Mui-focused': {
                                                        color: '#326575',
                                                    },
                                                }}
                                            />
                                            <TextField
                                                type='date'
                                                variant='outlined'
                                                label='Ngày hết hạn'
                                                fullWidth
                                                slotProps={{ inputLabel: { shrink: true }, }}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        borderRadius: '10px',
                                                        '& fieldset': { borderColor: '#ccc' },
                                                        '&:hover fieldset': { borderColor: '#326575' },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#c0fd91',
                                                            borderWidth: '3px',
                                                        },
                                                    },
                                                    '& .MuiInputLabel-root.Mui-focused': {
                                                        color: '#326575',
                                                    },
                                                }}
                                            />
                                        </div>
                                        {/* Hành khách thân thiết */}
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<FaChevronDown />}
                                                sx={{ backgroundColor: '#f8fafc' }}
                                            >
                                                <Typography>
                                                    Thêm tài khoản Hành khách Thân thiết
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                                                    <TextField
                                                        label='Chương trình khách hàng'
                                                        variant='outlined'
                                                        fullWidth
                                                        sx={{
                                                            '& .MuiOutlinedInput-root': {
                                                                '& fieldset': { borderColor: '#ccc' },
                                                                '&:hover fieldset': { borderColor: '#326575' },
                                                                '&.Mui-focused fieldset': {
                                                                    borderColor: '#c0fd91',
                                                                    borderWidth: '3px',
                                                                },
                                                            },
                                                            '& .MuiInputLabel-root.Mui-focused': {
                                                                color: '#326575',
                                                            },
                                                        }}
                                                    />
                                                    <TextField
                                                        label='Số thẻ thành viên'
                                                        variant='outlined'
                                                        fullWidth
                                                        sx={{
                                                            '& .MuiOutlinedInput-root': {
                                                                '& fieldset': { borderColor: '#ccc' },
                                                                '&:hover fieldset': { borderColor: '#326575' },
                                                                '&.Mui-focused fieldset': {
                                                                    borderColor: '#c0fd91',
                                                                    borderWidth: '3px',
                                                                },
                                                            },
                                                            '& .MuiInputLabel-root.Mui-focused': {
                                                                color: '#326575',
                                                            },
                                                        }}
                                                    />
                                                </div>
                                            </AccordionDetails>
                                        </Accordion>
                                        <div className='flex justify-end mt-8'>
                                            <Button className='bg-[#5199ef] hover:bg-[#326575] rounded-xl px-3 py-6 w-20' variant='contained' >Lưu</Button>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                            ))
                        ))}
                </div>
                {/* Dưới */}
                <div className='col-span-2 mt-4'>
                    {/* Thông báo hộ chiếu */}
                    <div className='flex items-center gap-3 bg-[#fff3cd] rounded-md px-4 py-4 mb-5 text-sm'>
                        <FaPassport className='text-xl' />
                        <p className='flex-1'>
                            Mỗi hành khách phải mang theo hộ chiếu còn hiệu lực ít nhất 6 tháng sau ngày khởi hành.
                        </p>
                        <HiOutlineQuestionMarkCircle className='text-blue-500 text-xl font-bold' />
                    </div>
                    {/* Thông tin liên hệ */}
                    <div className='bg-white rounded-lg border border-gray-200 shadow-sm mb-5 overflow-hidden'>
                        <div className='px-4 py-3'>
                            <h2 className='text-lg font-bold'>
                                Thông tin liên hệ (nhận vé/phiếu thanh toán)
                            </h2>
                        </div>
                        <div className='flex items-center gap-3 bg-[#e6f4ff] px-3 py-2'>
                            <FaCircleUser className=' rounded-full bg-blue-500 text-white text-3xl' />
                            <span className='text-sm font-semibold'>Đăng nhập với tên Tuấn Việt</span>
                        </div>
                        {/* Nhập thông tin */}
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 p-3'>
                            <TextField
                                placeholder='Họ và tên'
                                variant='outlined'
                                size='small'
                                fullWidth
                                error={!!error.fullname}
                                helperText={error.fullname}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '10px',
                                        '& fieldset': {
                                            borderColor: '#ccc',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#326575',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#c0fd91',
                                            borderWidth: '3px',
                                        },
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#326575',
                                    },
                                }}
                                name='fullname' onChange={handleChangeCustomer}
                            />

                            <TextField
                                placeholder='Số điện thoại'
                                variant='outlined'
                                size='small'
                                fullWidth
                                error={!!error.phone}
                                helperText={error.phone}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '10px',
                                        '& fieldset': {
                                            borderColor: '#ccc',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#326575',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#c0fd91',
                                            borderWidth: '3px',
                                        },
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#326575',
                                    },
                                }}
                                name='phone' onChange={handleChangeCustomer}
                            />

                            <TextField
                                type='email'
                                placeholder='Email'
                                variant='outlined'
                                size='small'
                                fullWidth
                                error={!!error.email}
                                helperText={error.email}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '10px',
                                        '& fieldset': {
                                            borderColor: '#ccc',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#326575',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#c0fd91',
                                            borderWidth: '3px',
                                        },
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#326575',
                                    },
                                }}
                                name='email' onChange={handleChangeCustomer}
                            />
                        </div>
                    </div>

                    {/* Hành lý */}
                    <div className='bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden mb-5'>
                        <div className='flex items-center gap-3 p-4'>
                            <MdOutlineLuggage className='text-5xl' />
                            <div>
                                <h2 className='text-lg font-bold'>Hành lý</h2>
                                <p className='text-sm text-gray-600'>
                                    Sao bạn phải cố nhồi nhét? Thêm hành lý để chuyến đi thêm nhẹ nhàng.
                                </p>
                            </div>
                        </div>

                        <div className='px-3 pb-3'>
                            <p className='text-sm text-[#d99b18] mb-2'>
                                Một hoặc nhiều chuyến đi chưa có hành lý
                            </p>

                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                                {/* Chuyến đi */}
                                <div className='border border-gray-300 rounded-xl overflow-hidden'>
                                    <div className='px-3 py-2 border-b border-gray-200 text-sm font-medium'>
                                        1. SGN → BKK
                                    </div>
                                    <div className='px-3 py-2 space-y-3 text-xs text-gray-600'>
                                        <p className='flex items-center gap-2'><IoBagHandleOutline className='text-xl' /> 7kg/khách</p>
                                        <p className='flex items-center gap-2'><MdOutlineLuggage className='text-xl' />0kg/khách</p>
                                    </div>
                                </div>
                                {/* Chuyến về */}
                                <div className='border border-gray-300 rounded-xl overflow-hidden'>
                                    <div className='px-3 py-2 border-b border-gray-200 text-sm font-medium'>
                                        2. BKK → SGN
                                    </div>
                                    <div className='px-3 py-2 space-y-3 text-xs text-gray-600'>
                                        <p className='flex items-center gap-2'><IoBagHandleOutline className='text-xl' /> 7kg/khách</p>
                                        <p className='flex items-center gap-2'><MdOutlineLuggage className='text-xl' />0kg/khách</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center justify-between bg-[#f7f9fa] px-4 py-4 border-t border-gray-100'>
                            <p className='text-sm'>
                                Từ <span className='font-bold text-[#ed6531]'>380.000 VND</span>
                            </p>
                            <button className='flex items-center gap-1 text-blue-500 font-bold text-sm'>
                                Chọn <FaChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Phải */}
            <div className='lg:col-span-1'>
                {/* Thông báo */}
                <div className='flex items-center gap-2 px-1 py-3 text-sm text-gray-600'>
                    <CiCircleCheck className='text-2xl' />
                    <span>Hãy hoàn tất đặt vé ngay!</span>
                </div>
                {/* Tóm tắt chuyến đi */}
                <div className='bg-white rounded-lg shadow-sm border border-gray-100 p-3 mb-4'>
                    <div className='flex items-center justify-between mb-3'>
                        <h2 className='text-xl font-bold'>Tóm tắt chuyến đi</h2>
                        <button className='text-blue-500 font-semibold text-sm'>
                            Chi tiết
                        </button>
                    </div>
                    {/* Chuyến đi */}
                    <div className='border border-gray-200 rounded-lg shadow-sm p-3 mb-2'>
                        <span className='bg-gray-100 text-gray-500 text-xs rounded-full px-2 py-1'>
                            Chuyến đi
                        </span>
                        <div className='grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-3'>
                            <div>
                                <p className='font-semibold text-sm'>{getObjectById(cities, booking?.from)?.name} ({getObjectById(cities, booking?.from)?.code})</p>
                                <p className='text-xs text-gray-500 mt-1'> {new Date(booking?.startDate).toLocaleDateString('vi-VN')}</p>
                                <p className='text-xs text-gray-500 mt-1'>09:15</p>
                            </div>
                            <div className='text-center min-w-19'>
                                <p className='text-xs text-gray-500'>1h 30m</p>
                                <div className='flex items-center gap-1 text-xs text-gray-500'>
                                    <span className='w-5 h-0.5 bg-gray-300'></span>
                                    <span className='whitespace-nowrap'>Bay thẳng</span>
                                    <span className='w-5 h-0.5 bg-gray-300'></span>
                                </div>
                            </div>
                            <div className='text-right'>
                                <p className='font-semibold text-sm'>{getObjectById(cities, booking?.to)?.name} ({getObjectById(cities, booking?.to)?.code})</p>
                                <p className='text-xs text-gray-500 mt-1'>{new Date(booking?.startDate).toLocaleDateString('vi-VN')}</p>
                                <p className='text-xs text-gray-500 mt-1'>10:45</p>
                            </div>
                        </div>

                        <div className='mt-3 space-y-1'>
                            <p className='text-xs font-semibold'>
                                <span className='text-orange-500 mr-2'>✈</span>
                                {getObjectById(airlines, getObjectById(flights, booking?.flight_id).airline_id)?.name}
                            </p>
                            <p className='text-xs text-gray-500 flex gap-1'>
                                <img src={getObjectById(seatTypes, booking?.seatype_id)?.imgUrl} className='w-4.5' alt="" />
                                {getObjectById(seatTypes, booking?.seatype_id)?.name}
                            </p>
                        </div>

                        <div className='flex flex-wrap gap-1 mt-3'>
                            <span className='border border-gray-300 rounded-full px-2 py-1 text-[11px] text-gray-500'>
                                Không áp dụng đổi lịch bay
                            </span>
                            <span className='border border-gray-300 rounded-full px-2 py-1 text-[11px] text-gray-500'>
                                Không được Hoàn Vé
                            </span>
                        </div>
                    </div>
                    {/* Chuyến về */}
                    {
                        booking?.is_round_trip ? (<div className='border border-gray-200 rounded-lg shadow-sm p-3'>
                            <span className='bg-gray-100 text-gray-500 text-xs rounded-full px-2 py-1'>
                                Chuyến về
                            </span>
                            <div className='grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-3'>
                                <div>
                                    <p className='font-semibold text-sm'>{getObjectById(cities, booking.to)?.name} ({getObjectById(cities, booking.to)?.code})</p>
                                    <p className='text-xs text-gray-500 mt-1'>{new Date(booking.endDate).toLocaleDateString('vi-VN')}</p>
                                    <p className='text-xs text-gray-500 mt-1'>11:45</p>
                                </div>

                                <div className='text-center min-w-19'>
                                    <p className='text-xs text-gray-500'>1h 25m</p>
                                    <div className='flex items-center gap-1 text-xs text-gray-500'>
                                        <span className='w-5 h-0.5 bg-gray-300'></span>
                                        <span className='whitespace-nowrap'>Bay thẳng</span>
                                        <span className='w-5 h-0.5 bg-gray-300'></span>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <p className='font-semibold text-sm'>{getObjectById(cities, booking.from)?.name} ({getObjectById(cities, booking.to)?.code})</p>
                                    <p className='text-xs text-gray-500 mt-1'>{new Date(booking.endDate).toLocaleDateString('vi-VN')}</p>
                                    <p className='text-xs text-gray-500 mt-1'>13:10</p>
                                </div>
                            </div>
                            <div className='mt-3 space-y-1'>
                                <p className='text-xs font-semibold'>
                                    <span className='text-orange-500 mr-2'>✈</span>
                                    {getObjectById(airlines, getObjectById(flights, booking.flight_id).airline_id)?.name}
                                </p>
                                <p className='text-xs text-gray-500 flex gap-1 '>
                                    <img src={getObjectById(seatTypes, booking.seatype_id)?.imgUrl} className='w-4.5' alt="" />
                                    {getObjectById(seatTypes, booking.seatype_id)?.name}
                                </p>
                            </div>
                            <div className='flex flex-wrap gap-1 mt-3'>
                                <span className='border border-gray-300 rounded-full px-2 py-1 text-[11px] text-gray-500'>
                                    Không áp dụng đổi lịch bay
                                </span>
                                <span className='border border-gray-300 rounded-full px-2 py-1 text-[11px] text-gray-500'>
                                    Không được hoàn vé
                                </span>
                            </div>
                        </div>) : ""}

                </div>

                {/* Chi tiết giá */}
                <div className='bg-white rounded-lg shadow-sm border border-gray-100 p-3'>
                    <h2 className='text-xl font-bold mb-3'>Chi tiết giá</h2>

                    <div className='border-t border-gray-100 pt-3 pb-3 flex items-center justify-between gap-2'>
                        <span className='font-medium'>Giá bạn trả</span>
                        <div className='flex items-center gap-1'>
                            <span className='text-orange-600 font-semibold text-base'>
                                {TotalPrice.toLocaleString('vi-VN')} VND
                            </span>
                            <span className='text-gray-500'>⌄</span>
                        </div>
                    </div>

                    <div className='bg-gray-50 -mx-3 px-3 py-3 text-xs'>
                        <span className='text-orange-400 mr-1'>☆</span>
                        Kiếm 5.171.101 Sao Priority
                    </div>

                    <div onClick={checkError} className='block w-full mt-4 mb-1 bg-[#ed6531] hover:bg-[#d95324] text-white font-semibold rounded-full py-3.5 text-center transition-colors'>
                        Tiếp tục
                    </div>
                </div>
            </div>


        </div>
    );
}