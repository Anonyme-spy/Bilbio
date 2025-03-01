//importe des composants à utiliser
import SideBar from "../Component/SideBar.jsx";
import {Route, Routes} from "react-router-dom";
import {Leonardo, Michelangelo, Picasso, Raphael, VanGogh} from "../Component/Artist.jsx";


export function Home() {

    return (
        <div className={'body-art'}>
            <SideBar/>{/* bare gauche de navigation permutant les composant*/}
            <div className={'containerBio'}>
                <Routes> {/* dit au navigateur de montrer qu'une composante la fois*/}
                    <Route path={'/'} element={<Leonardo/>}/>
                    <Route path={'/Picasso'} element={<Picasso/>}/>
                    <Route path={'/van_Goth'} element={<VanGogh/>}/>
                    <Route path={'/Raphael'} element={<Raphael/>}/>
                    <Route path={'/Michelangelo'} element={<Michelangelo/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Home