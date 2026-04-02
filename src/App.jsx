import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/home/pages/Home.jsx";
import MovieDetails from "./features/movieDetails/pages/MovieDetails.jsx";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movie/:id' element={<MovieDetails />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
