import SideBar from "../Component/SideBar.jsx";
import {Route, Routes} from "react-router-dom";
import {Leonardo, Michelangelo, Picasso, Raphael, VanGogh} from "../Component/Artist.jsx";


export function Home() {

    return (
        <div className={'body-art'}>
            <SideBar/>
            <div className={'containerBio'}>
                <Routes>
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