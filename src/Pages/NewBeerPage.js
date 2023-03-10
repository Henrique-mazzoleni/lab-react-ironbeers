import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";


export default function NewBeerPage () {
  const navigate = useNavigate()

  const [inputObject, setInputObject] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "2021-06-26",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const inputHandler = (event) => {
    const returnObject = {...inputObject};
    
    returnObject[event.target.id] =
      event.target.id === "attenuation_level"
        ? Number(event.target.value)
        : event.target.value;

    setInputObject(returnObject);
  }

  const submitHandler = async (event) => {
    event.preventDefault()

    try {
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", inputObject)
      navigate("/beers");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Fragment>
      <Navbar />
      <form onSubmit={submitHandler}>
        <label>
          Name
          <input
            type="text"
            id="name"
            value={inputObject.name}
            onChange={inputHandler}
          />
        </label>
        <label>
          Tagline
          <input
            type="text"
            id="tagline"
            value={inputObject.tagline}
            onChange={inputHandler}
          />
        </label>
        <label>
          Description
          <textarea
            cols="30"
            rows="10"
            id="description"
            value={inputObject.description}
            onChange={inputHandler}></textarea>
        </label>
        <label>
          First Brewed
          <input
            type="date"
            id="first_brewed"
            value={inputObject.first_brewed}
            onChange={inputHandler}
          />
        </label>
        <label>
          Brewers Tips
          <input
            type="text"
            id="brewers_tips"
            value={inputObject.brewers_tips}
            onChange={inputHandler}
          />
        </label>
        <label>
          Attenuation Level
          <input
            type="number"
            id="attenuation_level"
            value={inputObject.attenuation_level}
            onChange={inputHandler}
          />
        </label>
        <label>
          Contributed By
          <input
            type="text"
            id="contributed_by"
            value={inputObject.contributed_by}
            onChange={inputHandler}
          />
        </label>

        <button type="submit">Add New</button>
      </form>
    </Fragment>
  );
}