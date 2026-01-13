import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const API_URL = "https://playground.4geeks.com/todo"
	const USER = "Alberto"

	const [tarea, setTarea] = useState([])
	const [newTarea, setNewTarea] = useState({

		nombre: "",
		frase: "",
		Imagen: ""

	})
	console.log(tarea);

	const handleInputsCange = (e) => {
		setNewTarea({
			...newTarea,
			[e.target.name]: e.target.value
			})
	}

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
		const response = await fetch(`${API_URL}/users/${USER}`, {
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

	useEffect(() => {
		getCharacters()
	}, [])


	// fetch() => peticion
	// .then()  response.json
	// .then() data
	// .catch() error

	return (
		<div className="container pt 4">
			<h2 className="text-center text-light">Hello Rigo!</h2>
			<form className="mb-5"> 
				<input 
				type="text"
				className="form-control mb-2"
				placeholder="Nueva tarea"
				value={newTarea}
				onChange={handleInputsCange} 
				
				
				/>

			</form>

		</div>
	);
};

export default Home;