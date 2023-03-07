import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import Navibar from './components/navibar';
import Hero from './components/hero';
import LandFooter from './components/landFooter';
import { getPopularMovies } from './utils/requests'
import PopularMovies from './components/popularMovies';
import UpcomingMovies from './components/upcomingMovies';
function App() {

  const [popularMovies, setPopularMovies] = useState([])
  const [upcomingMovies, setUpcomingMovies] = useState([])
  useEffect(() => {
    
    getPopularMovies().then((res) => {
      console.log("this is res ",res.data)
        setPopularMovies(res.data.slice(0,4))
        setUpcomingMovies(res.data.slice(4,10))
    })
},[])
  return (
    <div className="App">
      <Navibar/>
      <div className="app-main">
      <Hero/>  
      <PopularMovies popularMovies = {popularMovies}/>
      <UpcomingMovies upComingMovies = {upcomingMovies}/>
      </div>
      <LandFooter/>
    </div>
  );
}

export default App;
