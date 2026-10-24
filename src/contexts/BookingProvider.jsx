import React, { createContext, useState } from 'react';
import { searchType } from '../types/Types';

export const BookingContext = createContext();
function BookingProvider({ children }) {
    const [booking, setBooking] = useState(searchType);
    return (
        <BookingContext.Provider value={{ booking, setBooking }}>
            {children}
        </BookingContext.Provider>
    );
}

export default BookingProvider;