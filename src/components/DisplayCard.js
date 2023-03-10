import { Fragment } from "react"
import { Link } from "react-router-dom"

export default function DisplayCard (props) {
    return (
        <Fragment>
            <Link to={props.link} >
                <img src={props.picture} alt={props.alt} />
            </Link>
            <h2>{props.title}</h2>
            <p>{props.children}</p>
        </Fragment>
    )
}