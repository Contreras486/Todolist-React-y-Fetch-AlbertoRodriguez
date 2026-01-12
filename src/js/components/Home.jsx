import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const API_URL = ""

	const getCharacters = async () => {
		const response = await fetch()
	}


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