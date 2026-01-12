import React, { useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const API_URL = "https://playground.4geeks.com"
	const USER = "Alberto"

	const getCharacters = async () => {
		const response = await fetch(`${API_URL}/users/${USER}`)
		console.log(response);
		if (!response.ok) {
			console.log("Debo crear un usuario");
			creaTeUser()
			return
		}
		const data = await response.json()
		console.log(data);
		
		
	}

	const creaTeUser = async () => {
		const response = await fetch(`${API_URL}/users/${USER}`,{
			method: "POST"
		})
		console.log(response);
		if (!response.ok) {
			console.log("Debo crear un usuario");
			
			return
		}
		const data = await response.json()
		console.log(data);
		
	}

	useEffect(()=> {
		getCharacters()
	},[])


	// fetch() => peticion
	// .then()  response.json
	// .then() data
	// .catch() error

	return (
		<div className="text-center">
            <h1 className="text-center mt-5">Hello Rigo!</h1>
			
		</div>
	);
};

export default Home;