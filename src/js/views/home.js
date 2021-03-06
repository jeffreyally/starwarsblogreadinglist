import React from "react";
import { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
//URL/API George said to use is here: https://swapi.dev/

//two large collections of items means two arrays. Start with arrays and fetches
//create reusable card component
//map through arrays and render card for each

//home is landing page

export const Home = () => {
  const [arrayOfPlanets, setArrayOfPlanets] = useState([]);
  const [arrayOfCharacters, setArrayOfCharacters] = useState([]);

  useEffect(() => {
    getData("https://swapi.dev/api/people/", setArrayOfCharacters);
    getData("https://swapi.dev/api/planets/", setArrayOfPlanets);
  }, []);

  function getData(url, setter) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data.results);
        setter(data.results);
      })
      .catch((error) => {
        console.log("Looks like there was a problem: \n", error);
      });
  }

  //console.log(arrayOfCharacters)
  //console.log (arrayOfPlanets)

  return (
    <>
      <h1>Characters</h1>
      <div className="flex">
      {arrayOfCharacters.map((character, index) => {
        return (
          <Card
            type="Character"
            key={index}
            cardData={{
              name: character.name,
              imgURL:
                "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/02/chewbacca-loreal-meme-Edited-1.jpg?q=50&fit=crop&w=480&h=300&dpr=1.5",
                prop1: `Hair Color`,
                prop2: `Eye Color`,
                prop3: `Gender`,
              value1: character.hair_color,
              value2: character.eye_color,
              value3: character.gender,
            objectFromMap: character,
            }}
          />
        );
      })}
     </div>
      <br></br>
      <h1>Planets</h1>
      <div className="flex">
      {arrayOfPlanets.map((planet, index) => {
        return (
          <Card
            type="Planet"
            key={index}
            cardData={{
              name: planet.name,

              imgURL: "https://wallpaperaccess.com/full/1251069.jpg",
              prop1: `Gravity`,
              prop2: `Climate`,
              prop3: `Orbital Period`,
              value1: planet.gravity,
              value2: planet.climate,
              value3: planet.orbital_period,
              objectFromMap: planet,
            }}
          />
        );
      })}
      </div>
    </>
  );
};
 