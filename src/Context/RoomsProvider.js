import React, { createContext } from 'react';
import { useRoomData } from '../Hooks/useRoomData';

export const RoomsContext = createContext();

const RoomsProvider = ({ children }) => {
    const AllRoomData = useRoomData();
    return (
        <RoomsContext.Provider value={AllRoomData}>
            {children}
        </RoomsContext.Provider>
    );
};

export default RoomsProvider;