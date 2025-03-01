export const Bio = ({name, description, imageUrl}) => {
    // un composant Bio qui affiche une image, un nom et une description de l'artiste et l'image
    return (
        <div className="bio-container">
            <img src={imageUrl} alt={`${name}'s picture`} className="bio-image"/>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    );

}

export default Bio; //exporte le composant Bio pour l'utiliser dans d'autres fichiers