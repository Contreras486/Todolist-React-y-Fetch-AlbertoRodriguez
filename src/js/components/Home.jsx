import React, { useEffect, useState } from "react";

const Home = () => {
	const API_URL = "https://playground.4geeks.com/todo";
	const USER = "Alberto";

	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState("");

	// Obtener usuario o crearlo
	const getUser = async () => {
		const response = await fetch(`${API_URL}/users/${USER}`);

		if (!response.ok) {
			await createUser();
			return;
		}

		const data = await response.json();
		setTodos(data.todos || []);
	};

	// Crear usuario
	const createUser = async () => {
		await fetch(`${API_URL}/users/${USER}`, {
			method: "POST",
		});
		setTodos([]);
	};

	// Agregar tarea
	const agregarTarea = async (e) => {
		if (e.key === "Enter" && inputValue.trim() !== "") {
			const nuevaTarea = {
				label: inputValue,
				is_done: false,
			};

			await fetch(`${API_URL}/todos/${USER}`, {
				method: "POST",
				body: JSON.stringify(nuevaTarea),
				headers: { "Content-Type": "application/json" },
			});

			await cargarTareas();
			setInputValue("");
		}
	};

	// Cargar tareas
	const cargarTareas = async () => {
		const response = await fetch(`${API_URL}/users/${USER}`);
		const data = await response.json();
		setTodos(data.todos || []);
	};

	// Eliminar tarea
	const eliminarTarea = async (todoId) => {
		await fetch(`${API_URL}/todos/${todoId}`, {
			method: "DELETE",
		});
		await cargarTareas();
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className="container">
			<h1>Lista de tareas</h1>

			<input
				type="text"
				placeholder="Escriba aquí su tarea"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				onKeyDown={agregarTarea}
			/>

			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						{todo.label}
						<span
							style={{ marginLeft: "10px", cursor: "pointer" }}
							onClick={() => eliminarTarea(todo.id)}
						>
							X
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;