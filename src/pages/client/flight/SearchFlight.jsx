import React, { useContext, useMemo } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FlightContext } from '../../../contexts/FlightProvider';
import { AirportContext } from '../../../contexts/AirportProvider';
import { getObjectById } from '../../../services/repository';
import { cities } from '../../../utils/data';
import { CiClock2, CiSaveUp2 } from 'react-icons/ci';
import { GiAirplaneDeparture } from 'react-icons/gi';
import DialogTrip from './DialogTrip';
import { AircraftContext } from '../../../contexts/AircraftProvider';
import { AirlineContext } from '../../../contexts/AirlineProvider';
import { SeatTypeContext } from '../../../contexts/SeatTypeProvider';
import { count } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { BookingContext } from '../../../contexts/BookingProvider';

const codeColor = ["bg-[#326575]", "bg-[#D2E2E0]", "bg-[#E0B951] rounded-r-2xl"]
function SearchFlight(props) {
    const flights = useContext(FlightContext);
    const airports = useContext(AirportContext);
    const aircrafts = useContext(AircraftContext)
    const airlines = useContext(AirlineContext);
    const seatTypes = useContext(SeatTypeContext);
    const { booking } = useContext(BookingContext);
    // về coi lại nhé
    const listFlight = useMemo(() => {
        return flights.filter(p =>
            p.is_round_trip == booking.is_round_trip &&
            getObjectById(airports, p.from_airport).city_id == booking.from &&
            getObjectById(airports, p.to_airport).city_id == booking.to &&
            p.departure_time == booking.startDate
        )
    }, [booking, flights, airports]);
    console.log(booking);
    console.log(flights);



    //đếm số lượng ghế 
    const countChair = (id_aircraft, seat_id) => {
        const aircraft = getObjectById(aircrafts, id_aircraft);
        return aircraft.listChair.reduce((sum, item) => item.id_seatype == seat_id ? sum + 1 : sum, 0);
    }

    const [openTrip, setOpenTrip] = React.useState(false);

    const handleClickOpenTrip = () => {
        setOpenTrip(true);
    };

    const handleCloseTrip = () => {
        setOpenTrip(false);
    };
    return (
        <div>
            <div className='mx-10 my-15'>
                {
                    listFlight.map((p, index) => {
                        console.log(p);
                        return (
                            <div className='grid grid-cols-2 '>
                                <div className="col-span-1 grid grid-cols-2 p-4 my-5 rounded-l-xl shadow-[0px_3px_8px_rgba(0,0,0,0.24)]">
                                    < div className="col-span-1 px-2 flex items-center gap-2 border-r border-blue-800 ">
                                        <div className=''>
                                            <p className="text-xl font-bold text-gray-800">{new Date(p.departure_time).toLocaleDateString('vi-VN')}</p>
                                            <p className="text-gray-500 font-medium text-lg">{getObjectById(cities, getObjectById(airports, p.from_airport).city_id).code}</p>
                                            <p className="text-sm text-gray-600">Nhà ga 1</p>
                                        </div>
                                        <div className="text-xs text-center flex-1 text-gray-600 mb-1 border-b border-dashed border-gray-400">Bay thẳng</div>
                                        <div className=' text-end'>
                                            <p className="text-xl font-bold text-gray-800">{new Date(p.arrival_time).toLocaleDateString('vi-VN')}</p>
                                            <p className="text-gray-500 font-medium text-lg">{getObjectById(cities, getObjectById(airports, p.to_airport).city_id).code}</p>
                                            <p className="text-sm text-gray-600">Nhà ga 1</p>
                                        </div>
                                    </div>
                                    <div className="col-span-1 ps-5 flex flex-col justify-center">
                                        <div className='flex items-center gap-2 mb-2'>
                                            <CiClock2 className='text-xs' />
                                            <p className='text-xs'>Thời gian bay 2h 15phút</p>
                                        </div >
                                        <div className='flex items-center gap-2 mb-2'>
                                            <GiAirplaneDeparture className='text-xs' />
                                            <p className='text-xs '>{getObjectById(airlines, getObjectById(aircrafts, p.aircraft_id).airline_id).name}</p>
                                        </div>
                                        <button onClick={handleClickOpenTrip} className='hover:bg-[#86d2e7df] text-[#2c5f6d] rounded-xl w-40 font-semibold p-0.5 flex items-center gap-2'>Chi tiết hành trình<CiSaveUp2 /></button>
                                        <DialogTrip openTrip={openTrip} handleCloseTrip={handleCloseTrip} />
                                    </div>
                                </div>
                                <div className='grid grid-cols-3  '>
                                    {seatTypes.map((item, index) => (
                                        <Link to={"/customer"} key={index} className={`my-5 px-3  bg-[#1b748c] text-white py-8 flex flex-col text-center ${codeColor[index]}`}>

                                            <p className='text-xl font-semibold'>{item.name}</p>
                                            <p>Number {countChair(p.aircraft_id, item.id)}</p>
                                            <div className='flex flex-col'>
                                                <h1 className='text-2xl font-semibold' >{item.price}</h1>
                                                <h2>VND</h2>
                                            </div>
                                            <FaChevronDown className='m-auto mt-7' />
                                        </Link>
                                    ))}

                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default SearchFlight;