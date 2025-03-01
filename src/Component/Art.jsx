const Art = ({word, img, name}) => {
    // un composant Art qui affiche une image, un nom et une description de l'art
    return (
        <li className='item'
            style={{backgroundImage: `url(${img})`}}> {/* affiche l'image de l'art en tant que background */}
            <div className='content'> {/* affiche le nom et la description de l'art */}
                <h2 className='title'>"{name}"</h2>
                <p className='description'>{word}</p>
                <button>Read More</button>
            </div>
        </li>
    )
}

export default Art