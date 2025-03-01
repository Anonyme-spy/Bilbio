import {NavLink} from "react-router-dom"; //importation de la navigation

export const SideBar = () => {
    return (
        <nav className={'SideBar'}> {/*NavLink permet d'envoyer au navigateur quel composant a montrer*/}
            <NavLink to={'/'}>Leonardo da vinci</NavLink>
            <NavLink to={'/van_Goth'}>Vincent van Gogh</NavLink>
            <NavLink to={'/Michelangelo'}>Michelangelo</NavLink>
            <NavLink to={'/Picasso'}>Pablo Picasso</NavLink>
            <NavLink to={'/Raphael'}>Raphael</NavLink>
        </nav>
    )
}

export default SideBar