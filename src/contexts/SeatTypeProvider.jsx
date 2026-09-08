import React, { createContext, useEffect, useState } from 'react';
import { fetchDocumentsRealtime } from '../services/firebasesService';

export const SeatTypeContext = createContext();
function SeatTypeProvider({ children }) {
    const [seatTypes, setSeatTypes] = useState([]);
    useEffect(() => {
        const unsubscribe = fetchDocumentsRealtime("SeatTypes", (p) => {
            setSeatTypes(p);
        });
        return () => unsubscribe();
    }, [])
    return (
        <SeatTypeContext.Provider value={seatTypes}>
            {children}
        </SeatTypeContext.Provider>
    );
}

export default SeatTypeProvider;