import { Fragment, useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import DisplayBeer from "../components/DisplayBeer";

export default function RandomBeerPage () {
  const [beerData, setBeerData] = useState({});

  useEffect(() => {
    const fetchBeerData = async () => {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setBeerData(response.data);
    };
    try {
      fetchBeerData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Fragment>
      <Navbar />
      <DisplayBeer {...beerData} />
    </Fragment>
  );
}