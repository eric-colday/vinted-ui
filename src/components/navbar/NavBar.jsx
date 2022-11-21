import React from 'react'
import "./navbar.css";
import { NavLink } from "react-router-dom";


const NavBar = () => {

  return (
    <nav className="navBar" >
        <div className="navBarButtons">
            <NavLink
                to="/"
                className="navBarLink"
            >
                Femmes
            </NavLink>
        </div>
        <div className="navBarButtons">
            <NavLink
                to="/"
                className="navBarLink"
            >
                Hommes
            </NavLink>
        </div>
        <div className="navBarButtons">
            <NavLink 
                to="/"
                className="navBarLink"
                >
                Enfants
            </NavLink>
        </div>
        <div className="navBarButtons">
            <NavLink 
                to="/"
                className="navBarLink"
                >
                Maison
            </NavLink>
        </div>
        <div className="navBarButtonsTwo">
            <NavLink 
                to="/"
                className="navBarLink"
                >
                Divertissement
            </NavLink>
        </div>
        <div className="navBarButtons">
            <NavLink 
                to="/"
                className="navBarLink"
                >
                Animaux
            </NavLink>
        </div>
        <div className="navBarButtons">
            <NavLink 
                to="/"
                className="navBarLink"
                >
                À propos
            </NavLink>
        </div>
        <div className="navBarButtonsThree">
            <NavLink 
                to="/"
                className="navBarLink"
                >
                Notre plateforme
            </NavLink>
        </div>
    </nav>
  )
}

export default NavBar