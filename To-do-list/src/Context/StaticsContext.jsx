import React, { createContext, useState } from "react";

export const StaticContext = createContext();

function StaticContextprovider({ children }) {
    const [firstuse , setfirstuse] = useState(true)

    return (
        <StaticContext.Provider value={{firstuse , setfirstuse}} >
            {children}
        </StaticContext.Provider>
    );
}

export default StaticContextprovider ; 