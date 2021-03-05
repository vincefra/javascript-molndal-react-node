import React, { useState, useEffect, useContext } from 'react'
import { ApiContext } from '../utils/global/provider/ApiProvider'
import Axios from 'axios'

export const HomeView = () => {

    const [data, setData] = useState()

    //vår global variabel
    const [dataApi, setDataApi] = useContext(ApiContext)

    //hämta extern data från specifik länk, i detta fall people/1 aka the rescuer
    const fetchDataFromApi = () => {
        Axios.get("https://swapi.dev/api/people/1")
            .then((response) => setData(response.data)) //lagra datan vi hämtat, value ligger i data
            .catch((error) => console.log(error)) //ifall vi failar att hämta data
    }


    //kalla på vår metod innan vi fortsätter ladda sidan
    useEffect(() => {
        fetchDataFromApi()
    }, [])

    const displayData = () => {
        if (data) {
            return <div>
                <h3>Name: {data.name}</h3>
                <h3>Height: {data.height}</h3>
                <h3>Gender: {data.gender}</h3>
                {setDataApi(data.name)}
                {console.log(dataApi)}
            </div>
        }
    }

    return (
        <div>
            <h1>Har endast fokuserat på react-delen, så ganska fattig design - satsar ofc till slutprojektet</h1>
            {displayData()}
            <button onClick={() => fetchDataFromApi()}>Testa hämta data manuellt med knapp</button>
        </div>
    )
}