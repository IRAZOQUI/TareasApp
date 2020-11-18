import React from 'react';
import { Link, NavLink } from 'react-router-dom';
export const NavBar = () => {
    return (
 //La mayor diferencia entre link y NavLink es el navlink nos ayuda a activar Css cuando actualisamos 

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand">Use Context</a>
      
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                       
                    {/* <Link to="/" className="nav-link active"> Home </Link>
                    <Link to="/login" className="nav-link"> Login </Link>
                    <Link to="/about" className="nav-link"> About </Link> */}

                    <NavLink exact activeClassName="active" to="/" className="nav-link "> Home </NavLink>
                    <NavLink exact activeClassName="active" to="/login" className="nav-link"> Login </NavLink>
                    <NavLink exact activeClassName="active" to="/about" className="nav-link"> About </NavLink> 

                </div>
            </div>
        </nav>
        

    )
}
