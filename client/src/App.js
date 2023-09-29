import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./components/Main/Main.jsx";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/SearchBar/SearchBar"

function App() {
	return (
		<div className="App">
			
      <Routes>
			<Route path="/home" element={<NavBar/>}/>
			<Route path="/" element={<Main/>}/>
			<Route path="/home" element={<Cards/>}/>
      </Routes>
		</div>
	);
}

export default App;
