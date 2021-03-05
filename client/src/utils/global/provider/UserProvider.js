import React, { useState, createContext } from 'react'

export const UserContext = createContext()

export const UserProvider = (props) => {

    const [loggedInUser, setLoggedInUser] = useState()

    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            {props.children}
        </UserContext.Provider>
    )
}