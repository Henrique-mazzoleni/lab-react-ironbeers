import { Fragment, useEffect, useState } from "react"
import axios from "axios";
import BeerShortCard from "../components/BeerShortCard";
import Navbar from "../components/Navbar"

export default function AllBeersPage () {
  const [beersList, setBeersList] = useState([]);

  useEffect(() => {
    const fetchBeers = async () => {
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
      setBeersList(response.data)
    }
    try {
      fetchBeers()
    } catch (error) {
      console.log(error);
    }
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