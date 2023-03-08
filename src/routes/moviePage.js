import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/videoPlayer';
import "../css/moviePage.css"
import { getMovieById } from '../utils/requests';
const MoviePage = () => {
    let { id } = useParams();
    const [movie,setMovie] = useState({})
    const [categories,setCategories] = useState([])
    
    useEffect(() => {
        getMovieById(id).then((res) => {
            setMovie(res.data[0])
           let categories = res.data[0].category_names;
           console.log("cats",categories)
           let arr = categories.split(", ")
            setCategories(arr)
        })
    },[])
    return (
        <>
        <div className="movie-page">
            <div className="movie-page-container">
                <div className="movie-poster">
                    <img  src={movie.image} alt="" />
                </div>
                <div className="movie-details">
                    <h2 className='movie-title'>{movie.title}</h2>
                    <h4>{movie.year}</h4>
                    <div className="movie-categories">
                    {categories && categories.map((category) => (<>
                    <p className='cat-ind'>{category} </p>
                    </>))}
                    </div>
                    <p>Available in : 720p </p>
                    <div className="likes-div">
                        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                        <p className='likes-num'>2126</p>
                    </div>
                    <div className="review-div">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <p className='likes-num'>87%</p>
                    </div>
                    <div className="imdb-div">
                        <i className="fa fa-imdb" aria-hidden="true"></i>
                        <a style={{marginLeft:'1em',color:'white'}} href="https://www.imdb.com/title/tt1375666/"> View on ImDb</a>
                    </div>

                </div>
                <div className="movie-desc">
                    <p>{movie.description}</p>
                </div>
                
            </div>
            <hr className='solid' />
            <br />
            <br />
            <VideoPlayer name = {movie && movie.title}/>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            
            </div>
        </>
    )
}

export default MoviePage