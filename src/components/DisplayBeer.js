import styles from './DisplayBeer.module.css'

export default function DisplayBeer (props) {
    return (
      <div className={styles.displayCard}>
        <img src={props.image_url} alt={props.name} />
        <h3>
          {props.name} <span>{props.attenuation_level}</span>
        </h3>
        <h4>
          {props.tagline} <span>{props.first_brewed}</span>
        </h4>
        <p>{props.description}</p>
        <small>{props.contributed_by}</small>
      </div>
    ); 
}