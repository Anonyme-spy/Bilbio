import {NavLink} from "react-router-dom";

export const SideBar = () => {
    return (
        <nav className={'SideBar'}>
            <NavLink to={'/'}>Leonardo da vinci</NavLink>
            <NavLink to={'/van_Goth'}>Vincent van Gogh</NavLink>
            <NavLink to={'/Michelangelo'}>Michelangelo</NavLink>
            <NavLink to={'/Picasso'}>Pablo Picasso</NavLink>
            <NavLink to={'/Raphael'}>Raphael</NavLink>
        </nav>
    )
}

export default SideBar