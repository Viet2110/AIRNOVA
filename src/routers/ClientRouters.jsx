import { Route, Router, Routes } from 'react-router-dom';
import SearchFlight from '../pages/client/flight/SearchFlight';
import Home from '../pages/client/home/Home';
import Customer from '../pages/client/customer/Customer';
import SelectChair from '../pages/client/customer/SelectChair';
import Pay from '../pages/client/pay/Pay';
import HistoryPay from '../pages/client/history/HistoryPay';

function ClientRouters(props) {
    const routers = [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/searchFlights",
            element: <SearchFlight />
        },
        {
            path: "/customer",
            element: <Customer />
        },
        {
            path: "/selectchair",
            element: <SelectChair />
        },
        {
            path: "/pay",
            element: <Pay />
        },
        {
            path: "/historypay",
            element: <HistoryPay />
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

export default ClientRouters;