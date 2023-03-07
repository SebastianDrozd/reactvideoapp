import React from 'react'
import "../css/upcomingMovies.css"
const UpcomingMovies = (props) => {
    const upComingMovies = props.upComingMovies;
    console.log(upComingMovies)
  return (
   <>
   <br />
    <h3 className='hero-popular'>
        <i className="fa fa-film" aria-hidden="true"></i> Upcoming Movies
        </h3>
        <hr class="solid"/>
        <div className="popular-movies-container">
            {upComingMovies && upComingMovies.map((video) => (<>
                <div className="pop-movie-card">
                    <img src={video.image} alt="" />
                </div>
            </>))}
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
   
   </>
  )
}

export default UpcomingMovies