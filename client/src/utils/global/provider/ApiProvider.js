import React, { useState, createContext } from 'react'

export const ApiContext = createContext()

export const ApiProvider = (props) => {

    const [dataApi, setDataApi] = useState()

    return (
        <ApiContext.Provider value={[dataApi, setDataApi]}>
            {props.children}
        </ApiContext.Provider>
    )
}