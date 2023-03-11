import { Link } from "react-router-dom";

import styles from './BeerShortCard.module.css'

export default function BeerShortCard (props) {
    return (
      <div className={styles.card}>
        <Link to={`/beers/${props._id}`}>
          <img src={props.image_url} alt={props.name} />
        </Link>
        <div className={styles.info}>
        <h3>{props.name}</h3>
        <small>{props.tagline}</small>
        <p><strong>Created By:</strong> {props.contributed_by}</p>
        </div>
      </div>
    );
}