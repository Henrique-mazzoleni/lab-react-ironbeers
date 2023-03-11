import { Link } from "react-router-dom"

import styles from './DisplayCard.module.css';

export default function DisplayCard (props) {
    return (
        <div className={styles.card}>
            <Link to={props.link} >
                <img src={props.picture} alt={props.alt} />
            </Link>
            <h2>{props.title}</h2>
            <p>{props.children}</p>
        </div>
    )
}