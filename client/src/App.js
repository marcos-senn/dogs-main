import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Landing from "./components/Landing/Landing.jsx";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

function App() {
	const location = useLocation();

	return (
		<div className="App">
			{location.pathname !== "/" ? <NavBar /> : null}
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Cards />} />
				<Route path="/detail/:id" element={<Detail />} />
				<Route path="/form" element={<Form />} />
			</Routes>
			{location.pathname !== "" ? <Footer /> : null}
		</div>
	);
}

export default App;
