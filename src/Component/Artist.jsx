import Artists from "../json/Artist.json";
import Bio from "../page/Bio.jsx";

export function Picasso() {
    const picasso = Artists.Picasso;
    return (
        <Bio name={picasso.name} description={picasso.description} imageUrl={picasso.imageUrl}></Bio>
    )
}

export const Raphael = () => {
    const raphael = Artists.Raphael;
    return (
        <Bio name={raphael.name} description={raphael.description} imageUrl={raphael.imageUrl}/>
    )
}

export const VanGogh = () => {
    const van_Gogh = Artists.VanGogh;
    return (
        <Bio name={van_Gogh.name} description={van_Gogh.description} imageUrl={van_Gogh.imageUrl}></Bio>
    )
}

export function Leonardo() {
    const leonardo = Artists.Leonardo;
    return (
        <Bio name={leonardo.name} description={leonardo.description} imageUrl={leonardo.imageUrl}></Bio>
    )
}

export function Michelangelo() {
    const michelangelo = Artists.Michelangelo;
    return (
        <Bio name={michelangelo.name} description={michelangelo.description} imageUrl={michelangelo.imageUrl}></Bio>
    )
}