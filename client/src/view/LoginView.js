import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../utils/global/provider/UserProvider'
import { useHistory } from 'react-router-dom'

export const LoginView = () => {

    //history för att pusha oss till ny vy med router-dom
    const history = useHistory()

    //vår global variabel
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    //kolla ifall vi har loggat in tidigare för undvika att kunna logga in igen (av nån anledning funkar den ej?)
    useEffect(() => {
        if (loggedInUser)
            history.push('/')
    }, [])

    //useState object utan premade namn på variablar
    const [user, setUser] = useState({})

    const updateUser = event => {
        //uppdatera värdet genom deras namn sen value, använd ...currentUser för att använda data som existerar
        setUser(currentUser => ({ ...currentUser, [event.target.name]: event.target.value }));
    }

    const loginUser = () => {
        //spara uppgifterna lokalt
        localStorage.setItem("username", user.username)
        localStorage.setItem("password", user.password)

        //spara i vår global variabel
        setLoggedInUser(user.username)

        //ta oss till home/index
        history.push('/')
    }

    return (
        <div>
            <span>Username: </span><input type="text" name="username" onChange={updateUser} />
            <span>Password: </span><input type="password" name="password" onChange={updateUser} />
            <br />
            <button onClick={() => loginUser()}>Login</button>
        </div>
    )
}