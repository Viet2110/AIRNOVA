import React, { createContext, useEffect, useState } from 'react';
import { fetchDocumentsRealtime } from '../services/firebasesService';

export const Service_DetailContext = createContext();
function Service_DetailProvider({ children }) {
    const [serviceDetails, setServiceDetails] = useState([]);
    useEffect(() => {
        const unsubscribe = fetchDocumentsRealtime("ServiceDetails", (p) => {
            setServiceDetails(p);
        });
        return () => unsubscribe();
    }, [])
    return (
        <Service_DetailContext.Provider value={serviceDetails}>
            {children}
        </Service_DetailContext.Provider>
    );
}

export default Service_DetailProvider;