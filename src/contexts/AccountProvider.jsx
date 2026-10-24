import React, { createContext, useEffect, useState } from 'react';
import { fetchDocumentsRealtime } from '../services/firebasesService';

export const AccountContext = createContext();
function AccountProvider({ children }) {
    const [accounts, setAccounts] = useState([]);
    useEffect(() => {
        const unsubscribe = fetchDocumentsRealtime("Accounts", (p) => {
            setAccounts(p);
        });
        return () => unsubscribe();
    }, [])
    return (
        <AccountContext.Provider value={accounts}>
            {children}
        </AccountContext.Provider>
    );
}

export default AccountProvider;