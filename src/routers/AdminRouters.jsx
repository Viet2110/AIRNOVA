import React from 'react';
import Aircrafts from '../pages/admin/plane/aircrafts/Aircrafts';
import Airports from '../pages/admin/plane/airports/Airports';
import Airlines from '../pages/admin/plane/airlines/Airlines';
import Services_Airlines from '../pages/admin/services/services_airlines/Services_Airlines';
import Services_Details from '../pages/admin/services/services_details/Services_Details';
import Use_Page from '../pages/admin/use_page/Use_Page';
import { Route, Routes } from 'react-router-dom';
import Booking from '../pages/admin/order/booking/Booking';
import Customer_Infos from '../pages/admin/order/customer_infos/Customer_Infos';
import Flights from '../pages/admin/order/flight/Flights';
import SeatTypes from '../pages/admin/seat/SeatTypes/SeatTypes';

function AdminRouters(props) {
    const routers = [
        
        {
            path: "/aircrafts",
            element: <Aircrafts />
        },
        {
            path: "/airports",
            element: <Airports />
        },
        {
            path: "/airlines",
            element: <Airlines />
        },
        {
            path: "/services_airlines",
            element: <Services_Airlines />
        },
        {
            path: "/services_details",
            element: <Services_Details />
        },
        {
            path: "/bookings",
            element: <Booking />
        },
        {
            path: "/seat_types",
            element: <SeatTypes />
        },
        {
            path: "/customer_infos",
            element: <Customer_Infos/>
        },{
            path: "/flights",
            element: <Flights />
        },
        {
            path: "/use_page",
            element: <Use_Page />
        }
    ]
    return (
        <Routes>
            {
                routers.map(item => (
                    <Route path={item.path} element={item.element} />
                ))
            }
        </Routes>
    );
}

export default AdminRouters;