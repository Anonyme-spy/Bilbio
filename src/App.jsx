// react router permettant de charger toute la page directement par la navigation pour plus de fluditer
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' // noter ici que j'ai changer le nom de browserRouter en seulement Router
// ci-dessous sont les importations des pages et composant
import Home from '/src/page/Home.jsx'
import NavBar from "./Component/NavBar.jsx";
import AboutUs from "./page/AboutUs.jsx";
import Services from "./page/Services.jsx";
import Contacts from "./Component/Contacts.jsx";
import Gallery from "./page/Gallery.jsx";
import './App.css' // utilise app css

function App() {
    return (
        <Router> {/*permet de charger toute la page directement */}
            <NavBar/> {/* bare gauche de navigation pour changer les pages*/}
            <Routes> {/* dit au navigateur de montrer qu'une Page à la fois*/}
                <Route path="/*" element={<Home/>}/>{/*   path="/*" veut dire que c'est le premier page */}
                <Route path={'/About'} element={
                    <AboutUs/>}/> {/*   path="/About" veut dire que le composant AboutUs est la page du lien About */}
                <Route path={'/Services'} element={<Services/>}/>
                <Route path={'/contact'} element={<Contacts/>}/>
                <Route path={'/Gallery'} element={<Gallery/>}/>
            </Routes>
        </Router>
    )
}

export default App