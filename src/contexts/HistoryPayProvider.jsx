import React, { createContext, useEffect, useState } from 'react';
import { fetchDocumentsRealtime } from '../services/firebasesService';

export const HistoryPayContext = createContext();
function HistoryPayProvider({ children }) {
    const [historyPays, setHistoryPays] = useState([]);
    useEffect(() => {
        const unsubscribe = fetchDocumentsRealtime("bookings", (p) => {
            setHistoryPays(p);
        });
        return () => unsubscribe();
    }, [])
    return (
        <HistoryPayContext.Provider value={historyPays}>
            {children}
        </HistoryPayContext.Provider>
    );
}

export default HistoryPayProvider;