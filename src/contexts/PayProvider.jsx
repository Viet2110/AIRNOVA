import React, { createContext, useEffect, useState } from 'react';
import { fetchDocumentsRealtime } from '../services/firebasesService';

export const PayContext = createContext();
function PayProvider({ children }) {
    const [pays, setPays] = useState([]);
    useEffect(() => {
        const unsubscribe = fetchDocumentsRealtime("pays", (p) => {
            setPays(p);
        });
        return () => unsubscribe();
    }, [])
    return (
        <PayContext.Provider value={pays}>
            {children}
        </PayContext.Provider>
    );
}

export default PayProvider;