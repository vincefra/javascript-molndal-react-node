import React, { useState, useEffect, useContext } from 'react'
import { ApiContext } from '../utils/global/provider/ApiProvider'
import Axios from 'axios'

export const HomeView = () => {

    const [data, setData] = useState([])

    //vår global variabel
    const [dataApi, setDataApi] = useContext(ApiContext)

    //hämta extern data från specifik länk, i detta fall people/1 aka the rescuer
    const fetchDataFromApi = () => {
        Axios.get("http://localhost:3001/user")
            .then((response) => {
                console.log(response.data)
                setData(response.data)
            })
            .catch((error) => console.log(error)) //ifall vi failar att hämta data
    }


    //kalla på vår metod innan vi fortsätter ladda sidan
    useEffect(() => {
        fetchDataFromApi()
    }, [])

    const displayData = () => {
        if (data) {
            return <div>
                <ul>
                    {data.map(user => {
                        return (
                            <li key={user._id}>
                                Username: {user.username} - Password: {user.password} - Created: {user.createdAt}
                            </li>
                        )
                    })}
                </ul>
                {/*
                <h3>Id: {data._id}</h3>
                <h3>Name: {data.username}</h3>
                <h3>Password: {data.password}</h3>
                {setDataApi(data.username)}
                {console.log(dataApi)}*/}
            </div>
        }
    }

    return (
        <div>
            <h1>Mest fokus på backend-delen än design!</h1>
            {displayData()}
            <button onClick={() => fetchDataFromApi()}>Testa hämta data manuellt med knapp</button>
        </div>
    )
}