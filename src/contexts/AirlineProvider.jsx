import React, { createContext, useEffect, useState } from 'react';
import { fetchDocumentsRealtime } from '../services/firebasesService';

export const AirlineContext = createContext();
function AirlineProvider({ children }) {
    const [airlines, setAirlines] = useState([]);
    useEffect(() => {
        const unsubscribe = fetchDocumentsRealtime("Airlines", (p) => {
            setAirlines(p);
        });
        return () => unsubscribe();
    }, [])
    return (
        <AirlineContext.Provider value={airlines}>
            {children}
        </AirlineContext.Provider>
    );
}

export default AirlineProvider;