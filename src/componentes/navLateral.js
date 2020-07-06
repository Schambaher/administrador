import React from 'react'

import './css/navLateral.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faMapMarkerAlt, faBuilding } from '@fortawesome/free-solid-svg-icons'

import {
    BrowserRouter as Router,
    Link, 
} from 'react-router-dom'


const navLateral = () => {
    return(
        <aside className="nav-block">
            <h1 className="logo">LOGO</h1>
            <div className="admin">
                <img src="#" className="admin-logo"/><span className="admin-text">Admin</span> 
            </div>
            <nav>
                <Router>
                    <Link to="/adminUsuario" className="link link-user">
                        <FontAwesomeIcon icon={faUsers}/> Usuarios
                    </Link>
                    <Link to="/adminCentroTuristico" className="link link-center-turistic">
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Centros turisticos
                    </Link>
                    <Link to="/adminDepartamento" className="link link-depart">
                        <FontAwesomeIcon icon={faBuilding} /> Departamentos
                    </Link>
                </Router>
            </nav>
        </aside>
        
    )
}
export default navLateral