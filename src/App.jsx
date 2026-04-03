import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/home/pages/Home.jsx";
import MovieDetails from "./features/movieDetails/pages/MovieDetails.jsx";
import TVDetails from "./features/tv/pages/TVDetails.jsx";
import Login from "./features/auth/pages/Login.jsx";
import Signup from "./features/auth/pages/Signup.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<TVDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
