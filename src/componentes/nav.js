import React from 'react'
import './css/nav.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'

const nav = () => {
    return(
        <div className="nav">
            <h1 className="title"><FontAwesomeIcon icon={faUsers} className="icon-logo"/>Usuario</h1>
            <nav>
                <Router>
                    <Link to="/login" className="close">Cerrar Sesión</Link>
                </Router>
            </nav>
        </div>
    )
}
export default nav