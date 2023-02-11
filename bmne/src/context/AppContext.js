import React from "react";
import { useState } from "react";

export const AppContext = React.createContext({});

const AppProvider = ({children}) => {
    const [userID, setUserID] = useState(null);
    const [logedIn, setLogedIn] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [data,setData] = useState(null);
    const [draw, setDraw] = useState([])
    return (
        <AppContext.Provider value={{userID,logedIn, setUserID, setLogedIn, cartOpen,setCartOpen, data, setData, draw, setDraw}}>
            {children}
        </AppContext.Provider>
    )
}   
 
export default AppProvider;