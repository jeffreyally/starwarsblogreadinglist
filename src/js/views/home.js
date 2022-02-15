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
		//getCharacters();
		getPlanets();
	}
		, []);
		
	const getPlanets = () => {
		
		fetch("https://swapi.dev/api/planets")
		.then((response) => {
			//console.log(response)
			return response.json();
		})
		.then((jsonresponse)=> {
			console.log(jsonresponse)
			setArrayOfPlanets(jsonresponse.results)
			
			
		})
	}

	console.log(arrayOfPlanets)


return(
	<div className="text-center mt-5">

	</div>
	);
};
