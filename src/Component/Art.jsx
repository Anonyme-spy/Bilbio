const Art = ({word, img, name}) => {
    return (
        <li className='item'
            style={{backgroundImage: `url(${img})`}}>
            <div className='content'>
                <h2 className='title'>"{name}"</h2>
                <p className='description'>{word}</p>
                <button>Read More</button>
            </div>
        </li>
    )
}

export default Art