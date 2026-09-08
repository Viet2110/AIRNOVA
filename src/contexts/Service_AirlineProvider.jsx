import React, { createContext, useEffect, useState } from 'react';
import { fetchDocumentsRealtime } from '../services/firebasesService';

export const Service_AirlineContext = createContext();
function Service_AirlineProvider({ children }) {
    const [serviceAirlines, setServiceAirlines] = useState([]);
    useEffect(() => {
        const unsubscribe = fetchDocumentsRealtime("ServiceAirlines", (p) => {
            setServiceAirlines(p);
        });
        return () => unsubscribe();
    }, [])
    return (
        <Service_AirlineContext.Provider value={serviceAirlines}>
            {children}
        </Service_AirlineContext.Provider>
    );
}

export default Service_AirlineProvider;