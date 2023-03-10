import { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Navbar from "../components/Navbar";
import DisplayBeer from "../components/DisplayBeer";

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
        <DisplayBeer {...beerData} />
    </Fragment> 
}