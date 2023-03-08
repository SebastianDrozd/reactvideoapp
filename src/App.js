import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Navibar from './components/navibar';
import Hero from './components/hero';
import LandFooter from './components/landFooter';
import { getPopularMovies } from './utils/requests'
import PopularMovies from './components/popularMovies';
import UpcomingMovies from './components/upcomingMovies';
import LandingPage from './routes/landingPage';
import MoviePage from './routes/moviePage';
import BrowseMoviePage from './routes/browseMoviePage';
function App() {
  return (
    <>
      <Navibar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movies/:id" element={<MoviePage/>} />
        <Route path ="/browse" element={<BrowseMoviePage/>}/>
      </Routes>
      <LandFooter/>
    </>
  );
}

export default App;
