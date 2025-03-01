import info from '../json/info.json' // importe une liste json

export default function Contacts() {
    const contacts = info.about_us.contact; // importe la liste json dans la variable contacts
    return (
        <div>
            <h3>{contacts}</h3>
        </div>
    )
}