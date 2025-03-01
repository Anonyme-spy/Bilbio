import "/src/css/Gallery.css" // utilise ce css
import {useEffect} from 'react'; //les fonctions dans useEffect sont generer en dernier
import Arts from "../json/Art.json"; // importe une liste json
import Art from "../Component/Art.jsx"; //importe le composant Art pour l'utiliser dans la page

export default function Gallery() {
    const arts = Arts; // importe la liste json dans la variable arts
    useEffect(() => { // utilise useEffect pour activer les boutons de navigation
        const slider = document.querySelector('.slider');

        function activate(e) { // fonction pour activer les boutons de navigation
            const items = document.querySelectorAll('.item');
            if (e.target.matches('.next')) { // si le bouton next est cliqué, le slider affiche l'image suivante
                slider.append(items[0]);
            } else if (e.target.matches('.prev')) {
                slider.prepend(items[items.length - 1]);
            }
        }

        document.addEventListener('click', activate, false); // ajoute un event listener pour activer les boutons de navigation

        return () => {
            document.removeEventListener('click', activate, false); // enleve l'event listener pour eviter les bugs de navigation dans la page
        };
    }, []);

    return (
        <div className={"body"}>
            <main className={"main"}>
                <ul className='slider'>{/* utilise le composant Art pour afficher les images et les descriptions */}
                    <Art word={arts.Monalisa.description} name={arts.Monalisa.name} img={arts.Monalisa.imageUrl}/>
                    <Art word={arts.Guernica.description} name={arts.Guernica.name} img={arts.Guernica.imageUrl}/>
                    <Art word={arts.The_creation_of_Adam.description} name={arts.The_creation_of_Adam.name}
                         img={arts.The_creation_of_Adam.imageUrl}/>
                </ul>
                <nav className='nav'> {/* boutons de navigation */}
                    <ion-icon className='btn prev' name="arrow-back-outline"></ion-icon>
                    <ion-icon className='btn next' name="arrow-forward-outline"></ion-icon>
                </nav>
            </main>
        </div>
    );
}