import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import {ROUTES} from '../../helpers/routes';
import {Home} from '../Home/Home';
import {AboutUs} from '../AboutUs/AboutUs';
import {Projects} from '../Projects/Projects';
import{Contact} from '../Contact/Contact';

export const Navbar = () => {
    return (
        <>
            <Link to={ROUTES.HOME}>HOME</Link>
            <Link to={ROUTES.ABOUT_US}>About Us</Link>
            <Link to={ROUTES.PROJECTS}>Projects</Link>
            <Link to={ROUTES.CONTACT}>Contact</Link>
            <Switch>
                <Route exact path={ROUTES.HOME} component={() => <Home />} />
                <Route path={ROUTES.ABOUT_US} component={() => <AboutUs />} />
                <Route path={ROUTES.PROJECTS} component={() => <Projects />} />
                <Route path={ROUTES.CONTACT} component={() => <Contact />} />
            </Switch>
        </>
    )
} 