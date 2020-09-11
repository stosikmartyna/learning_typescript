import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../helpers/routes';
import { navbarContainer } from './Navbar.styles';

export const Navbar = () => {
    return (
        <div className={navbarContainer}>
            <Link to={ROUTES.HOME}>Home</Link>
            <Link to={ROUTES.ABOUT_US}>About Us</Link>
            <Link to={ROUTES.PROJECTS}>Projects</Link>
            <Link to={ROUTES.CONTACT}>Contact</Link>
        </div>
    )
} 