import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '/src/page/Home.jsx'
import NavBar from "./Component/NavBar.jsx";
import './App.css'
import AboutUs from "./page/AboutUs.jsx";
import Services from "./page/Services.jsx";
import Contacts from "./Component/Contacts.jsx";
import Gallery from "./page/Gallery.jsx";

function App() {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/*" element={<Home/>}/>
                <Route path={'/About'} element={<AboutUs/>}/>
                <Route path={'/Services'} element={<Services/>}/>
                <Route path={'/contact'} element={<Contacts/>}/>
                <Route path={'/Gallery'} element={<Gallery/>}/>
            </Routes>
        </Router>
    )
}

export default App