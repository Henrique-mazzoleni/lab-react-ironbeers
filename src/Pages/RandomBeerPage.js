import { Fragment, useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import DisplayBeer from "../components/DisplayBeer";

export default function RandomBeerPage () {
  const [beerData, setBeerData] = useState({});

  useEffect(() => {
    const fetchBeerData = async () => {
      const response = await fetch(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      const data = await response.json();
      setBeerData(data);
    };

    fetchBeerData();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <DisplayBeer {...beerData} />
    </Fragment>
  );
}