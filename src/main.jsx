import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css' //importer l'index css en le lian
import App from './App.jsx' // importation de base du web app

createRoot(document.getElementById('root')).render(
    <StrictMode> {/* Dit au navigateur que la page est absolue*/}
        <App/> {/* utilisation de l'app*/}
    </StrictMode>,
)
