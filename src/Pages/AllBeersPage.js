import { Fragment, useEffect, useState } from "react"
import axios from "axios";
import BeerShortCard from "../components/BeerShortCard";
import Navbar from "../components/Navbar";

export default function AllBeersPage () {
  const [beersList, setBeersList] = useState([]);
  const [query, setQuery] = useState('')

  
  const queryHandler = (event) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    const fetchBeers = async () => {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      setBeersList(response.data)
    }
    try {
      fetchBeers()
    } catch (error) {
      console.log(error);
    }
  },[query])

    return (
      <Fragment>
        <Navbar />
        <label>Search Beers
          <input type="text" value={query} onChange={queryHandler} />
        </label>
        <ul>
          {beersList.length !== 0 &&
            beersList.map((beer) => <BeerShortCard key={beer._id} {...beer} />)}
        </ul>
      </Fragment>
    );
}