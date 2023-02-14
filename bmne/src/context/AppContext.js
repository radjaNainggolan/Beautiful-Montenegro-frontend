import React from "react";
import { useState } from "react";

export const AppContext = React.createContext({});

const AppProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const [logedIn, setLogedIn] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [data,setData] = useState(null);
    const [draw, setDraw] = useState([])
    return (
        <AppContext.Provider value={{token,logedIn, setToken, setLogedIn, cartOpen,setCartOpen, data, setData, draw, setDraw}}>
            {children}
        </AppContext.Provider>
    )
}   
 
export default AppProvider;