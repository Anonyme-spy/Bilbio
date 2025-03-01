import Artists from "../json/Artist.json"; // importe une liste json
import Bio from "./Bio.jsx"; // importe le composant Bio

export function Picasso() {
    const picasso = Artists.Picasso; // importe la liste json dans la variable picasso
    return (
        <Bio name={picasso.name} description={picasso.description} imageUrl={picasso.imageUrl}></Bio>
    )
}

export const Raphael = () => {
    const raphael = Artists.Raphael; // importe la liste json dans la variable raphael
    return (
        <Bio name={raphael.name} description={raphael.description} imageUrl={raphael.imageUrl}/>
    )
}

export const VanGogh = () => {
    const van_Gogh = Artists.VanGogh; // importe la liste json dans la variable van_Gogh
    return (
        <Bio name={van_Gogh.name} description={van_Gogh.description} imageUrl={van_Gogh.imageUrl}></Bio>
    )
}

export function Leonardo() {
    const leonardo = Artists.Leonardo; // importe la liste json dans la variable leonardo
    return (
        <Bio name={leonardo.name} description={leonardo.description} imageUrl={leonardo.imageUrl}></Bio>
    )
}

export function Michelangelo() {
    const michelangelo = Artists.Michelangelo; // importe la liste json dans la variable michelangelo
    return (
        <Bio name={michelangelo.name} description={michelangelo.description} imageUrl={michelangelo.imageUrl}></Bio>
    )
}