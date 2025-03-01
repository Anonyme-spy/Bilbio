import {NavLink} from "react-router-dom"; //importation de la navigation

export const NavBar = () => {
    // NavBar est un composant de navigation
    return (
        <nav className={'NavBar'}>{/*NavLink permet d'envoyer au navigateur quel Page a montrer*/}
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>A propos</NavLink>
            <NavLink to={'/services'}>Services</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
            <NavLink to={'/Gallery'}>Gallery</NavLink>
        </nav>
    )
}

export default NavBar