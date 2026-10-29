import React, { createContext, useEffect, useState } from 'react';
import { searchType } from '../types/Types';

export const BookingContext = createContext();
function BookingProvider({ children }) {
    const [booking, setBooking] = useState(searchType);
    useEffect(() => {
        const a = localStorage.getItem("booking");
        if (a) {
            setBooking(JSON.parse(a));
        }
    }, []);

    const handleSave = (acc) => {
        localStorage.setItem("booking", JSON.stringify(acc));
    }

    return (
        <BookingContext.Provider value={{ booking, setBooking, handleSave }}>
            {children}
        </BookingContext.Provider>
    );
}

export default BookingProvider;