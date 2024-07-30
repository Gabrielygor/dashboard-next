'use client'

import React, { createContext, useContext, useState } from 'react';

interface LocationContextType {
    selectedLocationId: string;
    setSelectedLocationId: (id: string) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedLocationId, setSelectedLocationId] = useState<string>('1293177');

    return (
        <LocationContext.Provider value={{ selectedLocationId, setSelectedLocationId }}>
            {children}
        </LocationContext.Provider>
    );
};

export const useLocation = () => {
    const context = useContext(LocationContext);
    if (!context) {
        throw new Error('useLocation must be used within a LocationProvider');
    }
    return context;
};