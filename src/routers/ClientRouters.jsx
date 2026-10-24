import { Route, Router, Routes } from 'react-router-dom';
import SearchFlight from '../pages/client/flight/SearchFlight';
import Home from '../pages/client/home/Home';
import Customer from '../pages/client/customer/Customer';

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