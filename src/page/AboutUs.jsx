import infos from '../json/info.json' // importe une liste json

export function AboutUs() {
    const array = infos.about_us; // importe la liste json dans la variable array
    return (
        <div> {/* affiche les informations de la liste json */}
            <h1>{array.title}</h1>
            <p>{array.intro}</p>
            <p>{array.vision}</p>
            <h2>Notre Mission</h2>
            <p>{array.mission.promotion} : {array.mission.details.promotion}</p>
            <p>{array.mission.accessibility} : {array.mission.details.accessibility}</p>
            <p>{array.mission.education} : {array.mission.details.education}</p>
        </div>
    )
}

export default AboutUs