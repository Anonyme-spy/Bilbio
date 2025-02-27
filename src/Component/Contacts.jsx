import info from '../json/info.json'

export default function Contacts() {
    const contacts = info.about_us.contact;
    return (
        <div>
            <h3>{contacts}</h3>
        </div>
    )
}