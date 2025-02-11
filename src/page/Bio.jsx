export const Bio = ({name, description, imageUrl}) => {
    return (
        <div className="bio-container">
            <img src={imageUrl} alt={`${name}'s picture`} className="bio-image"/>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    );

}

export default Bio;