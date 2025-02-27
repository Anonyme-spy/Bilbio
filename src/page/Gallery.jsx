import "/src/css/Gallery.css"
import {useEffect} from 'react';
import Arts from "../json/Art.json";
import Art from "../Component/Art.jsx";

export default function Gallery() {
    const arts = Arts;
    useEffect(() => {
        const slider = document.querySelector('.slider');

        function activate(e) {
            const items = document.querySelectorAll('.item');
            if (e.target.matches('.next')) {
                slider.append(items[0]);
            } else if (e.target.matches('.prev')) {
                slider.prepend(items[items.length - 1]);
            }
        }

        document.addEventListener('click', activate, false);

        return () => {
            document.removeEventListener('click', activate, false);
        };
    }, []);

    return (
        <div className={"body"}>
            <main className={"main"}>
                <ul className='slider'>
                    <Art word={arts.Monalisa.description} name={arts.Monalisa.name} img={arts.Monalisa.imageUrl}/>
                    <Art word={arts.Guernica.description} name={arts.Guernica.name} img={arts.Guernica.imageUrl}/>
                    <Art word={arts.The_creation_of_Adam.description} name={arts.The_creation_of_Adam.name}
                         img={arts.The_creation_of_Adam.imageUrl}/>
                </ul>
                <nav className='nav'>
                    <ion-icon className='btn prev' name="arrow-back-outline"></ion-icon>
                    <ion-icon className='btn next' name="arrow-forward-outline"></ion-icon>
                </nav>
            </main>
        </div>
    );
}