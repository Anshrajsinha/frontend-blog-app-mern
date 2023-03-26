import { createContext, useState } from "react";

export const UserContext = createContext({})

export const UserContextProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({})
    return (
        <UserContext.Provider value={{userInfo: userInfo, setUserInfo: setUserInfo}}>
            {children}
        </UserContext.Provider>
    )
}