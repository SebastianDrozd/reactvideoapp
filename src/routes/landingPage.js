import React, { useEffect, useState } from 'react'
import Hero from '../components/hero';
import LandFooter from '../components/landFooter';
import { getMovies, sortQueryMovies } from '../utils/requests'
import PopularMovies from '../components/popularMovies';
import UpcomingMovies from '../components/upcomingMovies';

const LandingPage = () => {

    const [popularMovies, setPopularMovies] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])
    useEffect(() => {
      //  getMovies().then((res) => {
     //       console.log("this is res ", res.data)
      //      setPopularMovies(res.data.slice(0, 4))
      //      setUpcomingMovies(res.data.slice(4, 10))
     //   })
    sortQueryMovies("views", "desc").then((res) => {
            setPopularMovies(res.data.slice(0, 4))
        })

    sortQueryMovies("created", "desc").then((res) => {
            setUpcomingMovies(res.data.slice(0, 4))
        })    

    }, [])
    return (
        <>
            <div className="app-main">
                <Hero />
                <PopularMovies popularMovies={popularMovies} />
                <UpcomingMovies upComingMovies={upcomingMovies} />
            </div>
        </>
    )
}

export default LandingPage