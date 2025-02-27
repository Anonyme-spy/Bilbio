import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className={'NavBar'}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>A propos</NavLink>
            <NavLink to={'/services'}>Services</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
            <NavLink to={'/Gallery'}>Gallery</NavLink>
        </nav>
    )
}

export default NavBar