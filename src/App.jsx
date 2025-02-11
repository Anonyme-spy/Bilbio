import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '/src/Home.jsx'
import NavBar from "./Component/NavBar.jsx";
import './App.css'

function App() {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/*" element={<Home/>}/>
            </Routes>
        </Router>
    )
}

export default App
