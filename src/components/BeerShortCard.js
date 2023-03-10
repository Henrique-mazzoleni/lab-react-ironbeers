import { Link } from "react-router-dom";

export default function BeerShortCard (props) {
    return (
      <div className="card">
        <Link to={`/beers/${props._id}`}>
          <img src={props.image_url} alt={props.name} />
        </Link>
        <h3>{props.name}</h3>
        <p>{props.tagline}</p>
        <p>
          <strong>Created by:</strong>
          {props.contributed_by}
        </p>
      </div>
    );
}