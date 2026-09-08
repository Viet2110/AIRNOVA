import React, { createContext, useEffect, useState } from 'react';
import { fetchDocumentsRealtime } from '../services/firebasesService';

export const FlightContext = createContext();
function FlightProvider({ children }) {
    const [flights, setFlights] = useState([]);
    useEffect(() => {
        const unsubscribe = fetchDocumentsRealtime("Flights", (p) => {
            setFlights(p);
        });
        return () => unsubscribe();
    }, [])
    return (
        <FlightContext.Provider value={flights}>
            {children}
        </FlightContext.Provider>
    );
}

export default FlightProvider;