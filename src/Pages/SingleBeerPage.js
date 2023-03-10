import { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar";

export default function SingleBeerPage () {
    const { beerId } = useParams();
    const [beerData, setBeerData] = useState({})

    useEffect(() => {
        const fetchBeerData = async () => {
            const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            const data = await response.json()
            setBeerData(data);
        }

        fetchBeerData();
    },[beerId])

    return <Fragment>
        <Navbar />
        <img src={beerData.image_url} alt={beerData.name} />
        <h3>{beerData.name} <span>{beerData.attenuation_level}</span></h3>
        <h4>{beerData.tagline} <span>{beerData.first_brewed}</span></h4>
        <p>{beerData.description}</p>
        <small>{beerData.contributed_by}</small>
    </Fragment> 
}