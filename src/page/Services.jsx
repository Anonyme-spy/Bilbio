import info from '../json/info.json' //importation d'une liste json

export default function Services() {
    {/* default export exporte ce composant */
    }
    const service = info.about_us.services; // importe la liste info dans le json
    {
        /* "services": {
      "digital_gallery": "Galerie Numérique",
      "artist_archives": "Archives d'Artistes",
      "virtual_events": "Événements Virtuels",
      "details": {
        "digital_gallery": "Explorez des expositions virtuelles et des galeries interactives.",
        "artist_archives": "Parcourez les biographies, interviews, et œuvres d'artistes contemporains.",
        "virtual_events": "Participez à des webinaires, des ateliers et des discussions en direct avec des artistes et des experts."
      }*/
    }

    return (
        <div> {/*appel la liste json importer en haut*/}
            <h1>{service.digital_gallery}</h1>
            <p>{service.details.digital_gallery}</p>
            <h1>{service.artist_archives}</h1>
            <p>{service.details.artist_archives}</p>
            <h1>{service.virtual_events}</h1>
            <p>{service.details.virtual_events}</p>
        </div>
    )
}