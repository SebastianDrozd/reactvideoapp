import React from 'react'
import "../css/upcomingMovies.css"
import { useNavigate } from 'react-router-dom';
const UpcomingMovies = (props) => {
    const navigate = useNavigate()
    const upComingMovies = props.upComingMovies;
    console.log(upComingMovies)
  return (
   <>
   <br />
    <h3 className='hero-popular'>
        <i className="fa fa-film" aria-hidden="true"></i> Recently Added Movies
        </h3>
        <hr class="solid"/>
        <div className="popular-movies-container">
            {upComingMovies && upComingMovies.map((video) => (<>
                <div onClick={() => navigate(`/movies/${video.id}`)} className="pop-movie-card">
                    <img src={video.image} alt="" />
                    <div  className="caption">
                            <h3>{video.title}</h3>
                            <p>{video.category_names}</p>
                        </div>
                </div>
            </>))}
            </div>
            
           
           
            <br />
            <br />
            <br />
   
   </>
  )
}

export default UpcomingMovies