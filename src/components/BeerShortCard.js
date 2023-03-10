export default function BeerShortCard (props) {
    return <div className="card">
        <img src={props.image_url} alt={props.name} />
        <h3>{props.name}</h3>
        <p>{props.tagline}</p>
        <p><strong>Created by:</strong>{props.contributed_by}</p>
    </div>
}