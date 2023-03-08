import React, { useEffect, useState } from 'react'
import { getPopularMovies } from '../utils/requests'
import "../css/popularMovies.css"
import 'animate.css';
import { useNavigate } from 'react-router-dom';
const PopularMovies = (props) => {
    const popularMovies = props.popularMovies;
    const navigate = useNavigate()
    return (
        <> <h3 className='hero-popular'>
            <i className="fa fa-film" aria-hidden="true"></i> Popular Movies
        </h3>
            <hr class="solid" />
            <div className="popular-movies-container">
                {popularMovies && popularMovies.map((video) => (<>
                    <div onClick={() => navigate(`/movies/${video.id}`)} className="pop-movie-card">
                        <img src={video.image} alt="" />
                    </div>
                </>))}
            </div>
        </>
    )
}

export default PopularMovies