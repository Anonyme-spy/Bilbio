import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className={'NavBar'}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/services'}>Services</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
        </nav>
    )
}

export default NavBar