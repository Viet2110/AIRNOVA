import React, { createContext, useEffect, useState } from 'react';
import { fetchDocumentsRealtime } from '../services/firebasesService';

export const AircraftContext = createContext();
function AircraftProvider({ children }) {
    const [aircrafts, setAircrafts] = useState([]);
    useEffect(() => {
        const unsubscribe = fetchDocumentsRealtime("Aircrafts", (p) => {
            setAircrafts(p);
        });
        return () => unsubscribe();
    }, [])
    return (
        <AircraftContext.Provider value={aircrafts}>
            {children}
        </AircraftContext.Provider>
    );
}

export default AircraftProvider;