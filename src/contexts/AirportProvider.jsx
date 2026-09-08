import React, { createContext, useEffect, useState } from 'react';
import { fetchDocumentsRealtime } from '../services/firebasesService';

export const AirportContext = createContext();
function AirportProvider({ children }) {
    const [airports, setAirports] = useState([]);
    useEffect(() => {
        const unsubscribe = fetchDocumentsRealtime("Airports", (p) => {
            setAirports(p);
        });
        return () => unsubscribe();
    }, [])
    return (
        <AirportContext.Provider value={airports}>
            {children}
        </AirportContext.Provider>
    );
}

export default AirportProvider;