import React, { useContext } from 'react'
import './NavigationBar.css'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../utils/global/provider/UserProvider'

export const NavigationBar = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const displayLoggedInUser = () => {
        return loggedInUser
            ? <h3>{loggedInUser}</h3>
            : <span className="login" onClick={() => history.push("/login")}> Sign In</span>
    }

    return (
        <div className="navigationBarWrapper">
            <span className="home" onClick={() => history.push('/')}>Home</span>

            {displayLoggedInUser()}
        </div>
    )
}