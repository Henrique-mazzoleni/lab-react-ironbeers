import { Fragment, useEffect, useState } from "react"
import BeerShortCard from "../components/BeerShortCard";
import Navbar from "../components/Navbar"

export default function AllBeersPage () {
  const [beersList, setBeersList] = useState([]);

  useEffect(() => {
    const fetchBeers = async () => {
      const response = await fetch("https://ih-beers-api2.herokuapp.com/beers")
      const data = await response.json()
      setBeersList(data)
    }

    fetchBeers()
  },[])

    return (
      <Fragment>
        <Navbar />
        <h1>All Beers</h1>
        <ul>
          {beersList.length !== 0 &&
            beersList.map((beer) => <BeerShortCard key={beer._id} {...beer} />)}
        </ul>
      </Fragment>
    );
}