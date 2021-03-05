import React, { useEffect, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { LoginView } from '../view/LoginView'
import { UserContext } from '../utils/global/provider/UserProvider'

export const Routing = (props) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const isUserLoggedIn = () => {
        setLoggedInUser(localStorage.getItem("username"))
    }

    useEffect(() => {
        isUserLoggedIn()
    }, [])

    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path="/login" component={LoginView} />
                <Route component={HomeView} />
            </Switch>
        </Router>
    )
}